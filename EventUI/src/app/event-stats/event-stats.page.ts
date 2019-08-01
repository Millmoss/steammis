import { Component, OnInit } from '@angular/core';
import { Event } from "../models/event";
import { User } from "../models/user"; 

@Component({
  selector: 'app-event-stats',
  templateUrl: './event-stats.page.html',
  styleUrls: ['./event-stats.page.scss'],
})
export class EventStatsPage implements OnInit {

  numEvents:number;
  allEvents:Array<Event>;

  constructor() { 
    this.allEvents = [];
    
    let obj:Event = {
      year: 2019,
      month: "May",
      day: 16,
      name: "Tree Planting",
      organizer: "Bill Goldstein",
      pointsObtained: 20,
      picture: "https://dynaimage.cdn.cnn.com/cnn/c_fill,g_auto,w_1200,h_675,ar_16:9/https%3A%2F%2Fcdn.cnn.com%2Fcnnnext%2Fdam%2Fassets%2F190729201138-ethiopia-tree-planting.jpg",
      description: "Today we planted trees in order to help the environment. Our effort to plant more trees helps the environment by keeping more CO2 out of the atmosphere, fighting climate change. Trees take in CO2 from the atmosphere and release O2; therefore, the more trees we plant, the more CO2 we take out of the atmosphere and the more O2 we put into it."

    }
    this.allEvents.push(obj);
    obj = {
      year: 2019,
      month: "July",
      day: 1,
      name: "Trash Pickup",
      organizer: "Snot Snot",
      pointsObtained: 30,
      picture: "https://upload.wikimedia.org/wikipedia/commons/b/b8/US_Navy_110917-N-BT122-458_Sailors_pick_up_trash_during_a_community_service_event_at_the_War_in_the_Pacific_National_Historical_Park_at_Asan_Beach.jpg",
      description: "In this event, we picked up trash, making the environment less polluted. Pollution is a huge global issue that is only getting worse, with large clumps of plastic gathering in the ocean, harming sea creatures. If everyone makes a small effort, we can overcome pollution, saving the environment and making the city more appealing."
    }
    this.allEvents.push(obj);
    this.numEvents = this.allEvents.length;

  }

  ngOnInit() {
  }

}
