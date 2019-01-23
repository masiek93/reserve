import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-service',
  templateUrl: './service.component.html',
  styleUrls: ['./service.component.css']
})
export class ServiceComponent implements OnInit {

  strzyzenie = new Usluga('Strzyżenie męskie','20-30 min','20-35 zł');

  constructor() { }

  ngOnInit() {
  }
}

  class Usluga {
    constructor(public name: string, public time: string,
                public price: string){
                }

}
