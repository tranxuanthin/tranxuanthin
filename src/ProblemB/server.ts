import express, { Application } from 'express';
import bodyParser from 'body-parser';
import connectDB from './config/database';
import productRoutes from './router/productRoutes';

const app: Application = express();
const PORT = process.env.PORT;
connectDB();

app.use(bodyParser.json());
app.use('/api', productRoutes);

const server = app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});

// Graceful shutdown
const gracefulShutdown = () => {
  console.log('Received kill signal, shutting down gracefully.');
  server.close(async () => {
    // await new Promise((resolve) => setTimeout(resolve, 10000));
    // impl
    console.log('Closed out remaining connections.');
    process.exit(0);
  });

  // Force close server after 10 seconds
  setTimeout(() => {
    console.error(
      'Could not close connections in time, forcefully shutting down',
    );
    process.exit(1);
  }, 5000); // Use unref to allow the process to exit even if this timeout is pending
};

// Handle termination signals
process.on('SIGTERM', gracefulShutdown);
process.on('SIGINT', gracefulShutdown);
