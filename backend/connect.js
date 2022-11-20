const mongoose=require("mongoose");
const connectDB = async (uri) => {
    try {
        await mongoose.connect(uri)
        console.log("connected to db..");
    } catch (err) {
        throw new Error(`MONGO DB Error: ${err}`);
    }
}
module.exports=connectDB;