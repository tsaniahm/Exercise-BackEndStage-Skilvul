const express = require('express')

const app = express()
const port = 3000;

const usersDB = [
    {
        id: 1,
        name: "bobby"
    },
    {
        id: 2,
        name: "Lala"
    }
]

app.get('/', (req,res) =>{
    //get untuk menampilkan data dari server
    res.send("hello, world");
})

app.get('/users', (req,res) =>{
    const data = {
        name : "kendall"
    }
    console.log(req.query.name)
    console.log(req.query.age)

    res.status(201).send(usersDB)
})

app.post("/users", (req,res) =>{
    const newUser = {
        id: usersDB.length + 1,
        name: "new user"
    }

    usersDB.push(newUser)
    res.status(201)
    res.send(newUser)
})

app.post("/login", (req,res) =>{
    const {username, password} = req.body
    console.log(username, password)
    res.send("ini login")
})

app.listen(port, () =>{
    console.log("Server is listening on port", port)
})
