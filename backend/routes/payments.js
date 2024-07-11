const express = require('express');
const router = express.Router();

// Import the Check model
let Check = require('../models/payment.model');

router.route('/').get((req, res) => {
  Check.find()
  .then(Check => res.json(Check))
  .catch(err => res.status(400).json('Error: '+err))
});

// Handle POST request to add a new check
router.route('/add').post((req, res) => {
  const paymentData = req.body.paymentData;
  const shippingData = req.body.shippingData;

  // Create a new Check object with the received data
  const newCheck = new Check({
    paymentMethod: paymentData.paymentMethod,
    debitCardNumber: paymentData.debitCardNumber,
    debitCardExpiration: paymentData.debitCardExpiration,
    debitCardCVV: paymentData.debitCardCVV,
    name: shippingData.name,
    address: shippingData.address,
    province: shippingData.province,
    district: shippingData.district,
    town: shippingData.town,
    mail: shippingData.mail,
    phone: shippingData.phone
  });

  // Save the new Check object to the database
  newCheck.save()
    .then(() => res.json('shipping added!'))
    .catch(err => res.status(400).json(`Error: ${err}`));
  });

  router.route('/:id').get((req, res) => {
  Check.findById(req.params.id)
  .then(Check => res.json(Check))
  .catch(err => res.status(400).json('Error: '+err));
  });


module.exports = router;
