use actix_web::{web, Error, HttpResponse, Responder};
use super::models::{NewClient, Client, InputClient};
use super::schema::clients::dsl::*;
use super::Pool;
use crate::diesel::QueryDsl;
use crate::diesel::RunQueryDsl;
use diesel::dsl::{delete, insert_into};
use std::vec::Vec;

pub async fn actix_running() -> impl Responder{
    format!("Actix Web Server Running on port 8080....")
}

pub async fn get_clients(db: web::Data<Pool>) -> Result<HttpResponse, Error> {
    Ok(web::block(move || get_all_clients(db))
        .await
        .map(|client| HttpResponse::Ok().json(client))
        .map_err(|_| HttpResponse::InternalServerError())?)
}

fn get_all_clients(pool: web::Data<Pool>) -> Result<Vec<Client>, diesel::result::Error> {
    let conn = pool.get().unwrap();
    let items = clients.load::<Client>(&conn)?;
    Ok(items)
}

pub async fn get_client_by_id(
    db: web::Data<Pool>,
    client_id: web::Path<i32>,
) -> Result<HttpResponse, Error> {
    Ok(
        web::block(move || db_get_client_by_id(db, client_id.into_inner()))
            .await
            .map(|client| HttpResponse::Ok().json(client))
            .map_err(|_| HttpResponse::InternalServerError())?,
    )
}

pub async fn add_client(
    db: web::Data<Pool>,
    item: web::Json<InputClient>,
) -> Result<HttpResponse, Error> {
    Ok(web::block(move || add_single_client(db, item))
        .await
        .map(|client| HttpResponse::Created().json(client))
        .map_err(|_| HttpResponse::InternalServerError())?)
}

pub async fn delete_client(
    db: web::Data<Pool>,
    client_id: web::Path<i32>,
) -> Result<HttpResponse, Error> {
    Ok(
        web::block(move || delete_single_client(db, client_id.into_inner()))
            .await
            .map(|client| HttpResponse::Ok().json(client))
            .map_err(|_| HttpResponse::InternalServerError())?,
    )
}

fn db_get_client_by_id(pool: web::Data<Pool>, client_id: i32) -> Result<Client, diesel::result::Error> {
    let conn = pool.get().unwrap();
    clients.find(client_id).get_result::<Client>(&conn)
}

fn add_single_client(
    db: web::Data<Pool>,
    item: web::Json<InputClient>,
) -> Result<Client, diesel::result::Error> {
    let conn = db.get().unwrap();
    let new_client = NewClient {
        first_name: &item.first_name,
        last_name: &item.last_name,
        mobile: &item.mobile,
        time_created: &format!("{}", chrono::Local::now().naive_local()),
        photo: &item.photo,
        birth_date: &item.birth_date,
    };
    insert_into(clients).values(&new_client).execute(&conn).expect("Error");
    let result = clients.order(id).first(&conn).unwrap();
    Ok(result)
}

fn delete_single_client(db: web::Data<Pool>, client_id: i32) -> Result<usize, diesel::result::Error> {
    let conn = db.get().unwrap();
    let count = delete(clients.find(client_id)).execute(&conn)?;
    Ok(count)
}
