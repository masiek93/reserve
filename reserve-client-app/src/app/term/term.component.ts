import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-term',
  templateUrl: './term.component.html',
  styleUrls: ['./term.component.css']
})
export class TermComponent implements OnInit {

  // temporary hours mock to fill available hours
  hours = ['9:00', '9:30', '10:00', '10:30', '11:00', '11:30'];

  onClick(event) {
    console.log(event);
  }

  constructor() { }

  ngOnInit() {
  }

}
