use actix_web::Responder;

pub async fn actix_running() -> impl Responder{
    format!("Running actix web server");
}

pub async fn get_clients() -> impl Responder{
    format!("Hello Prasad")
}

pub async fn get_client_by_id() -> impl Responder{
    format!("Hello Prasad")
}

pub async fn add_client() -> impl Responder{
    format!("Hello Prasad")
}

pub async fn delete_client() -> impl Responder{
    format!("Hello Prasad")
}
