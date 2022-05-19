const express = require('express')
const router = express.Router()
const Inventory = require('../Models/inventory')


router.get('/inventory',async(req,res)=>{
    await Inventory.find().then((response)=>{
        res.send(response)
        return
    })
})

router.post('/addInventory',async(req,res)=>{
    await Inventory.find({
        name:req.body.name
    }).then((response)=>{

        if(Object.entries(response).length>0 )
        {
        res.status(403).send({message:'Already Exist In Inventory'})
        return
        }else{
            const inventory =  new Inventory(req.body)
         inventory.save().then((response)=>{
        res.send({message:"Added to Inventory"})
        return
    }).catch((err)=>{
        res.status(400).send({message:"Some Error Occured"})
        return
    })
        }
    }).catch((err)=>{
        res.status(400).send({message:"Some Error Occured"})
        return 
    })
    
    
})

router.patch('/addInventory/:id',async(req,res)=>{
    await Inventory.findById({_id:req.params.id}).then((response)=>{
         Inventory.findByIdAndUpdate({_id:req.params.id},{quantity:(parseInt(response.quantity) + parseInt(req.body.quantity))}).then(()=>{
             res.send({message:"Quantity Updated"})
         }).catch(()=>{
             res.send({message:"Some error Occured"})
         })
    }).catch(()=>{
        res.status(400).send({message:"Some Error Ocurred"})
    })
    
})

router.delete('/addInventory/:id',async(req,res)=>{
    await Inventory.findByIdAndDelete({_id:req.params.id}).then((response)=>{
        res.send({message:'Data Deleted'})
    }).catch(()=>{
        res.status(400).send({message:"Some Error Ocurred"})
    })
    
})

router.patch('/deductInventory',async(req,res)=>{
    const inventory = req.body;
    [...inventory].forEach((data)=>{
         Inventory.findById({_id:data._id}).then((response)=>{
            Inventory.findByIdAndUpdate({_id:data._id},{quantity:(parseInt(response.quantity) - parseInt(data.quantity))}).then(()=>{
               
            }).catch(()=>{
                res.send({message:"Some error Occured"})
                return
            })
       })
    })
    res.send({message:"Updated Quantity"})

})


module.exports = router;