const express = require('express')
const { Pool } = require('pg');

// use las variables de process.env para mantener las variables privadas,
require('dotenv').config()

// Express Middleware
const helmet = require('helmet') // crea headers que protegen de ataques (seguridad)
const bodyParser = require('body-parser') // convierte la respuesta en un formato utilizable
const cors = require('cors')  // permite / no permite la comunicación entre sitios
const morgan = require('morgan') // solicitudes de registros


// db Connection w/ localhost
const config = ({
  host:'localhost',
  user:'postgres',
  password:'yuliano08',
  // password:'a12112001',
  database:'mercadeonosa'
})
const db = new Pool(config);

// Controllers - aka, las consultas a db 
const main = require('./src/controllers/main')

// App
const app = express()

// App Middleware, direcciones que estan permitidas a consultar el back
const whitelist = ['http://localhost:3000']
const corsOptions = {
  origin: function (origin, callback) {
    if (whitelist.indexOf(origin) !== -1 || !origin) {
      callback(null, true)
    } else {
      callback(new Error('Not allowed'))
    }
  }
}
app.use(helmet())
app.use(cors(corsOptions))
app.use(bodyParser.json())
app.use(morgan('combined')) // use 'tiny' o 'combined'

// App Routes - Auth
app.get('/', (req, res) => res.send('hello world'))
app.get('/users', (req, res) => main.getUsers(req, res, db))
app.get('/user', (req, res) => main.getUsersById(req, res, db))
app.post('/Select/', (req, res) => main.getData(req, res, db))
app.post('/user', (req, res) => main.createUser(req, res, db))
app.put('/user', (req, res) => main.updateUser(req, res, db))
app.delete('/user', (req, res) => main.deleteUser(req, res, db))

// App Server Connection
app.listen(process.env.PORT || 4000, () => {
  console.log(`app is running on port ${process.env.PORT || 4000}`)
})