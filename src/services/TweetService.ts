import { Tweet } from '../models/Tweet';
import { UserService } from '../services/UserService';
import { v4 as uuidv4 } from 'uuid';

export class TweetService {
    private tweets: Tweet[];
    constructor() {
        this.tweets = [];
    }
    createTweet(content: string, userId: string): Tweet {
        const tweet: Tweet = {
            id: this.generateId(),
            content: content,
            userId: userId,
            replies: [],
            timestamp: new Date(),
        };
        this.tweets.push(tweet);
        return tweet;
    }
    getTweetById(id: string): Tweet | undefined {
        return this.tweets.find((tweet) => tweet.id === id);
    }
    getRecentTweets(count: number): Tweet[] {
        return this.tweets.slice(-count).reverse();
    }
    replyToTweet(id: string, content: string, userId: string): Tweet | undefined {
        const tweet = this.getTweetById(id);
        if (tweet) {
        const reply: Tweet = {
            id: this.generateId(),
            content,
            userId,
            replies: [],
            timestamp: new Date(),
        };
        tweet.replies.push(reply.content);
        return reply;
        }
        return undefined;
    }
    private generateId(): string {
        return uuidv4();
    }
}
