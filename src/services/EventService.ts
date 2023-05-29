import { Event } from '../models/Event';

export class EventService {
  private events: Event[];

  constructor() {
    this.events = [];
  }

  registerEvent(actionType: string, userId: string): void {
    const event: Event = {
      actionType,
      userId,
      timestamp: new Date(),
    };
    this.events.push(event);
  }

  generateUserWithMostEventsReport(): string {
    // Logic to generate a report for the user who registered the most events during the day
    // Implement your report generation logic here
    return ''; // Replace with your implementation
  }

  generateMostCommentedTweetReport(): string {
    // Logic to generate a report for the most commented tweet of the day
    // Implement your report generation logic here
    return ''; // Replace with your implementation
  }

  generateNumberOfUsersOpenedAppReport(): number {
    // Logic to generate a report for the number of users who opened the application during the day
    // Implement your report generation logic here
    return 0; // Replace with your implementation
  }
}
