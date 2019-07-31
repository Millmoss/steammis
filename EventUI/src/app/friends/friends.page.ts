import { Component, OnInit } from '@angular/core';
import { Friend } from '../models/friend';

@Component({
  selector: 'app-friends',
  templateUrl: './friends.page.html',
  styleUrls: ['./friends.page.scss'],
})
export class FriendsPage implements OnInit {

  friends = Array<Friend>();

  constructor() {
    let obj1: Friend = {
      picLink: "https://cdn.psychologytoday.com/sites/default/files/styles/profile/public/field_user_blogger_photo/sander-van-der-linden.jpg?itok=t8VIAmgL",
      name: "Bob Ross"
    }
    this.friends.push(obj1);
    obj1 = {
      picLink: 'https://www.catleylakeman.co.uk/assets/img/CATLEY_LAKEMAN-Andy.jpg',
      name: "Charles Dickenson"
    }
    this.friends.push(obj1);
    obj1 = {
      picLink: 'https://content-static.upwork.com/uploads/2014/10/01073435/profilephoto5.jpg',
      name: "Ice T"
    }
    this.friends.push(obj1);
  }

  ngOnInit() {
  }

}
