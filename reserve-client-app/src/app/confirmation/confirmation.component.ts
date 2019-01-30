import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { FormDataService } from './../data/form-data.service';
import { ProgressBarComponent } from './../progress-bar/progress-bar.component';

@Component({
  selector: 'app-confirmation',
  templateUrl: './confirmation.component.html',
  styleUrls: ['./confirmation.component.css']
})
export class ConfirmationComponent implements OnInit {

  constructor(private router: Router, private formDataService: FormDataService) { }

  ngOnInit() {
  }

  goToPrevious() {
    this.formDataService.clearTermFormData();
    this.formDataService.decrementStep();
    this.router.navigate(['/term']);
  }

}
