import mongoose from 'mongoose'

const currency = new mongoose.Schema({
    USD : {
        type : Number,
    }
})

const pricingSchema = new mongoose.Schema({
    free:{
        type:Number,
        default:0
    },
    Sixmonths:{
        type : Number,
        default : 1000
    },
    Oneyear :{
        type : Number,
        default : 1000
    }
    
})

const subscriptionSchema = new mongoose.Schema({
    teir :{
        type:String,
        enum:["Free","Sixmonths","Oneyear"]
    },
    pricing :[
      pricingSchema,
      currency
    ]
},{timestamps:true})

const Subscription = mongoose.model("Subscription",subscriptionSchema);

modules.export = {
    Subscription
}