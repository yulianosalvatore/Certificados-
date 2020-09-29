"use strict";

const assert = require("assert");
const dotenv = require("dotenv");

//Lee en el archivo .env

dotenv.config();

//Captura las variables de entorno que la aplicación necesita

const {

PORT,
HOST,
HOST_URL,
PGUSER,
PGSERVER,
PGDATABASE,
PGPASSWORD,
}=process.env;


// valida la información de configuración requerida assert( PORT, "PORT configuration is required." );
assert( PORT, "PORT configuration is required." );

assert( HOST, "HOST configuration is required." );

assert( HOST_URL, "HOST_URL configuration is required." );

assert( PGSERVER, "PGSERVER configuration is required.");

assert( PGDATABASE, "PGDATABASE configuration is required." );

assert( PGUSER, "PGUSER configuration is required. " );

assert( PGPASSWORD, "PGPASSWORD configuration is required." );

module.exports={

port: PORT,

host: HOST,

url: HOST_URL,


POSTGRES:{

server: PGSERVER,
database: PGDATABASE,
user: PGUSER,
password: PGPASSWORD,
parsejSON: true,
}
}


