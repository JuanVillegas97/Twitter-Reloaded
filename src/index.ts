import express from 'express';
import dotenv from 'dotenv';
import eventRoutes from './routes/eventRoutes';
import { App } from './app';

// Load environment variables from .env file
dotenv.config();

// Create an instance of the Express application
const app = express();

// Set up middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Create an instance of your App class from app.ts
const twitterApp = new App(app);

// Define the port to listen on
const port = process.env.PORT || 3000;


// Start the server
app.listen(port, () => {
  console.log(`Server started on port ${port}`);
});
