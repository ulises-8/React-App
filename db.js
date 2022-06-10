
const mysql = require('mysql')
const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "password",
  database: "cities" 
})

db.connect((err) => {
    if (err) throw err;
    console.log('Connected to MySQL Server successfully!')
})

module.exports = db;