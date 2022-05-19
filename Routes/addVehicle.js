const express = require('express')
const router = express.Router();
const addVehicle = require('../Models/addVehicleModel')

router.post('/addVehicle', async (req,res)=>{
    const newVehicle = new addVehicle(req.body) 
    await newVehicle.save().then((response)=>{
        res.send({message:"Inserted Successfully"})
    }).catch((err)=>{
        res.status(403).send(err)
    })
    
})
router.get('/vehicles',async (req,res)=>{
   await addVehicle.find().then((response)=>{
       let response1 = response.filter((data)=> !data.deleted)
        res.send(response1)
    }).catch((err)=>{
        res.status(403).send(err)
    })
})

router.patch('/vehicles/:id',async(req,res)=>{

    await addVehicle.findByIdAndUpdate({_id:req.params.id},{
        vehicleName:req.body.vehicleName,
        vehicleNumber:req.body.vehicleNumber,
        vehicleOwner:req.body.vehicleOwner,
        mobile:req.body.mobile,
        problem:req.body.problem,
        expectedCost:req.body.expectedCost,
        kms:req.body.kms,
        expectedFixDate:req.body.expectedFixDate,
        pending:req.body.pending,
        inventory:req.body.inventory
      
        }).then((response)=>{
        res.status(200).send({message:"Updated Successfully"})
    }).catch((err)=>{
        res.status(403).send(err)
    })
})

router.delete('/vehicles/:id',async (req,res)=>{
    await addVehicle.findByIdAndUpdate({_id:req.params.id},{deleted:true}).then(()=>{
        res.status(200).send({message:"Deleted Successfully"})
    }).catch((err)=>{
        res.status(403).send(err)
    })
})


module.exports = router;