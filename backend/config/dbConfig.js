const mongoose=require('mongoose');
const uri=process.env.MONGODB_URI;
const connectDB= async ()=> {
    try {
          await mongoose.connect(uri)
          .then(()=>console.log("connection reussi a mongodb"))
          .catch(()=>console.log("connection echouer a mongodb"))
    } catch (error) {
        console.log("error a mongodb");
        
    }
}

module.exports=connectDB;