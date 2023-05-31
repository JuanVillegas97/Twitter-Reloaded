import { Request, Response } from 'express';
import { TweetService } from '../services/TweetService';
import { UserService } from '../services/UserService';
import path from 'path'

const tweetService = new TweetService();
const userService = UserService.getInstance();

export class TweetController {
    createTweet(req: Request, res: Response): void {
        const { content, userId } = req.body;
        const user = userService.getUserById(userId);
        if (user) {
            const tweet = tweetService.createTweet(content, userId);
            user.tweets.push(content);
            res.status(200).json({ message: 'Tweet created successfully' });
        } else {
            res.status(404).json({ error: 'User not found' });
        }
    }

    getTweetById(req: Request, res: Response): void {
        const { id } = req.params;
        const tweet = tweetService.getTweetById(id);
        if (tweet) {
            res.json(tweet);
        } else {
            res.status(404).json({ message: 'Tweet not found' });
        }
    }
    getTweets(req: Request, res: Response): void {
        const tweets = tweetService.getRecentTweets(10);
        console.log(tweets)
        res.json(tweets);
    }

    replyToTweet(req: Request, res: Response): void {
        const { id } = req.params;
        const { content, userId } = req.body;
        const reply = tweetService.replyToTweet(id, content, userId);
        if (reply) {
            res.status(201).json(reply);
        } else {
            res.status(404).json({ message: 'Tweet not found' });
        }
    }
}
