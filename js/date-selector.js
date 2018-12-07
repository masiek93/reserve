console.log('Date selector');
// hardcoded mock (later will be replaced with values from db
var calendar = ['29.11', '30.11', '1.12', '2.12', '3.12', '4.12', '5.12', '6.12', '7.12', '8.12', '9.12', '10.12', '11.12', '12.12', '13.12', '14.12', '15.12', '16.12', '17.12'];
var availableHours = ['7:00', '7:30', '8:00', '8:30', '9:00', '9:30', '10:00', '10:30', '11:00', '11:30', '12:00', '12:30'];
var calPosition = 0;
init();

function init(){
    var dateSelectors =  document.getElementsByClassName('dateSelector');
    fillDates(dateSelectors, calPosition);
}

function fillDates (dateSelectors, position){
    console.log('fillDates | calPosition', calPosition);
    var j = position;
    for (var i=0; i<dateSelectors.length; i++){
        dateSelectors[i].textContent = calendar[j];
        j++;
    }
}

function dateSelectLeft (){
    console.log('dateSelectLeft | calPosition', calPosition);
    var dateSelectors =  document.getElementsByClassName('dateSelector');
    if(calPosition > 4){
        calPosition -= 4;
        fillDates(dateSelectors, calPosition);
    }
}

function dateSelectRight (){
    console.log('dateSelectRight | calPosition', calPosition);
    var dateSelectors =  document.getElementsByClassName('dateSelector');
    if(calPosition < calendar.length-5){
        calPosition += 4;
        fillDates(dateSelectors, calPosition);
    }
}

function selectDate (elemId, date){
    console.log('selectDate: ', elemId, date);
    var selectedDate = document.getElementById(elemId);
    var dateSelectorElements = document.getElementsByClassName('dateSelector');
    //console.log('selectDate: ', selectedDate, dateSelectorElements);
}

function selectTime (time){
    console.log('selectTime: ', time);
}

