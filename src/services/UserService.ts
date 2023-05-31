import { User } from '../models/User';
import { v4 as uuidv4 } from 'uuid';

export class UserService {
    private static instance: UserService;
    private users: User[];
    constructor() {
        this.users = [];
    }
    public static getInstance(): UserService {
        if (!UserService.instance) {
            UserService.instance = new UserService();
        }
        return UserService.instance;
    }
    public createUser(username: string, password: string): User {
        const user: User = {
            id : this.generateId(),
            username :  username,
            password : password,
            tweets : []
        };
        this.users.push(user);
        return user
    }   
    public loginUser(username: string, password: string): User | null {
        const matchedUser = this.users.find(user => user.username === username && user.password === password);
        return matchedUser || null;
    }
    public getUserById(id: string): User | undefined {
        return this.users.find((user) => user.id === id);
    }
    public getUsers(): User[] {
        return this.users;
    }
    private generateId(): string {
        return uuidv4();
    }
}
