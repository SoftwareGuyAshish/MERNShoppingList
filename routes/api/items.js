const express = require('express');
const router = express.Router();

//Item Model
const Item = require('../../models/Item');


// @route Get /api/items
// @disc GET ALL ITEMS
// @access Public
router.get( '/', (req, res) => {
    Item.find()
        .sort({ date: -1})
        .then(items => res.json(items))
});

// @route Post /api/items
// @disc POST OR CREATE ITEMS
// @access Public
router.post( '/', (req, res) => {
    const newItem = new Item({
        name: req.body.name
    })

    newItem.save().then(item => res.json(item))
});

// @route DELETE /api/items/:id
// @disc DELETE ITEMS
// @access Public
router.delete( '/:id', (req, res) => {
    Item.findById(req.params.id)
        .then(item => item.remove().then(() => res.json({success : true})))
        .catch(err => res.status(500).json({success: false}))
});

module.exports = router;