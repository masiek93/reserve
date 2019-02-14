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
  myForm: FormGroup;
  post:any;
  constructor(private router: Router, private formDataService: FormDataService, private fb: FormBuilder) {
    this.myForm = fb.group({
      'name' : [null, Validators.required],
    });
    
   }

   addPost(post) {
    alert("Post: "+post.name)
    }

  ngOnInit() {
  }

  goToPrevious() {
    this.formDataService.clearTermFormData();
    this.formDataService.decrementStep();
    this.router.navigate(['/term']);
  }

}
