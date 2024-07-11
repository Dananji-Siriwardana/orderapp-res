const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const supplierSchema = new Schema({
    SupplierName: {
        type: String,
        required: true,
    },
    ContactNo: {
        type: String,
        required: true,
    },
    Address: {
        type: String,
        required: true,
    },
    Email: {
        type: String,
        required: true,
    },
    Password: {
        type: String,
        required: true,
    },
    // ItemCategories: {
    //     type: String,
    //     required: true,
    // },


},{
    timestamps: true,
});

const Exercise = mongoose.model('Exercise',supplierSchema);

module.exports=Exercise;