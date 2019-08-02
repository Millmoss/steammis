import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '../services/data.service';
import { convertPropertyBindingBuiltins } from '@angular/compiler/src/compiler_util/expression_converter';

@Component({
  selector: 'app-make-event',
  templateUrl: './make-event.page.html',
  styleUrls: ['./make-event.page.scss'],
})
export class MakeEventPage implements OnInit {

  nameOfEvent: string;
  organizerName: string;
  year: string;
  month: string;
  day: string;
  picture: string;
  description: string;


  constructor(private router: Router, private dataService: DataService) { }

  ngOnInit() {
  }

  makeEvent(){

    
    this.dataService.setData(1, {
      eventName: this.nameOfEvent,
      organizerName: this.organizerName,
      year: this.year,
      month: this.month,
      day: this.day,
      picture: this.picture,
      description: this.description
    });
    this.router.navigateByUrl('/tab1/1');
  }

}
