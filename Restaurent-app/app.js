import express from "express"
import mongoose from "mongoose"
import restaurants from "./model.js"
import Cors from 'cors'


//App config
// pass : 40K4wSgbSgvrGyEy
const app = express()
const port = 8002;
// const url = "mongodb+srv://user:40K4wSgbSgvrGyEy@cluster0.9dxxs.mongodb.net/user-app?retryWrites=true&w=majority"
const url = `mongodb://localhost/restaurantDBx`

// Middleware
app.use(express.json())
app.use(Cors())

// DB config
mongoose.connect(url, {
    useNewUrlParser: true
})

const con = mongoose.connection

con.on('open', () => console.log("connected..."))

//Api endpoint
app.get('/', (req, res) => res.status(200).send("Restaurant API"));

app.post('/restaurants', (req, res) => {
    const restaurant = req.body;

    restaurants.create(restaurant, (err, data) => {
        if (err) {
            res.status(500).send(err)
        } else {
            res.status(201).send(data)
        }
    })
})

app.get('/restaurants', (req, res) => {
    restaurants.find((err, data) => {
        if (err) {
            res.status(500).send(err)
        } else {
            res.status(201).send(data)
        }
    })
})

app.get('/restaurants/:id',async(req,res)=>{
    try{
        const restaurant = await restaurants.findById(req.params.id)
        res.json(restaurant)
    }catch(err){
        res.send("Error" + err)
    }
})

app.patch('/restaurants/:id',async(req,res)=>{
    try{
        const _id = req.params.id
        const restaurant = await restaurants.findByIdAndUpdate(_id,req.body,{new:true})
        res.json(restaurant);
    }catch(err){
        res.send("Error"+err)
    }
})

app.delete('/restaurants/:id',async(req,res)=>{
    try{
        const restaurant = await restaurants.findById(req.params.id)
        // alien.sub = req.body.sub
        const r1 = await restaurant.remove()
        res.json(r1);
    }catch(err){
        res.send("Error"+err)
    }
})



//Listener
app.listen(port, () => console.log("Listening on :" + port))