const router = require('express').Router();
let Cart = require('../models/cart.model');

router.route('/').get((req, res) => {
    Cart.find()
    .then(CartItem => res.json(CartItem))
    .catch(err => res.status(400).json('Error: '+err))
  });
  
  router.route('/add').post((req, res) => {
    const cartItems = req.body.cartItems;
    const name = req.body.name;
    const price = req.body.price;
    const quantity = req.body.quantity;

    const newCart = new Cart({
      cartItems,
      name,
      price,
      quantity
    });

    newCart.save()
    .then(()=> res.json('Cart added!'))
    .catch(err=>res.status(400).json('Error:'+err));
  });
  
  router.route('/:id').get((req, res) => {
    Cart.findById(req.params.id)
    .then(CartItem => res.json(CartItem))
    .catch(err => res.status(400).json('Error: '+err));
  });
  
  router.route('/:id').delete((req,res) => {
    Cart.findByIdAndDelete(req.params.id)
        .then(() => res.json('Cart deleted!'))
        .catch(err => res.status(400).json('Error: '+err));
});
  
router.route('/update/:id').post((req,res) => {
  Shipping.findById(req.params.id)
      .then(CartItem => {
          CartItem.cartItems = req.body.CartItem;
          CartItem.name = req.body.name;
          CartItem.price = req.body.price;
          CartItem.quantity = req.body.quantity;
         
          CartItem.save()
              .then(() => res.json('Cart updated!'))
              .catch(err => res.status(400).json('Error: '+err))
      })
      .catch(err => res.status(400).json('Error: '+err));
});

module.exports = router;