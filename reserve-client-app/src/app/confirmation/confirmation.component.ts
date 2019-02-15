import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { FormDataService } from './../data/form-data.service';
import { ProgressBarComponent } from './../progress-bar/progress-bar.component';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-confirmation',
  templateUrl: './confirmation.component.html',
  styleUrls: ['./confirmation.component.css']
})

export class ConfirmationComponent implements OnInit {
  emailReg = /^[a-z\d]+[\w\d.-]*@(?:[a-z\d]+[a-z\d-]+\.){1,5}[a-z]{2,6}$/i;
  phoneReg = /^[0-9]{7,9}$/i;
  myForm: FormGroup;
  post: any;
  constructor(private router: Router, private formDataService: FormDataService, private fb: FormBuilder) {
    this.myForm = fb.group({
      'firstName' : [null, Validators.required],
      'lastName' : [null, Validators.required],
      'email' : [null, Validators.compose([Validators.required, Validators.pattern(this.emailReg)])],
      'phoneNumber' : [null, Validators.compose([Validators.required, Validators.pattern(this.phoneReg)])]
    });
   }

   addPost(post) {
    alert('Post: ' + post.name);
    }

  ngOnInit() {
  }

  goToPrevious() {
    this.formDataService.clearTermFormData();
    this.formDataService.decrementStep();
    this.router.navigate(['/term']);
  }

}
