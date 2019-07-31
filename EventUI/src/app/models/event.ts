import { User } from './user';

export interface Event {

    date: Date,
    name: string,
    organizer: User,
    pointsObtained: number,
    picture: string,
    description: string

}