const mongoose = require("mongoose");
const url = 'mongodb://127.0.0.1:27017/collage';

const userSchema = new mongoose.Schema(
    {
        _id: Number,
        F_nm: String,
        L_nm: String,
        DOB: String,
        Phone_no: Number,
    },
    {_id: false}
);
const Dept = new mongoose.model("department", userSchema);
async function run(){
    try{
        await mongoose.connect(url);
        const dept = Dept({_id: 1, F_nm : "Sachin", L_nm: "Bagal", DOB: "23/5/2006", Phone_no: 9856410323});
        await dept.save();
        const docs = await Dept.find({});
        docs.forEach((doc) => console.log(doc));
    }   catch(error){
        console.error(error);
    }   finally{
        await mongoose.disconnect();
    }
}
run();