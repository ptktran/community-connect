const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const { auth } = require('express-oauth2-jwt-bearer');

const app = express();

app.use(cors());

const PORT = 5000

app.listen(PORT, console.log(`Server Started at Port ${PORT}`));

// const jwtCheck = auth({
//     audience: 'https://communityconnect.com',
//     issuerBaseURL: 'https://dev-0id2uicgi5udqk1l.us.auth0.com/',
//     tokenSigningAlg: 'RS256'
// });
  
// // auth router attaches /login, /logout, and /callback routes to the baseURL
// app.use(jwtCheck);
  
// req.isAuthenticated is provided from the auth router
app.get('/', (req, res) => {
    res.send(req.oidc.isAuthenticated() ? 'Logged in' : 'Logged out');
});

app.get('/test', (req, res) => {
    const auth = req.auth;
    res.send(JSON.stringify(auth));
})

const bodyParser = require("body-parser");
app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));;
app.use(bodyParser.json())

main().catch(err => console.log(err));

async function main() {
    await mongoose.connect('mongodb+srv://VincentVinni:lhPIjteRzoHboir3@cluster0.y9yumhy.mongodb.net/CommunityConnect?retryWrites=true&w=majority')
}

const userSchema = new mongoose.Schema({
    name: String,
    email: String, 
    age: Number,
    isFreelancer: Boolean, 
    isBusiness: Boolean, 
    occupation: String, 
    location: String
})


// {
//     "name": "Peter Tran",
//     "email": "petertran@gmail.com",
//     "age": 18,
//     "isFreelancer": true,
//     "isBusiness": false,
//     "occupation": "student",
//     "location": "nova scotia"
// }


const postSchema = new mongoose.Schema({
    author: {
      name: String,
      email: String
    },
    title: String, 
    location: String, 
    date: String, 
    description: String, 
    image: String, 
    min_price: Number,
    max_price: Number, 
    likes: Number, 
    comments: Number
})


const User = mongoose.model('User', userSchema, "User")
const Post = mongoose.model('Post', postSchema, "Post")

// app.post("/test", async (req, res) => {
//     const data = req.body; 
//     res.send(data); 
// })

app.post("/User/new", async (req, res) => {
    const newUser = new User({
        name: req.body.name,
        email: req.body.email,
        age: req.body.age,
        isFreelancer: req.body.isFreelancer,
        isBusiness: req.body.isBusiness,
        occupation: req.body.occupation,
        location: req.body.location
    })
    try {
      await newUser.save()
    //   console.log(req.body)
      res.json(newUser)
    } catch (error) {
      console.log(error)
    }
})

app.get("/Users", async (req, res) => {
    const allUsers = await User.find();
    return res.json(allUsers);
})

app.get("/User/:id", async (req, res) => {
    const user = await User.findById(req.params.id);
    return res.json(user);
})

app.post("/Post/new", async (req, res) => {
    const newPost = new Post({
        author: req.body.author,
        title: req.body.title, 
        location: req.body.location, 
        date: req.body.date, 
        description: req.body.description, 
        image: req.body.image, 
        min_price: req.body.min_price, 
        max_price: req.body.max_price, 
        likes: req.body.likes, 
        comments: req.body.comments
    })
    await newPost.save()
    res.json(newPost)
})

app.get("/Posts", async (req, res) => {
    const posts = await Post.find();
    return res.json(posts); 
})
