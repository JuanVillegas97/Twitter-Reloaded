import dotenv from 'dotenv';
import { App } from './app';

// Load environment variables from .env file
dotenv.config();

// Create an instance of your App class from app.ts
const twitterApp = new App();

// Define the port to listen on
const port = process.env.PORT || 3002;

// Start the server
twitterApp.getApp().listen(port, () => {
    console.log(`Server started on port ${port}`);
});
