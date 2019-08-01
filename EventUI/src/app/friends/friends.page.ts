import { Component, OnInit } from '@angular/core';
import { Friend } from '../models/friend';
import { convertPropertyBindingBuiltins } from '@angular/compiler/src/compiler_util/expression_converter';
import { strictEqual } from 'assert';
import { ActivatedRoute, Router } from "@angular/router";



@Component({
  selector: 'app-friends',
  templateUrl: './friends.page.html',
  styleUrls: ['./friends.page.scss'],
})
export class FriendsPage implements OnInit {

  friends = Array<Friend>();
  data:any;

  constructor(private route:ActivatedRoute, private router: Router) {
    let numFriends = 6
    let friends = [];
    for(let i = 0; i < numFriends; i++){
      let request = new XMLHttpRequest();
      request.open('GET', 'https://randomuser.me/api/', true)
      request.onload = function() {
        // Begin accessing JSON data here
        var data = JSON.parse(this.response)

        if (request.status >= 200 && request.status < 400) {
          let first = data.results[0].name.first;
          let last = data.results[0].name.last;
          let theFirst = first.charAt(0).toUpperCase() + first.slice(1);
          let theLast = last.charAt(0).toUpperCase() + last.slice(1);
          let obj: Friend = {
            picLink: data.results[0].picture.medium,
            name: theLast + " " + theFirst
          }
          friends.push(obj);
          
        } else {
          console.log('error')
        }
        
      }
      request.send()
    };
    this.friends = friends;

  }

  ngOnInit() {
    
  }

}
