import { Request, Response } from 'express';
import { EventService } from '../services/EventService';
import path from 'path'

const eventService = EventService.getInstance();

export class EventController {
    registerEvent(req: Request, res: Response): void {
        const { actionType, userId } = req.body;
        eventService.registerEvent(actionType, userId);
        res.status(201).json({ message: 'Event registered successfully' });
    }
    generateReports(req: Request, res: Response): void {
        const userWithMostEvents = eventService.generateUserWithMostEventsReport();
        const mostCommentedTweet = eventService.generateMostCommentedTweetReport();
        const numberOfUsersOpenedApp = eventService.generateNumberOfUsersOpenedAppReport();
        res.json({
            userWithMostEvents,
            mostCommentedTweet,
            numberOfUsersOpenedApp,
        });
    }
}
