import express, { Request, Response } from 'express';
import { UserController } from '../controllers/UserController';

const router = express.Router();

// Create an instance of the UserController
const userController = new UserController();

// Define the routes for user-related endpoints
router.post('/', (req: Request, res: Response) => userController.createUser(req, res));
router.get('/', (req: Request, res: Response) => userController.getUsers(req, res));
router.get('/:id', (req: Request, res: Response) => userController.getUserById(req, res));

export { router as userRoutes };
