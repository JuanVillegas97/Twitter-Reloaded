import express, { Express } from 'express';
import cors from 'cors';
import path from 'path'
import { tweetRoutes } from './routes/tweetRoutes';
import { userRoutes } from './routes/userRoutes';

export class App {
    private app: Express;
    constructor() {
        this.app = express();
        this.setupTemplateEngine();
        this.configureMiddleware();
        this.registerRoutes();
    }
    public getApp(): Express{
        return this.app
    }
    private setupTemplateEngine(): void {
        this.app.set('view engine', 'ejs');
        this.app.set('views', path.join(__dirname, './views/'));
    }
    private configureMiddleware(): void {
        this.app.use(express.json());
        this.app.use(express.urlencoded({ extended: true }));
        this.app.use(cors()); // Enable CORS for cross-origin requests
        // Serve static files from the 'dist' directory
        this.app.use(express.static('./dist/', {
            setHeaders: (res, path) => {
                res.setHeader('Content-Type', 'application/javascript');
        },
        }));
    }
    private registerRoutes(): void {
        this.app.use('/tweets', tweetRoutes);
        this.app.use('/users', userRoutes);
    }
}
