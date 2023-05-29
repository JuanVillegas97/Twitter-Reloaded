// import { User } from '../models/User';

// export class UserService {
//     private users: User[];
//     constructor() {
//         this.users = [];
//     }
//     createUser(username: string, fullName: string): User {
//         const user: User = {
//             id: this.generateId(),
//             username,
//             fullName,
//         };
//         this.users.push(user);
//         return user;
//     }   
//     getUserById(id: string): User | undefined {
//         return this.users.find((user) => user.id === id);
//     }
//     getUsers(): User[] {
//         return this.users;
//     }
//   // Implement more user-related operations as needed
//     private generateId(): string {
//     // Generate a unique ID for the user
//     // You can use a library like 'uuid' for generating IDs
//     // Example: return uuid();
//         return ''; // Replace with your implementation
//     }
// }
