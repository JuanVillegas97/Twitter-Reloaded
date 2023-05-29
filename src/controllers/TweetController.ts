import { Request, Response } from 'express';
import { TweetService } from '../services/TweetService';

const tweetService = new TweetService();

export class TweetController {
  createTweet(req: Request, res: Response): void {
    const { content, userId } = req.body;
    const tweet = tweetService.createTweet(content, userId);
    res.status(201).json(tweet);
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
    // Implement logic to get the recent 10 tweets from tweetService
    const tweets = tweetService.getRecentTweets(10);
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
