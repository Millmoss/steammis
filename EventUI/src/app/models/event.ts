import { User } from './user';

export interface Event {

    year:number,
    month: string,
    day: number,
    name: string,
    organizer: string,
    pointsObtained: number,
    picture: string,
    description: string,
    upvotes: number,
    approved: boolean,
    index: number,
    hasUpvoted: boolean,
    numPeople: number,
    hasJoined: string

}