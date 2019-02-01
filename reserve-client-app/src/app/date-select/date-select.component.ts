import { Component, OnInit } from '@angular/core';

@Component({
    // tslint:disable-next-line:component-selector
    selector: 'date-select',
    templateUrl: './date-select.component.html',
    styleUrls: ['./date-select.component.css']
})
export class DateSelectComponent implements OnInit {
    // hardcoded mock (later will be replaced with values from db
    calendar = ['29.11', '30.11', '1.12', '2.12', '3.12', '4.12', '5.12',
        '6.12', '7.12', '8.12', '9.12', '10.12', '11.12', '12.12', '13.12', '14.12', '15.12', '16.12', '17.12'];
    availableHours = ['7:00', '7:30', '8:00', '8:30', '9:00', '9:30', '10:00', '10:30', '11:00', '11:30', '12:00', '12:30'];

    calendarMap =
        {
            '29.11': ['7:00', '7:30', '8:00', '8:30', '9:00'],
            '30.11': ['7:30', '8:00', '8:30', '9:00', '9:30', '10:00', '10:30', '11:00'],
            '1.12': ['7:00', '7:30', '8:00', '8:30', '9:00', '9:30', '10:00', '10:30', '11:00', '11:30', '12:00', '12:30'],
            '2.12': ['7:00', '7:30', '8:00', '10:00', '10:30', '11:00', '11:30', '12:00', '12:30'],
            '3.12': ['7:00', '7:30', '8:00', '8:30', '9:00', '9:30', '10:00', '10:30', '12:30'],
            '4.12': ['10:30', '11:00', '11:30', '12:00', '12:30'],
            '5.12': ['7:00', '8:30', '9:00', '9:30', '11:00', '11:30', '12:00', '12:30'],
            '6.12': ['7:00', '7:30'],
            '7.12': ['7:00', '7:30', '8:00', '8:30', '9:00'],
            '8.12': ['7:00', '7:30', '8:00', '8:30', '9:00', '9:30', '10:00', '10:30', '11:00', '12:00', '12:30'],
            '9.12': ['7:00', '7:30', '8:00', '8:30', '9:00', '9:30', '10:00', '10:30', '11:00', '11:30', '12:00', '12:30'],
            '10.12': ['7:00', '7:30', '8:00', '8:30', '9:00', '9:30', '12:30'],
            '11.12': ['7:00', '7:30', '8:00', '8:30', '9:00', '9:30', '10:00', '10:30', '11:00', '12:30'],
            '12.12': ['7:00', '7:30', '8:00', '8:30', '9:00', '9:30', '10:00', '10:30', '11:00', '11:30', '12:00', '12:30'],
            '13.12': ['9:00', '9:30', '10:00', '10:30', '11:00', '11:30', '12:00', '12:30'],
            '14.12': ['7:00', '7:30', '8:00', '8:30', '9:00', '9:30', '10:00', '10:30', '11:00', '11:30', '12:00', '12:30'],
            '15.12': ['7:00', '7:30', '8:00', '8:30', '9:00', '9:30', '10:00', '12:30'],
            '16.12': ['7:00', '7:30', '8:00', '8:30', '11:30', '12:00', '12:30'],
            '17.12': ['7:00', '7:30', '8:00']
        };
    // / hardcoded mock

    calPosition = 0;
    selectedDate: string;
    dateSelectors: HTMLCollectionOf<Element>;

    constructor() { }

    ngOnInit() {
        console.log('Date selector');
        this.dateSelectors = document.getElementsByClassName('dateSelector');
        this.fillDates(this.dateSelectors, this.calPosition);
        this.selectedDate = document.getElementsByClassName('active')[0].textContent;
        console.log('init | selectedDate ', this.selectedDate);
    }

    fillDates(dateSelectors, position) {
        console.log('fillDates | calPosition', this.calPosition);
        let j = position;
        const dates = Object.keys(this.calendarMap);
        for (let i = 0; i < dateSelectors.length; i++) {
            dateSelectors[i].textContent = dates[j];
            j++;
        }
    }

    dateSelectLeft() {
        console.log('dateSelectLeft | calPosition', this.calPosition);
        const dateSelectors = document.getElementsByClassName('dateSelector');
        if (this.calPosition > 3) {
            this.calPosition -= 4;
            this.fillDates(dateSelectors, this.calPosition);
        }
    }

    dateSelectRight() {
        console.log('dateSelectRight | calPosition', this.calPosition);
        const dateSelectors = document.getElementsByClassName('dateSelector');
        if (this.calPosition < this.calendar.length - 3) {
            this.calPosition += 4;
            this.fillDates(dateSelectors, this.calPosition);
        }
    }

    selectDate(event) {
        console.log('selectDate: ', event.target.id);
        const selectedDate = document.getElementById(event.target.id);
        const dateSelectorElements = document.getElementsByClassName('dateSelector');

        for (let i = 0; i < dateSelectorElements.length; i++) {
            dateSelectorElements[i].classList.remove('active');
        }
        selectedDate.classList.add('active');
    }
}
