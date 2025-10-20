import mongoose from "mongoose";

const educationSchema = mongoose.Schema({
    title:{type:String,require:true},
    firstname:{type:String,require:true},
    lastname:{type:String,require:true},
    email:{type:String,require:true},
    completion:{type:Date,require:true},
    description:{type:String,require:true},
});
export default mongoose.model("Education", educationSchema);