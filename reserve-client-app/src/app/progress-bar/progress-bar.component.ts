import { Component, OnInit } from '@angular/core';

import { FormDataService } from './../data/form-data.service';
import { FormData } from './../data/form-data.model';

@Component({
  selector: 'progress-bar',
  templateUrl: './progress-bar.component.html',
  styleUrls: ['./progress-bar.component.css']
})
export class ProgressBarComponent implements OnInit {

  step: string;

  constructor(private formDataService: FormDataService) { }

  ngOnInit() {
    this.step = this.formDataService.getStep();
  }
}
