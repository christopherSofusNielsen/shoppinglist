const express=require('express');
const router=express.Router();

// Item model
const Item=require('../../models/Item');

// @route GET api/items
// @desc Get all Items
// @access Public

router.get('/', (req, res)=>{
    Item.find()
        .sort({date:-1})
        .then(items=>res.json(items));
});

// @route POST api/items
// @desc Create a item
// @access Public

router.post('/', (req, res)=>{
    const newItem=new Item({
        name: req.body.name
    });

    newItem.save()
        .then(item=>res.json(item))
        .catch(err=>res.status(400).send({"Error":"Must provide name in body as JSON syntax"}));
});

// @route POST api/items/:id
// @desc Create a item
// @access Public

router.delete('/:id', (req, res)=>{
    Item.findById(req.params.id)
        .then(item=>item.remove()
            .then(()=>res.json({succes:true})))
        .catch(err=>res.status(404).json({succes:false,msg:"Could not find item"}));
})


module.exports=router;