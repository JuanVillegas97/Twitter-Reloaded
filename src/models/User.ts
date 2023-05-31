import {Tweet} from './Tweet';

export interface User {
    id: string;
    username: string;
    password: string;
    tweets : Tweet[]
}
