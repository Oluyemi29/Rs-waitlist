import mongoose from 'mongoose';

const connectDB = async ()=>{
  try {
    const Connecting = await mongoose.connect(process.env.MONGO_DB)
    console.log(Connecting.connection.host)
  } catch (error) {
   console.log(`an error of ${error} occurred`); 
  }
}

export default connectDB