const router = require('express').Router();
let Supplier = require('../models/supplier.models');

//handle incoming http reqs
router.route('/').get((req,res) => {
    Supplier.find()
        .then(exercises => res.json(exercises))
        .catch(err => res.status(400).json('Error: '+err));
});

//handles incoming post http reqs
//ADD
router.route('/add').post((req,res) => {
    const SupplierName = req.body.SupplierName;
    const ContactNo = req.body.ContactNo;
    const Address= req.body.Address;
    const Email= req.body.Email;
    const Password = req.body.Password;
    // const ItemCategories = req.body.ItemCategories;

    const newSupplier = new Supplier({
       SupplierName,
       ContactNo,
       Address,
       Email,
       Password
    //    ItemCategories

    });
    
    newSupplier.save()
        .then(() => res.json('Supplier added!'))
        .catch(err => res.status(400).json('Error:' +err));
});

router.route('/:id').get((req,res) => {
    Supplier.findById(req.params.id)
         .then(Supplier => res.json(Supplier))
        .catch(err => res.status(400).json('Error: '+err));
});

//DELETE
router.route('/:id').delete((req,res) => {
    Supplier.findByIdAndDelete(req.params.id)
        .then(() => res.json('Exercise deleted!'))
        .catch(err => res.status(400).json('Error: '+err));
});

//UPDATE
router.route('/update/:id').post((req,res) => {
    Supplier.findById(req.params.id)
        .then(Supplier => {
            Supplier.SupplierName = req.body.SupplierName;
            Supplier.ContactNo = req.body.ContactNo;
            Supplier.Address= req.body.Address;
            Supplier.Email= req.body.Email;
            Supplier.Password = req.body.Password;
            // Supplier.ItemCategories = req.body.ItemCategories;

            Supplier.save()
                .then(() => res.json('Exercise updated!'))
                .catch(err => res.status(400).json('Error: '+err))
        })
        .catch(err => res.status(400).json('Error: '+err));
});

module.exports=router;