import { Component, OnInit } from '@angular/core';
import { NumberValueAccessor } from '@angular/forms';

@Component({
  selector: 'app-game-stats',
  templateUrl: './game-stats.page.html',
  styleUrls: ['./game-stats.page.scss'],
})
export class GameStatsPage implements OnInit {

  username:string;
  points: number;
  petType: string;
  level: number;
  health: number;
  power: number;
  magic: number;
  productivity: number;

  constructor() { 
    this.username = "realJohnSmith";
    this.points = 150;
    this.petType = "Attack";
    this.level = 23;
    this.health = 60;
    this.power = 40;
    this.magic = 50;
    this.productivity = 80;

  }

  ngOnInit() {
  }

}
