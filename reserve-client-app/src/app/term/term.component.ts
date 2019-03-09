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
  employee: string;
  date: string;
  time: string;

  constructor(private router: Router, private formDataService: FormDataService) { }

  ngOnInit() {
    this.service = this.formDataService.getServiceFormData();
    this.term = this.formDataService.getTermFormData();
    this.employee = 'Dowolny Test';
    this.date = '';
    this.time = '';
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

  goToNext() {
    const tempTerm = new TermModel(this.employee, this.date, this.time);
    this.save(tempTerm);
    this.formDataService.incrementStep();
    this.router.navigate(['/confirmation']);
  }

  selDateChangedHandler(date: string) {
    this.date = date;
  }

  selHourChangedHandler(hour: string) {
    this.time = hour;
  }
}
