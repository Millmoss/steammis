import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';
import { User } from '../models/user';
import { Router, NavigationExtras } from "@angular/router";
import { Friend } from "../models/friend";

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})

export class Tab2Page {

  user: User;
  
  constructor(private router: Router) {
    
  }

  friends(){
    this.router.navigate(['friends']);
  }
}
