const express = require('express')
const app = express()

app.get('/', (res, req) => {
    req.send("API is running")
})
app.listen(5000, console.log("Server Started at Port 5000"));
