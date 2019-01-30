export class FormData {
    serviceType = '';
    duration = '';
    price = '';
    employee = '';
    date = '';
    time = '';
    firstName = '';
    lastName = '';
    email = '';
    phoneNumber = '';

    clear() {
        this.serviceType = '';
        this.duration = '';
        this.price = '';
        this.employee = '';
        this.date = '';
        this.time = '';
        this.firstName = '';
        this.lastName = '';
        this.email = '';
        this.phoneNumber = '';
    }
}

export class ServiceModel {
    serviceType = '';
    duration = '';
    price = '';

    constructor(serviceType: string, duration: string, price: string) {
        this.serviceType = serviceType;
        this.duration = duration;
        this.price = price;
    }
}

export class TermModel {
    employee = '';
    date = '';
    time = '';
}

export class ConfirmationModel {
    firstName = '';
    lastName = '';
    email = '';
    phoneNumber = '';
}
