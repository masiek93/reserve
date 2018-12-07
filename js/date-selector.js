console.log('Date selector');

function dateSelectLeft (){
    console.log('dateSelectLeft');
}

function dateSelectRight (){
    console.log('dateSelectRight');
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

