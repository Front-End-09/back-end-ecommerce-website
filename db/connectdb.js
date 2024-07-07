import mongoose from 'mongoose';
mongoose.set('strictQuery',false);
const connectDB = async (DATABASE_URL) => {
  try {
    const DB_OPTIONS = {
      dbName: 'Node-API',
    };
    await mongoose.connect(DATABASE_URL, DB_OPTIONS);
    console.log('Connected Successfully..');
  } catch (error) {
    console.log(error);
  }
};

export default connectDB;
