import mongoose from 'mongoose';


const designationSchema = new mongoose.Schema({
    title :{
        type : String,
        required : true
    },
    basicSal : {
        type : String,
        required : true
    },
    numOfLeaves : {
        annual :{
            type : Number,
            required : true,
            default : 0
        },
        casual :{
            type : Number,
            required : true,
            default : 0
        },
        medical:{
            type : Number,
            required : true,
            default : 0
        }
    }
},{timestamps : true});


const designation = mongoose.model("Designation",designationSchema);

export default designation