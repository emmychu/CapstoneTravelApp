// Should update UI from step 1 to step 2
import { calendarCreate } from './calendar'

function uiUpdate(destination,departDate,returnDate){
    document.getElementById("step-1").style.display = "none";
    stepTwo =  document.getElementById("step-2")
    stepTwo.style.display = "flex";
    stepTwo.insertAdjacentHTML("afterbegin",`<div id="calendar"></div>`)
    if(departDate.year === returnDate.year && departDate.month === returnDate.month){
        calendarCreate(document.getElementById("calendar"), departDate.year,departDate.month)
    }else{
        for(let currentYear = departDate.year ; year <= returnDate.year; currentYear++){
            for(let currentMonth = departDate.month; departDate.month <12; currentMonth++){

            }
        }
        
    }
}

