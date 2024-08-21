import mongoose from 'mongoose'

const subscribersSchema = new mongoose.Schema({
  subscriber :{
    type : mongoose.Schema.Types.ObjectId,
    ref : "User"
  },
  teir :{
    type:mongoose.Schema.Types.ObjectId,
    ref:"Subscription"
  }  
})

const Subscriber = mongoose.model("Subscriber",subscribersSchema);

modules.export = {
    Subscriber
}