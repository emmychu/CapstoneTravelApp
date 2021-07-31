//Function takes the weather data and adds it to the calendar
import {dateObject} from './dateConvert'

function addWeather(data){
    for(let day = 0; day < data.length; day++){
        let currentDay = dateObject(data[day]['datetime'])
        let dayCal = document.getElementById(`${currentDay["month"]}-${currentDay['day']}-${currentDay['year']}`)
        if(dayCal === null){
            continue;
        }
        dayCal.insertAdjacentHTML("beforeend", `<p>High of ${data[day]['high_temp']}°C <br> Low of ${data[day]['low_temp']}°C <br> Weather: ${data[day]['weather']['description']} `)
    };
}
export{
    addWeather
}