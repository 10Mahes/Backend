const express = require('express');
const mongoose = require('mongoose');
const Product = require('./models/product.model.js');
const ProductRouter = require('./routes/product.route.js');


const app = express();
const PORT = 3000;

//middleware to parse json data
app.use(express.json())

app.use(express.urlencoded({extended: true}));

app.use('/products',ProductRouter);


//Howe route
app.get('/', (req, res) => {
   res.send("Hello World")
});


// mongoose.connect('mongodb+srv://smahes789:mahes2000@backenddb.ztk7bjb.mongodb.net/Node-API?retryWrites=true&w=majority&appName=backendDB')
//    .then(() => {
//       console.log("Connected to db")
//       app.listen(PORT, () => {
//          console.log(`Server is running on port ${PORT}`)
//       })
//    })
//    .catch(() => {
//       console.log("Not Connected to DB");
//    })
