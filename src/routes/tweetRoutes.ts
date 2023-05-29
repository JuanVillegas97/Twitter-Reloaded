import express, { Request, Response } from 'express';
import { TweetController } from '../controllers/TweetController';

const router = express.Router();

// Create an instance of the TweetController
const tweetController = new TweetController();

// Define the routes for tweet-related endpoints
router.post('/', (req: Request, res: Response) => tweetController.createTweet(req, res));
router.get('/', (req: Request, res: Response) => tweetController.getTweets(req, res));
router.get('/:id', (req: Request, res: Response) => tweetController.getTweetById(req, res));
router.post('/:id/reply', (req: Request, res: Response) => tweetController.replyToTweet(req, res));

export { router as tweetRoutes };
