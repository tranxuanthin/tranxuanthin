import mongoose from 'mongoose';
const mongoUri = process.env.MONGO_URI as string;

const connectDB = async (retries = 5) => {
  while (retries) {
    try {
      console.log('Connecting to MongoDB...', mongoUri);
      await mongoose.connect(mongoUri);

      console.log('MongoDB connected');
      break; // Exit the loop if connection is successful
    } catch (error) {
      retries -= 1;
      console.error(
        `MongoDB connection error. Retries left: ${retries}`,
        error,
      );
      if (retries === 0) {
        console.error(
          'MongoDB connection failed after multiple attempts, exiting.',
        );
        process.exit(1);
      }
      // Wait for 5 seconds before retrying
      await new Promise((res) => setTimeout(res, 5000));
    }
  }
};

export default connectDB;
