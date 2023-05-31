import express, { Request, Response } from 'express';
import { UserController } from '../controllers/UserController';

const router = express.Router();

// Create an instance of the UserController
const userController = new UserController();

// Define the routes for user-related endpoints
router.get('/register', (req: Request, res: Response) => userController.getRegisterHTML(req,res));
router.post('/register', (req: Request, res: Response) => userController.createUser(req, res));

router.get('/login', (req: Request, res: Response) => userController.getLoginHTML(req,res));
router.post('/login', (req: Request, res: Response) => userController.loginUser(req,res));




router.get('/see', (req: Request, res: Response) => userController.getUsers(req, res));
router.get('/:id', (req: Request, res: Response) => userController.getUserById(req, res));

export { router as userRoutes };
