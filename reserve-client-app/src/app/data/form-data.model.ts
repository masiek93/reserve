export class FormData {
    serviceType = '';
    duration = '';
    prize = '';
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
        this.prize = '';
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
    prize = '';
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
