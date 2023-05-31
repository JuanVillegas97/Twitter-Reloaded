import { Tweet } from '../models/Tweet';
import { v4 as uuidv4 } from 'uuid';

export class TweetService {
    private static instance: TweetService;
    private tweets: Tweet[];
    constructor() {
        this.tweets = [];
    }
    public static getInstance(): TweetService {
        if (!TweetService.instance) {
            TweetService.instance = new TweetService();
        }
        return TweetService.instance;
    }
    public createTweet(content: string, userId: string): Tweet {
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
    public getTweetById(id: string): Tweet | undefined {
        return this.tweets.find((tweet) => tweet.id === id);
    }
    public getRecentTweets(count: number): Tweet[] {
        return this.tweets.slice(-count).reverse();
    }
    public replyToTweet(id: string, content: string, userId: string): Tweet | undefined {
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
    public getTweetWithMostReplies(): Tweet | undefined {
        let tweetWithMostReplies: Tweet | undefined = undefined;
        let maxReplyCount = 0;
        for (const tweet of this.tweets) {
            if (tweet.replies.length > maxReplyCount) {
                tweetWithMostReplies = tweet;
                maxReplyCount = tweet.replies.length;
            }
        }
        return tweetWithMostReplies;
    }
}
