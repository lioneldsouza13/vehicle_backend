const mongoose = require('mongoose');
const { required } = require('nodemon/lib/config');

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
        required:true,
        minlength:10
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
    }


})

const addVehicle = mongoose.model("Vehicle",addVehicleSchema)

module.exports = addVehicle;