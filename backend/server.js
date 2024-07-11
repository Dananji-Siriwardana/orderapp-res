const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');

require('dotenv').config();

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

const uri = process.env.ATLAS_URI;
mongoose.connect(uri, {useUnifiedTopology:true ,useNewUrlParser:true}
);
const connection = mongoose.connection;
connection.once('open',() => {
    console.log("MongoDB databse connection established successsfully");
})

const shippingRouter = require('./routes/payments'); 
const cartRouter = require('./routes/carts');
const supplierRouter = require('./routes/supplier');

app.use('/supplier',supplierRouter);
app.use('/check',shippingRouter);
app.use('/cart',cartRouter);

app.listen(port, () => {
    console.log(`Server is running on port: ${port}`);
});

