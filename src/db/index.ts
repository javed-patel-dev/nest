import mongoose from 'mongoose';

const connectToDatabase = async (): Promise<void> => {
  try {
    await mongoose.connect('mongodb://localhost:27017/todolist');
    console.log('Connected to MongoDB');
  } catch (error) {
    console.error('Error connecting to MongoDB:', error);
  }
};

export default connectToDatabase;
