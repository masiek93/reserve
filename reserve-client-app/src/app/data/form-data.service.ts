import { Injectable } from '@angular/core';

import { FormData, ServiceModel, TermModel, ConfirmationModel } from './form-data.model';

@Injectable({
  providedIn: 'root'
})
export class FormDataService {

  private formData: FormData = new FormData();
    private isConfirmationFormValid = false;

    constructor() {}

    getServiceFormData(): ServiceModel {
        const service: ServiceModel = {
          serviceType: this.formData.serviceType,
          duration: this.formData.duration,
          price: this.formData.price,
        };

        return service;
    }

    setServiceFormData(data: ServiceModel) {
        // Update the ServiceModel data
        this.formData.serviceType = data.serviceType;
        this.formData.duration = data.duration;
        this.formData.price = data.price;
    }

    getTerFormData(): TermModel {
        // Return the TermModel data
        const term: TermModel = {
            employee: this.formData.employee,
            date: this.formData.date,
            time: this.formData.time,
        };
        return term;
    }

    setTermFormData(data: TermModel) {
        // Update the TermModel data
        this.formData.employee = data.employee;
        this.formData.date = data.date;
        this.formData.time = data.time;
    }

    getFormData(): FormData {
        // Return the entire Form Data
        return this.formData;
    }

    resetFormData(): FormData {
        // Reset the workflow
        // this.workflowService.resetSteps();
        // Return the form data after all this.* members had been reset
        this.formData.clear();
        this.isConfirmationFormValid = false;
        return this.formData;
    }

    isFormValid() {
        // Return true if all forms had been validated successfully; otherwise, return false
        return this.isConfirmationFormValid;
    }
}
