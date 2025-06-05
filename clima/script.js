
// http://api.weatherapi.com/v1/current.json?key=c64ec24dd93f4e78b9162901250506&q=Paraipaba&aqi=no

const temperatureElement = document.querySelector('.temp');
const locationField = document.querySelector('.time_loc p');
const dateandTimeField = document.querySelector('.time_loc span');
const conditionField = document.querySelector('.condicao p');
const pesqField = document.querySelector('.input_cidade');
const form = document.querySelector('form');


form.addEventListener('submit', pesqaField )

let target = 'Lucknow'

const fetchResult = async (targetLocation) => {
    const res = await fetch(`http://api.weatherapi.com/v1/current.json?key=c64ec24dd93f4e78b9162901250506&q=${targetLocation}&aqi=no`);
    const data = await res.json();
    console.log(data);

    let locationName = data.location.name;
    let time = data.location.localtime;
    let temperature = data.current.temp_c;
    let condition = data.current.condition.text;

    updateDetails(locationName, time, temperature, condition);
}

function updateDetails(locationName, time, temperature, condition) {

    let splitDate = time.split(' ')[0];
    let splitTime = time.split(' ')[1];
    let currentDate = getDayName(new Date(splitDate).getDay());




    locationField.innerHTML = locationName;
    dateandTimeField.textContent = `${currentDate}, ${splitDate} - ${splitTime}`;
    temperatureElement.textContent = `${temperature}°C`;
    conditionField.textContent = condition;
}

function pesqaField(e) {
    e.preventDefault();
    target = pesqField.value;
    fetchResult(target);
}

fetchResult(target)

function getDayName(dayIndex) {
    const days = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado'];
    return days[dayIndex];
}

