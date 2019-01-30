import { Injectable } from '@angular/core';

import { FormData, ServiceModel, TermModel, ConfirmationModel } from './form-data.model';

@Injectable({
    providedIn: 'root'
})
export class FormDataService {

    private formData: FormData = new FormData();
    private isConfirmationFormValid = false;

    constructor() { }

    getServiceFormData(): ServiceModel {
        const service: ServiceModel = {
            serviceType: this.formData.serviceType,
            duration: this.formData.duration,
            price: this.formData.price,
        };

        return service;
    }

    setServiceFormData(data: ServiceModel) {
        this.formData.serviceType = data.serviceType;
        this.formData.duration = data.duration;
        this.formData.price = data.price;
    }

    clearServiceFormData() {
        this.formData.serviceType = '';
        this.formData.duration = '';
        this.formData.price = '';
    }

    getTermFormData(): TermModel {
        const term: TermModel = {
            employee: this.formData.employee,
            date: this.formData.date,
            time: this.formData.time,
        };
        return term;
    }

    setTermFormData(data: TermModel) {
        this.formData.employee = data.employee;
        this.formData.date = data.date;
        this.formData.time = data.time;
    }

    clearTermFormData() {
        this.formData.employee = '';
        this.formData.date = '';
        this.formData.time = '';
    }

    getFormData(): FormData {
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
        return this.isConfirmationFormValid;
    }
}
