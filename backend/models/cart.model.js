const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const cartItemSchema = new Schema({
  name: {type:String,required:true,},
  price: {type:Number,required:true,},
  quantity:{type:Number,required:true,},
},{
    timestamps:true,
});

const CartItem = mongoose.model('CartItem', cartItemSchema);
 
module.exports = CartItem; 