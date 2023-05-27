const express = require('express');
const app = express();
const mongoose = require('mongoose');

const bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

main().catch(err => console.log(err));

async function main() {
    await mongoose.connect('mongodb+srv://VincentVinni:lhPIjteRzoHboir3@cluster0.y9yumhy.mongodb.net/?retryWrites=true&w=majority')
}

const userSchema = new mongoose.Schema({
    Name: String,
    Email: String, 
    Occupation: String, 
    Location: String},
    {collection: "User"}
)

const User = mongoose.model('User', userSchema)

// app.post("/bob", async (req, res) => {
//     const bob = new User({Name: "Bob Lee", Email: "boblee@gmail.com", Occupation: "Plumber", Location: "Yangon, Myanmar"}, )
//     await bob.save()
//     res.json(bob)
// })

app.get('/', (res, req) => {
    req.send("API is running")
})

app.post('/senddata', async (req, res) => {
    try {
        const data = req.body;
        const success = await User.insertMany(data);
        res.send(success);
    } catch (err) {
        res.send(err);
    }
});

app.listen(5000, console.log("Server Started at Port 5000"));
