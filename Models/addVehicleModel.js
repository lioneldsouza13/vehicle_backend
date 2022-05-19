const mongoose = require('mongoose');

const addVehicleSchema = new mongoose.Schema({
    vehicleName:{
        type:String,
        required:true
    },
    vehicleNumber:{
        type:String,
        required:true
    },
    vehicleOwner:{
        type:String,
        required:true
    },
    mobile:{
        type:String,
        required:true
    },
    problem:{
        type:String,
        required:true
    },
    expectedCost:{
        type:Number,
        required:true
    },
    kms:{
        type:Number,
        required:true
    },
    expectedFixDate:{
        type:String,
        required:true
    },
    createdDate:{
        type:String
    },
    completedDate:{
        type:Date
    },
    pending:{
        type:Boolean
    },
    deleted:{
        type:Boolean,
        default:false
    },
    inventory:{
        type:Object
    }


})

const addVehicle = mongoose.model("Vehicle",addVehicleSchema)

module.exports = addVehicle;