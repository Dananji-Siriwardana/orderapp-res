const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const paymentSchema = new Schema({
  paymentMethod: {
    type: String,
    required: true,
  },
  debitCardNumber: {
    type: String,
    required: function () {
      return this.paymentMethod === 'debitCard';
    },
  },
  debitCardExpiration: {
    type: String,
    required: function () {
      return this.paymentMethod === 'debitCard';
    },
  },
  debitCardCVV: {
    type: String,
    required: function () {
      return this.paymentMethod === 'debitCard';
    },
  },

  name: {
    type: String,
    required: true,
  },
  address: {
    type: String,
    required: true,
  },
  province: {
    type: String,
    required: true,
  },
  district: {
    type: String,
    required: true,
  },
  town: {
    type: String,
    required: true,
  },
  mail: {
    type: String,
    required: true,
  },
  phone: {
    type: Number,
    required: true,
  },
  

});

const Check = mongoose.model('Check', paymentSchema);

module.exports = Check;
