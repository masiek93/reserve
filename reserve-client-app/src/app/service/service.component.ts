import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { FormDataService } from './../data/form-data.service';
import { ServiceModel } from './../data/form-data.model';

@Component({
  selector: 'app-service',
  templateUrl: './service.component.html',
  styleUrls: ['./service.component.css']
})
export class ServiceComponent implements OnInit {
  service: ServiceModel;

  // temporary hours mock to fill available hours
  serv1 = new ServiceModel('Strzyżenie męskie', '20-30 min', '20-35 zł');
  serv2 = new ServiceModel('Strzyżenie damskie', '60-90 min', '60-80 zł');
  serv3 = new ServiceModel('Podcinanie końcówek', '20-30 min', '40 zł');
  serv4 = new ServiceModel('Farbowanie włosów', '90 min', '100 zł');
  serv5 = new ServiceModel('Baleyage', '50 min', '50-80 zł');
  services = [this.serv1, this.serv2, this.serv3, this.serv4, this.serv5];

  // strzyzenie = new Usluga('Strzyżenie męskie','20-30 min','20-35 zł');

  constructor(private router: Router, private formDataService: FormDataService) { }

  ngOnInit() {
    this.service = this.formDataService.getServiceFormData();
  }

  save(service: any) {
    this.service = service;
    this.formDataService.setServiceFormData(this.service);
  }

  goToNext(service: any) {
    this.save(service);
    this.FormDataService.incrementStep();
    this.router.navigate(['/term']);
  }
}
