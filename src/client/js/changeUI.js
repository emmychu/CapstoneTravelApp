// Should update UI from step 1 to step 2
import { calendarCreate } from './calendar'

function uiUpdate(destination,departDate,returnDate){
    document.getElementById("step-1").style.display = "none";
    let stepTwo =  document.getElementById("step-2")
    stepTwo.style.display = "flex";
    if(departDate.year === returnDate.year && departDate.month === returnDate.month){
        document.getElementById("month").innerText = getMonth(departDate.month)
        calendarCreate(document.getElementById("calendar"), departDate.year,departDate.month)
    }else{
        // for(let currentYear = departDate.year ; year <= returnDate.year; currentYear++){
        //     for(let currentMonth = departDate.month; departDate.month <12; currentMonth++){

        //     }
        // }
    }
}

function getMonth(month){
    switch (month){
        case 1:
            return "January"
        case 2:
            return "February"
        case 3:
            return "March"
        case 4:
            return "April"
        case 5:
            return "May"
        case 6:
            return "June"
        case 7:
            return "July"
        case 8:
            return "August"
        case 9:
            return "September"
        case 10:
            return "October"
        case 11:
            return "November"
        case 12:
            return "December"    
    }
}

export{
    uiUpdate
}