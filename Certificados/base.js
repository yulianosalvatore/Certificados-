const { Pool } = require('pg');

const config = ({
    host:'localhost',
    user:'postgres',
    //password:'yuliano08',
    password:'a12112001',
    database:'mercadeonosa'
})
const pool = new Pool(config);
pool.query('select * from semillero."EventoCucuta"')
.then(items => {
    res.json(response.rows)
    client.end()
})
.catch(err => {
    res.json({dataExists: 'false'})
})