// Should update UI from step 1 to step 2
import { calendarCreate } from './calendar'

function uiUpdate(destination,departDate,returnDate){
    document.getElementById("step-1").style.display = "none";
    let stepTwo =  document.getElementById("step-2")
    stepTwo.style.display = "flex";
    let calendarDiv = document.getElementById("calendar")
    let currentMonth = departDate.month
    let currentYear = departDate.year
    let returnYear = returnDate.year
    let returnMonth = returnDate.month 
    calendarDiv.insertAdjacentHTML("afterbegin",(calendarCreate(currentYear, currentMonth)))
    document.getElementById(`${currentMonth}-${currentYear}`).className = `active-calendar`
    currentMonth += 1
    while(currentYear <= returnYear){
        if (currentYear === returnYear){
            addMonth(currentMonth,returnMonth,currentYear)
            currentYear += 1
            // for(currentMonth; currentMonth <= returnMonth; currentMonth++){
            //     calendarDiv.insertAdjacentHTML('beforeend',calendarCreate(currentYear,currentMonth))
            // }
        }else{
            addMonth(currentMonth,12,currentYear)
            currentYear+=1
        }
    }    
    return calendarOn
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

function addMonth(currentMonth,endMonth,currentYear){
    for(currentMonth; currentMonth <= endMonth; currentMonth++){
        calendarDiv.insertAdjacentHTML('beforeend',calendarCreate(currentYear,currentMonth))
    }

}

function calendarView(calendarOn) {
    let stepThree =  document.getElementById("step-3")
    let viewCal = document.getElementById('view-cal')
    if(calendarOn = false){
        stepThree.style.display = "flex";
        viewCal.innerText = "Hide calendar"
        return calendarOn = true
    }else{
        stepThree.style.display = "none";
        viewCal.innerText = "View Calendar"
        return calendarOn = false
    }
}


export{
    uiUpdate,
    calendarView
}