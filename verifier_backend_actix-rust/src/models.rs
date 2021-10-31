use crate::schema::*;
use serde::{Deserialize, Serialize};

#[derive(Debug, Serialize, Deserialize, Queryable)]
pub struct Client{
    pub id: i32,
    pub first_name: String,
    pub last_name: String,
    pub mobile: String,
    pub photo: String,
    pub birth_date: String,
    pub time_created: String,
}

#[derive(Insertable, Debug)]
#[table_name = "clients"]
pub struct NewClient<'a> {
    pub first_name: &'a str,
    pub last_name: &'a str,
    pub mobile: &'a str,
    pub photo: &'a str,
    pub birth_date: &'a str,
    pub time_created: &'a str,
}

#[derive(Debug, Serialize, Deserialize)]
pub struct InputClient {
    pub first_name: String,
    pub last_name: String,
    pub mobile: String,
    pub photo: String,
    pub birth_date: String,
    pub time_created: String
}
