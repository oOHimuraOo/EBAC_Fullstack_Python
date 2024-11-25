AOS.init()

const modificadorData = "Sept 25, 2034 11:31:00"
const dataDoEvento = new Date(modificadorData);
const timeStampDoEvento = dataDoEvento.getTime();
const interval = 1000

document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('data').innerText = modificadorData
})

var timeCall = setInterval(function() {
    const now = new Date()
    const timeStampNow = now.getTime()
    const timeToEvent = timeStampDoEvento - timeStampNow
    const yearsDenominator = 1000 * 60 * 60 * 24 * 30 * 12
    const monthsDenominator = 1000 * 60 * 60 * 24 * 30
    const daysDenominator = 1000 * 60 * 60 * 24
    const hoursDenominator = 1000 * 60 * 60
    const minutesDenominator = 1000 * 60
    const secondsDenominator = 1000
    
    var yearsLeft = Math.floor(timeToEvent / yearsDenominator)
    var resto1 = timeToEvent % yearsDenominator
    var monthsLeft = Math.floor(resto1 / monthsDenominator)
    var resto2 = resto1 % monthsDenominator
    var daysLeft = Math.floor(resto2 / daysDenominator)
    var resto3 = resto2 % daysDenominator
    var hoursLeft = Math.floor(resto3 / hoursDenominator)
    var resto4 = resto3 % hoursDenominator
    var minutesLeft = Math.floor(resto4 / minutesDenominator)
    var resto5 = resto4 % minutesDenominator
    var secondsLeft = Math.floor(resto5 / secondsDenominator)

    const novaFrase = yearsLeft + " Anos " + monthsLeft +" Meses " + daysLeft + " dias " + hoursLeft + " horas " + minutesLeft + " minutos " + secondsLeft + " segundos"
    
    
    document.getElementById('contador').innerText = novaFrase

    if (yearsLeft <= 0 && monthsLeft <= 0 && daysLeft <= 0 && hoursLeft <= 0 && minutesLeft <= 0 && secondsLeft <= 0) {
        document.getElementById('contador').parentNode.innerText = "Incrições encerradas!"
        clearInterval(timeCall)
    } 

}, interval)