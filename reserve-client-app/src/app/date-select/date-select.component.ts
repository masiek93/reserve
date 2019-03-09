import { Component, OnInit,  Output, EventEmitter } from '@angular/core';

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

    // hours = ['7:00', '7:30', '8:00', '8:30', '9:00', '9:30', '10:00', '10:30', '11:00', '11:30', '12:00',
    //     '12:30', '13:00', '13:30', '14:00', '14:30', '15:00', '15:30', '16:00', '16:30'];

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

    hours = [];
    calPosition = 0;
    selectedDate: string;
    selectedHour: string;
    dateSelectors: HTMLCollectionOf<Element>;

    @Output() selDateChanged: EventEmitter<string> = new EventEmitter();
    @Output() selHourChanged: EventEmitter<string> = new EventEmitter();

    constructor() { }

    ngOnInit() {
        console.log('Date selector');
        this.dateSelectors = document.getElementsByClassName('dateSelector');
        this.fillDates(this.dateSelectors, this.calPosition);
        this.updateAll();
        console.log('init | selectedDate ', this.selectedDate);
    }

    fillDates(dateSelectors: any, position: any) {
        console.log('fillDates | calPosition', this.calPosition);
        let j = position;
        let lastEnabledIndex = 0;
        const dates = Object.keys(this.calendarMap);
        for (let i = 0; i < dateSelectors.length; i++) {
            if (j < dates.length) {
                dateSelectors[i].textContent = dates[j];
                dateSelectors[i].classList.remove('dateSelectorDisabled');
                lastEnabledIndex = i;
            } else {
                dateSelectors[i].textContent = '';
                dateSelectors[i].classList.add('dateSelectorDisabled');
                console.log('dateSelectors[lastEnabledIndex].id ', dateSelectors[lastEnabledIndex].id);
                this.selectDateById(dateSelectors[lastEnabledIndex].id);
            }
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
        this.updateAll();
    }

    dateSelectRight() {
        console.log('dateSelectRight | calPosition', this.calPosition);
        const dateSelectors = document.getElementsByClassName('dateSelector');
        if (this.calPosition < this.calendar.length - 3) {
            this.calPosition += 4;
            this.fillDates(dateSelectors, this.calPosition);
        }
        this.updateAll();
    }

    selectDate(event: any) {
        // TODO zastanowić się czy nie zostawić tlyko metody selectDateById
        console.log('selectDate: ', event.target.textContent, event.target.id);
        const selectedDate = document.getElementById(event.target.id);
        const dateSelectorElements = document.getElementsByClassName('dateSelector');

        for (let i = 0; i < dateSelectorElements.length; i++) {
            dateSelectorElements[i].classList.remove('active');
        }
        selectedDate.classList.add('active');
        this.updateSelectedDate();
        this.selDateChanged.emit(this.selectedDate);
        this.updateHours(event.target.textContent);
    }

    selectDateById(id: string) {
        const selectedDate = document.getElementById(id);
        const dateSelectorElements = document.getElementsByClassName('dateSelector');

        for (let i = 0; i < dateSelectorElements.length; i++) {
            dateSelectorElements[i].classList.remove('active');
        }
        selectedDate.classList.add('active');

        this.updateSelectedDate();
        this.updateHours(selectedDate.textContent);
    }

    selectTime(event: any) {
        console.log('selectTime: ', event.target.textContent);
        const selectedTime = document.getElementById(event.target.id);
        const timeSelectorElements = document.getElementsByClassName('btn-time');

        for (let i = 0; i < timeSelectorElements.length; i++) {
            timeSelectorElements[i].classList.remove('btn-time-selected');
        }
        selectedTime.classList.add('btn-time-selected');
        this.updateSelectedHour();
        this.selHourChanged.emit(this.selectedHour);
    }

    updateSelectedDate() {
        this.selectedDate = document.getElementsByClassName('active')[0].textContent;
        this.selDateChanged.emit(this.selectedDate);
    }

    updateHours(selectedDate: string) {
        console.log('fupdateHours | selectedDate ', selectedDate);
        this.hours = this.calendarMap[selectedDate];
    }

    clearSelectedHour() {
        const timeSelectorElements = document.getElementsByClassName('btn-time');
        for (let i = 0; i < timeSelectorElements.length; i++) {
            timeSelectorElements[i].classList.remove('btn-time-selected');
        }
        this.selectedHour = '';
        this.selHourChanged.emit(this.selectedHour);
    }

    updateSelectedHour() {
        this.selectedHour = document.getElementsByClassName('btn-time-selected')[0].textContent;
    }

    updateAll() {
        this.updateSelectedDate();
        this.updateHours(this.selectedDate);
    }
}
