const express = require('express')
const mysql = require('mysql')
const cors = require('cors')
const app = express()

app.use(express.json())
app.use(cors())

const db = mysql.createConnection({
    user: "root",
    host: "127.0.0.1",
    password: "password",
    database: "authentication"
})

app.post('/signup', (req, res) => {
    const username = req.body.username
    const password = req.body.password

    db.query("INSERT INTO users (username, password) VALUES (?, ?)", [username, password], (err, result) => {
        console.log(err)
    })
})

app.post('/login', (req, res) => {
    const username = req.body.username
    const password = req.body.password

    db.query("SELECT * FROM  users WHERE username = ? AND password = ?", [username, password], (err, result) => {
        if (err) {
            res.send({err: err})
        } else {
            if (result) {
                res.send(result)
            } else {
                res.send({message: "Invalid credentials"})
            }
        }
    })
})

app.listen(3002, () => {
    console.log('server running on port 3002')
})