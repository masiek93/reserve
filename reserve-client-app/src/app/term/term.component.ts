import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { FormDataService } from './../data/form-data.service';
import { ServiceModel, TermModel } from '../data/form-data.model';
import { ProgressBarComponent } from './../progress-bar/progress-bar.component';

@Component({
  selector: 'app-term',
  templateUrl: './term.component.html',
  styleUrls: ['./term.component.css']
})
export class TermComponent implements OnInit {
  service: ServiceModel;
  term: TermModel;

  constructor(private router: Router, private formDataService: FormDataService) { }

  ngOnInit() {
    this.service = this.formDataService.getServiceFormData();
    this.term = this.formDataService.getTermFormData();
  }

  save(term: any) {
    this.term = term;
    this.formDataService.setTermFormData(this.term);
  }

  goToPrevious() {
    this.formDataService.clearServiceFormData();
    this.formDataService.decrementStep();
    this.router.navigate(['/service']);
  }

  goToNext(term: any) {
    // this.save(term);
    this.formDataService.incrementStep();
    this.router.navigate(['/confirmation']);
  }
}
