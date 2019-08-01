import { Component } from '@angular/core';
import { Event } from "../models/event";

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  events: Array<Event>;
  hasUpvoted: boolean;

  constructor() {
    this.events = [];
    let obj:Event = {
      year: 2019,
      month: "August",
      day: 4,
      name: "Bowling",
      organizer: "Elliot Lilianna",
      pointsObtained: 5,
      picture: 'https://www.amf.com/sites/amf/files/styles/xl_responsive/public/Traditional_Parties_23Mod_Corp_780x425_2x_0.jpg?itok=b1mpokMc',
      description: "Get out of your house and bowl! Bowling is a great activity to socialize and is fun for everyone. Also, when you are outside the house, you use less air conditioning which puts heat into the air, worsening global warming. Bowling will be at the Bowlmor Times Square in NYC, make sure to be there on time.",
      upvotes: 154,
      approved: false,
      index: 0,
      hasUpvoted: false
    }
    this.events.push(obj);
    obj = {
      year: 2019,
      month: "August",
      day: 10,
      name: "Let's Watch a movie!",
      organizer: "Orson Haywood",
      pointsObtained: 5,
      picture: 'https://cdn1.thr.com/sites/default/files/imagecache/landscape_928x523/2012/11/movie_theater_interior_a_l.jpg',
      description: "Let's Watch a movie! Watching a movie is always a great idea on a Saturday night when there is nothing to do. Grab your popcorn and your drink, and head to AMC Empire 25 in NYC! ",
      upvotes: 103,
      approved: false,
      index: 1,
      hasUpvoted: false

    }
    this.events.push(obj);
  }

  upvote(event){
    if(this.events[event.target.id].hasUpvoted == false){
      this.events[event.target.id].upvotes++;
      this.events[event.target.id].hasUpvoted = true;
    }
    
  }

}
