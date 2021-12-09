const express = require("express")

const app = express()
const port = 3000

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


app.get("/", (req,res) =>{
    const data= {
        message : "hello world"
    }
    res.status(201)
    res.send(data)
    res.end();
})

app.get("/users", (req,res) =>{
    const users= {
        name : "bob"
    }
    //mementukan status code
    res.status(201)
    res.send(usersDB)
    res.end();
})

app.post("/users", (req, res) =>{
    const newUser = {
        id: usersDB.length + 1,
        name: "new user"
    }
    usersDB.push(newUser)
    res.status(201) //soalnya di post kita create something
    res.send(newUser)
})

app.listen(port, () =>{
    console.log("server is listening on port", port)
})

