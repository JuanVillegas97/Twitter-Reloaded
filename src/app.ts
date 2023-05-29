import express, { Express } from 'express';
import cors from 'cors';
import { tweetRoutes } from './routes/tweetRoutes';
// import { userRoutes } from './routes/userRoutes';

export class App {
    private app: Express;
    constructor() {
        this.app = express();
        this.configureMiddleware();
        this.registerRoutes();
    }
    public getApp(): Express{
        return this.app
    }
    private configureMiddleware(): void {
        this.app.use(express.json());
        this.app.use(express.urlencoded({ extended: true }));
        this.app.use(cors()); // Enable CORS for cross-origin requests
    }
    private registerRoutes(): void {
        this.app.use('/tweets', tweetRoutes);
        // this.app.use('/users', userRoutes);
        // Add more route registrations as needed
    }
}
