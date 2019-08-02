import { Component } from '@angular/core';
import { Event } from '../models/event';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {

  allEvents:Array<Event>;

  constructor() {
    this.allEvents = [];
    let obj:Event = {
      year: 2019,
      month: "August",
      day: 17,
      name: "Beach Cleanup",
      organizer: "Bill Tubman",
      pointsObtained: 0,
      picture: "https://cdn.theatlantic.com/assets/media/img/mt/2017/05/Lavers_image_2_East_Beach_2/lead_720_405.jpg?mod=1533691883",
      description: "Come and help clean up the beach. The recent rise in plastic pollution in the oceans has affected our beaches, putting plastic on the shores. To make everyone's experience at the beach better, we will be pickign up plastic at the beach and putting the plastic into the recycling.",
      approved: true,
      upvotes: null,
      index:0,
      hasUpvoted: false,
      hasJoined: "Join",
      numPeople: 23
  
    }
    this.allEvents.push(obj);

    obj = {
      year: 2019,
      month: "August",
      day: 20,
      name: "Soccer Game",
      organizer: "Jerry Roosevelt",
      pointsObtained: 0,
      picture: "https://www.twincities.com/wp-content/uploads/2017/07/bowl-dusk-allianz-uhd-2.jpg",
      description: "Get out of your house, get some fresh air, and play some soccer! Soccer is an excellent sport and is fun for everyone, even people who aren't that experienced. We will be playing in Central Park, NYC, so come with your soccer clothes on.",
      approved: true,
      upvotes: null,
      index:1,
      hasUpvoted: false,
      hasJoined: "Join",
      numPeople: 14
    }
    this.allEvents.push(obj);

  }

  join(event){
    console.log(event.target.id);
    if(this.allEvents[event.target.id].hasJoined == "Join"){
      this.allEvents[event.target.id].numPeople++;
      this.allEvents[event.target.id].hasJoined = "Joined";
    }
    
  }

  

}
