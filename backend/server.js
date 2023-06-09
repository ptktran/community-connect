const express = require('express');

const app = express();
const mongoose = require('mongoose');
const { MongoClient } = require('mongodb');
const uri = 'mongodb+srv://VincentVinni:lhPIjteRzoHboir3@cluster0.y9yumhy.mongodb.net/CommunityConnect?retryWrites=true&w=majority'
const bodyParser = require("body-parser");
const cors = require('cors');

app.use(cors());

app.use(bodyParser.urlencoded({ extended: false }));;
app.use(bodyParser.json())

main().catch(err => console.log(err));

async function main() {
    await mongoose.connect(uri)
}

const userSchema = new mongoose.Schema({
    name: String,
    email: String, 
    age: Number,
    isFreelancer: Boolean, 
    isBusiness: Boolean, 
    occupation: String, 
    location: String
  }
)

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
    comments: Number,
    likedBy: []
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
        comments: req.body.comments,
        likedBy: req.body.likedBy
    })
    await newPost.save()
    res.json(newPost)
})

app.get("/Posts", async (req, res) => {
    const posts = await Post.find();
    return res.json(posts); 
})

app.get('/', (res, req) => {
    req.send("API is running")
})


app.get('/find-user', async (req, res) => {
  const a = await User.find({location: "Toronto"}).toArray()
  return res.json(a)
});

app.get('/find-user/:email', async (req, res) => {

  const fieldValue = req.params.email;
  
  const query = { email: fieldValue };
  const filteredUsers = await User.find(query);
  if(!filteredUsers) {
      res.send({error : "No task was found"})
  }
  console.log(filteredUsers);
  res.send(filteredUsers);
});

app.put('/update/:id', async (req, res) => {
  try {
    const postId = req.params.id
    const updatedLikes = req.body.likes 
    const updatedLikedBy = req.body.likedBy
    const result = await Post.findByIdAndUpdate(postId, { likes: updatedLikes, likedBy: updatedLikedBy }, { new: true })
    res.json(result)
  } catch (error) {
    console.log('Error updating: ' + error)
  }
})

// app.get('/likedBy/:id', async (req, res) => {
//   try {
//     const postId = req.params.id
//     const result = await Post.find(postId); 
//     res.send(result)
//   } catch (error) {
//     console.log('Error: ' + error)
//   }

// })



app.listen(5000, console.log("Server Started at Port 5000"));

