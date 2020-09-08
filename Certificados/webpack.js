const express = require('express')

// use las variables de process.env para mantener las variables privadas,
require('dotenv').config()

// Express Middleware
const helmet = require('helmet') // crea headers que protegen de ataques (seguridad)
const bodyParser = require('body-parser') // convierte la respuesta en un formato utilizable
const cors = require('cors')  // permite / no permite la comunicación entre sitios
const morgan = require('morgan') // solicitudes de registros


// db Connection w/ localhost
var db = require('knex')({
  client: 'pg',
  connection: {
    host : 'localhost',
    user : 'postgres',
    password : 'a12112001',
    database : 'mercadeonosa'
  }
});

// Controllers - aka, las consultas a db 
const main = require('./controllers/main')

// App
const app = express()

// App Middleware
const whitelist = ['http://localhost:3001']
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
app.get('/crud', (req, res) => main.getTableData(req, res, db))
app.post('/crud', (req, res) => main.postTableData(req, res, db))
app.put('/crud', (req, res) => main.putTableData(req, res, db))
app.delete('/crud', (req, res) => main.deleteTableData(req, res, db))

// App Server Connection
app.listen(process.env.PORT || 3000, () => {
  console.log(`app is running on port ${process.env.PORT || 3000}`)
})