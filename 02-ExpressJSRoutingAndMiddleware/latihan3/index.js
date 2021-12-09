const express = require("express")
const port = 3001
const app = express()

//nested route
const hello = require("express").Router()

//middleware
const varMiddleware = (req, res, next) =>{
    console.log("running middleware")
    next()
}

const modfiedRequest = (req, res, next)=>{
    req.name = "agusz"
    next()
}

app.use(modfiedRequest)

app.get("/", (req,res)=>{
    const data = {
        //test: "data"
        test : req.name
    }
    res.send(data)
})

app.get("/users", (req,res) =>{

    //coba di postman bikin request get http://localhost:3001/users?name=agung&age=10
    console.log(req.query.name)
    console.log(req.query.age)
    //dari kode diatas di console muncul nama dan age yg di request
})

//nested route
app.use("/hello", hello)
hello.get("/", (req, res) =>{
    let users = [
        {
            name: "Agus"
        },
        {
            name: "hari"
        }
    ]
    res.send(users)
})
hello.get("/ani", (req,res) =>{
    res.send("Ini route ani")
})

let kendaraan = [
    {
        id: 1,
        nama: "Honda",
        tahun: 2001
    },
    {
        id: 2,
        nama: "Toyota",
        tahun: 2002
    }
]

//http://localhost:3001/kendaraan?id=2
app.get("/kendaraan", (req,res) =>{
    var data = kendaraan.filter((u) => u.id === Number(req.query.id))
    res.send(data)
})

app.listen(port, ()=>{
    console.log("server is listening to port 3000")
})