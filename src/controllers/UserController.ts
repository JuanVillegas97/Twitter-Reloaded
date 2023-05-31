import { Request, Response } from 'express';
import { UserService } from '../services/UserService';
import path from 'path'
import { TweetController } from './TweetController';

const userService = UserService.getInstance();

export class UserController {    
    public getRegisterHTML(req: Request, res: Response): void{
        const filePath =  path.join(__dirname, '../public/register.html');
        res.sendFile(filePath)
    }
    public createUser(req: Request, res: Response): void {
        const { username, password } = req.body;
        const user = userService.createUser(username, password);
        res.redirect('login');
    }
    public getLoginHTML(req: Request, res: Response): void{
        const filePath =  path.join(__dirname, '../public/login.html');
        res.sendFile(filePath);
    }
    public loginUser(req: Request, res: Response): void {
        const { username, password } = req.body;
        const matchedUser = userService.loginUser(username, password)

        if (matchedUser) {
            const userId = matchedUser.id
            res.render('homeDashboard', { userId });
        } else {
            // User login failed due to incorrect credentials
            res.status(401).json({ message: 'Invalid username or password' });
        }
    }
    getUserById(req: Request, res: Response): void {
        const { id } = req.params;
        const user = userService.getUserById(id);
        if (user) {
        res.json(user);
        } else {
        res.status(404).json({ message: 'User not found' });
        }
    }

    getUsers(req: Request, res: Response): void {
        const users = userService.getUsers();
        res.json(users);
    }
    
    // Implement more user-related route handlers as needed
}
