import { Component, OnInit } from '@angular/core';

import { FormDataService } from './../data/form-data.service';
import { FormData } from './../data/form-data.model';

@Component({
  selector: 'progress-bar',
  templateUrl: './progress-bar.component.html',
  styleUrls: ['./progress-bar.component.css']
})
export class ProgressBarComponent implements OnInit {

  step: number;

  constructor(private formDataService: FormDataService) {
    this.step = formDataService.getFormData().step;
  }

  ngOnInit() {
    // this.step = this.formDataService.getStep();
    this.formDataService.currentMessage.subscribe(message => this.step = message);
    console.log('PB #1');
  }
}
