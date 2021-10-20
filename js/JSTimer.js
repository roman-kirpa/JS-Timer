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
    var delay = 1000;
    function timeoutLoop() {
        var currentDate = new Date();
        var differenceMilisecond = Math.abs(date - currentDate);
        var days = Math.floor(differenceMilisecond / (1000 * 60 * 60 * 24));
        var hours = Math.floor((differenceMilisecond % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        var minutes = Math.floor((differenceMilisecond % (1000 * 60 * 60)) / (1000 * 60));
        var seconds = Math.floor((differenceMilisecond % (1000 * 60)) / 1000);
        SetInnerHtmlToElement('Days', days);
        SetInnerHtmlToElement('Hours', hours);
        SetInnerHtmlToElement('Minutes', minutes);
        SetInnerHtmlToElement('Seconds', seconds);
        setTimeout(timeoutLoop, delay);
    }

    setTimeout(timeoutLoop, delay);

}

function SetInnerHtmlToElement(elementId, value) {
    var hoursElement = document.getElementById(elementId);
    hoursElement.innerHTML = value;
}

