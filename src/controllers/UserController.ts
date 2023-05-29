// import { Request, Response } from 'express';
// import { UserService } from '../services/UserService';

// const userService = new UserService();

// export class UserController {
//     createUser(req: Request, res: Response): void {
//         const { username, fullName } = req.body;
//         const user = userService.createUser(username, fullName);
//         res.status(201).json(user);
//     }

//     getUserById(req: Request, res: Response): void {
//         const { id } = req.params;
//         const user = userService.getUserById(id);
//         if (user) {
//         res.json(user);
//         } else {
//         res.status(404).json({ message: 'User not found' });
//         }
//     }

//     getUsers(req: Request, res: Response): void {
//         const users = userService.getUsers();
//         res.json(users);
//     }
    
//     // Implement more user-related route handlers as needed
// }
