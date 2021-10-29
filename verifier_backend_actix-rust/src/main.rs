use actix_web::{web, App, HttpServer};

#[macro_use]
extern crate diesel;

use diesel::r2d2::{self, ConnectionManager};
use diesel::SqliteConnection;

mod routes;
mod models;
mod schema;
mod errors;

pub type Pool = r2d2::Pool<ConnectionManager<SqliteConnection>>;

#[actix_web::main]
async fn main() -> std::io::Result<()> {
    dotenv::dotenv().ok();

    let database_url = std::env::var("DATABASE_URL").expect("DATABASE_URL must be set");
    let manager = ConnectionManager::<SqliteConnection>::new(database_url);
    let pool:Pool = r2d2::Pool::builder()
        .build(manager)
        .expect("Failed to create pool.");


    HttpServer::new( move || {
        App::new()
            .data(pool.clone())
            .route("/", web::get().to(routes::actix_running))
            .route("/clients", web::get().to(routes::get_clients))
            .route("/clients/{id}", web::get().to(routes::get_client_by_id))
            .route("/clients", web::post().to(routes::add_client))
            .route("/clients/{id}", web::delete().to(routes::delete_client))
    })
        .bind("127.0.0.1:8080")?
        .run()
        .await
}
