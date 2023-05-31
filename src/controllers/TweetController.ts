import { Request, Response } from 'express';
import { TweetService } from '../services/TweetService';
import { UserService } from '../services/UserService';
import { EventService } from '../services/EventService';

const eventService = EventService.getInstance();
const tweetService = TweetService.getInstance();
const userService = UserService.getInstance();

export class TweetController {
    public createTweet(req: Request, res: Response): void {
        const { content, userId } = req.body;
        const user = userService.getUserById(userId);
        if (user) {
            const tweet = tweetService.createTweet(content, userId);
            eventService.registerEvent("create tweet", userId);
            user.tweets.push(content);
            res.status(200).json({ message: 'Tweet created successfully' });
        } else {
            res.status(404).json({ error: 'User not found' });
        }
    }
    public getTweetById(req: Request, res: Response): void {
        const { id } = req.params;
        const tweet = tweetService.getTweetById(id);
        if (tweet) {
            res.json(tweet);
        } else {
            res.status(404).json({ message: 'Tweet not found' });
        }
    }
    public getTweets(req: Request, res: Response): void {
        const tweets = tweetService.getRecentTweets(10);
        console.log(tweets)
        res.json(tweets);
    }
    public replyToTweet(req: Request, res: Response): void {
        const { id } = req.params;
        const { content, userId } = req.body;
        const reply = tweetService.replyToTweet(id, content, userId);
        eventService.registerEvent("reply tweet", userId);
        if (reply) {
            res.status(201).json(reply);
        } else {
            res.status(404).json({ message: 'Tweet not found' });
        }
    }
}
