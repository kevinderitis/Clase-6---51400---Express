import express from 'express';
import ProductManager from './ProductManager.js';
const app = express();

app.use(express.urlencoded({extended: true}));

let usuarios = [{id:1, nombre: 'Ana', genero: 'F'}, {id:2, nombre: 'Lucas', genero: 'M'}, {id:3, nombre: 'Raul', genero: 'M'}]
const manager = new ProductManager()


app.get('/', (req, res) => {
    res.send('Mi primer hola mundo desde express')
})

app.get('/saludo', (req, res) => {
    res.send('Saludo desde express')
})

app.get('/bienvenida', (req, res) => {
    let mensaje = '<p style="color: blue;">Bienvenidos</p>'
    res.send(mensaje)
})

app.get('/usuario', (req, res) => {
    let usuario = {
        nombre: 'Pedrito',
        apellido: 'Rodriguez',
        edad: 25,
        correo: 'pr@gmail.com'
    }
    res.send(usuario)
})

app.get('/usuarios', (req, res) => {
    let { genero } =  req.query;
    let response = genero ? usuarios.filter(user => user.genero === genero) : usuarios;
    res.send(response)
})

app.get('/usuarios/:id', (req, res) => {
    console.log(req.params)
    let id = req.params.id;
    let usuario = usuarios.find(user => user.id == id)
    res.send(usuario)
})

app.get('/productos', (req, res) => {
    let {nombre, apellido, otro } = req.query;
    let usuario = {
        nombre,
        apellido,
        fecha: '65465456465465432132',
        otro
    }
    res.send(usuario)
})

app.get('/productManagerEx', async (req, res) => {
    let productos = await manager.getProducts()
    res.send(productos)
})


const server = app.listen(8080, () => console.log('Server running on port: 8080'))