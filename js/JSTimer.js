window.onload = function () {
    console.log('loaded');
    document.getElementById('Run').onclick = runTimer;
}

var runTimer = function () {
    console.log('timer function yes');
    var inputDate = document.getElementById('inputdate').value;
    if (inputDate === '' || inputDate === 'undefind') {
        return;
    }

    var date = new Date(inputDate);
  
    while (true) {
        var currentDate = new Date();
        var differenceMilisecond = Math.abs(date - currentDate);
        var days= Math.floor(differenceMilisecond / (1000 * 60 * 60 * 24));
        var hours = Math.floor((differenceMilisecond % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        var minutes = Math.floor((differenceMilisecond % (1000 * 60 * 60)) / (1000 * 60));
        var seconds = Math.floor((differenceMilisecond % (1000 * 60)) / 1000);
        ChangeElement('Days', days);
        ChangeElement('Hours', hours);
        ChangeElement('Minutes', minutes);
        ChangeElement('Seconds', seconds);
    }
    
}

function ChangeElement(elementId, value) {
    var hoursElement = document.getElementById(elementId);
    hoursElement.innerHTML = value;
}

