import axios from 'axios';
import {useState} from "react";

    interface addClient{
        fname:String,
        lname:String,
        mob:String,
        photo:String,
        dob:String
    }

    export const addClient = async({fname, lname, mob, photo, dob}:addClient) =>{

        const response = await axios({
            method: "post",
            url: 'http://127.0.0.1:8080/clients',
            headers: { 'content-type': 'application/json' },
            data: {
                "first_name":fname,
                "last_name":lname,
                "mobile":mob,
                "photo":photo,
                "birth_date":dob
            }
        })
        console.log("Data Added",response.data);
    }


    export const getAllClients = async ()=>{
    const response = await axios({
        method: "get",
        url: 'http://127.0.0.1:8080/clients',
        headers: { 'content-type': 'application/json' },
    })
    console.log("Data Showing ",response.data);
    return response.data;
}
