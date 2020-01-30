const express = require('express')
require('dotenv').config()
const mongoose = require('mongoose')
// inport routes
const userRoutes = require('./routes/user')

//app
const app = express();


// database
mongoose.connect(
    process.env.MONGO_URI,
    {
        useNewUrlParser: true,
        useCreateIndex: true,
    })
    .then(() => console.log('DB Connected'))

mongoose.connection.on('error', err => {
        console.log(`DB connection error:${err.message}`)
})
    
//routes middlewear
app.use('/api',userRoutes);


const port = process.env.PORT || 8000

app.listen(port, () => {
    console.log(`Server is running on port ${port}`)
})




// DATABASE=mongodb://localhost/mycode-ecommerce