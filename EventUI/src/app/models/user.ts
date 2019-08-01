import { Friend } from './friend';
import { Pet } from './pet';

export interface User {
    
    name: string,
    status: string,
    points: number,
    friends: Array<Friend>,
    recentEvents: Array<Event>,
    pet: Pet,
    gameLevel: number,
    health: number,
    power: number,
    magic: number,
    productivity: number

}