//Usando objeto express
const express = require('express')

// App de Express
const app = express()
app.use(express.json()) // Indicamos que usaremos JSON

// Puerto en que vamos a ver nuestra app: localhost:3000
const port = 3000 // localhost:3000

//ESTO ES UN ENDPOINT
//routes
//Methods HTTP:GET POST,PUT, DELETE
// app.get('/v1/explorer',(req,res) => {
//     console.log(`GET Explorers V1 API ${new Date()}`)
//     const explorer1 = {id:1, name: "Explorer1"}
//     const explorer2 = {id:2, name: "Explorer2"}
//     const explorer3 = {id:3, name: "Explorer3"}
//     const explorers = [explorer1,explorer2,explorer3]
//     //HTTP CODE STATUS: 200
//     res.status(200).json(explorer)

// })

app.get('/v1/explorers/:id',(req,res) => {
    console.log(`GET BY ID Explorers V1 API ${new Date()}`)
    const explorer1 = {id:1, name: "Explorer1"}
    res.status(200).json(explorers) 
})

app.post('/v1/explorers/:id',(req,res) => {
    console.log(`POST Explorer V1 API ${new Date()}`)
    // Agregar la lógica para persistir 
    console.log(req.body) //parámetros del request
    res.status(201).json({message: "Creando exitosamente"})
})

app.put('/v1/explorers/:id',(req,res) => {
    console.log(`Api Explorers PUT request ${new Date()}`)
    console.log(`Update explorer with id ${req.params.id}`)
    const requestBody = req.body //Parametros de un client
    res.status(200).json(explorers) 
})


app.delete('/v1/explorers/:id',(req,res) => {
    console.log(`Api Explorers DELETE request ${new Date()}`)
    console.log(`Delete explorer with id ${req.params.id}`)
    const requestBody = req.body //Parametros de un client
    res.status(200).json({message: "Deleted "}) 
})


//Con esto inicializamos esta app
app.listen(port,()=>{
    console.log(`Example app listenning on port ${port}`)
})

 
 
 


 