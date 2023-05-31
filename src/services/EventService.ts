import { Event } from '../models/Event';
import { Tweet } from '../models/Tweet';
import { TweetService } from './TweetService';

const tweetService = TweetService.getInstance();

export class EventService {
  private static instance: EventService;

  private events: Event[];
  public static getInstance(): EventService {
    if (!EventService.instance) {
      EventService.instance = new EventService();
    }
    return EventService.instance;
}
  constructor() {
    this.events = [];
  }

  registerEvent(actionType: string, userId: string): void {
    const validActionTypes = ["create tweet", "reply tweet", "open application"];
    if (!validActionTypes.includes(actionType)) {
      throw new Error(`Invalid action type: ${actionType}`);
    }
  
    const event: Event = {
      actionType: actionType as "create tweet" | "reply tweet" | "open application",
      userId,
      timestamp: new Date(),
    };
  
    this.events.push(event);
  }
  
  generateUserWithMostEventsReport(): string {
    const userEventCounts = new Map<string, number>();

    for (const event of this.events) {
      const { userId } = event;
      const count = userEventCounts.get(userId) || 0;
      userEventCounts.set(userId, count + 1);
    }

    let maxCount = 0;
    let userWithMostEvents: string | undefined;

    for (const [userId, count] of userEventCounts.entries()) {
      if (count > maxCount) {
        maxCount = count;
        userWithMostEvents = userId;
      }
    }

    return userWithMostEvents || ''; // Return empty string if no user found
  }

  generateMostCommentedTweetReport(): Tweet | undefined {
    const mostCommentedTweeted = tweetService.getTweetWithMostReplies()
    return mostCommentedTweeted; 
  }

  generateNumberOfUsersOpenedAppReport(): number {
    const openAppEvents = this.events.filter((event) => event.actionType === 'open application');
    const numberOfUsersOpenedApp = new Set(openAppEvents.map((event) => event.userId)).size;
    return numberOfUsersOpenedApp;
  }
}
