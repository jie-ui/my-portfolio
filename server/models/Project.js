import mongoose from "mongoose";

const projectSchema = mongoose.Schema({
    title: {type:String ,required:true},
    firstname:{type:String, required:true},
    lastname:{type:String,required:true},
    email:{type:String,require:true},
    completion:{type:Date, require:true},
    description:{type:String, require:true}
});

export default mongoose.model("Project",projectSchema);