import { calendarCreate } from './calendar'
import { colorTrip } from './highlight'
import { tripSummary } from './tripDetails'
import {postData} from '../js/postData'
import { dateCheck } from './validDate'

let stepThree =  document.getElementById("step-3")

function uiUpdate(destination,departDate,returnDate){
    document.getElementById("step-1").style.display = "none";
    let stepTwo =  document.getElementById("step-2")
    document.getElementById("view-cal").style.display = "flex";
    stepTwo.style.display = "flex";
    stepThree.style.display = "none";
    let calendarDiv = document.getElementById("calendar")
    let currentMonth = departDate.month
    let currentYear = departDate.year
    let returnYear = returnDate.year
    let returnMonth = returnDate.month 
    tripSummary(destination[0],departDate,returnDate)
    document.getElementById("destination").innerText = destination[0]
    calendarDiv.insertAdjacentHTML("afterbegin",(Client.calendarCreate(currentYear, currentMonth)))
    document.getElementById(`${currentMonth}-${currentYear}`).className = 'active-calendar'
    document.getElementById("month").innerText = `${getMonth(currentMonth)} ${currentYear}`
    currentMonth += 1
    while(currentYear <= returnYear){
        if (currentYear === returnYear){
            addMonth(calendarDiv,currentMonth,returnMonth,currentYear)
            currentYear += 1

        }else{
            addMonth(calendarDiv,currentMonth,12,currentYear)
            currentYear+=1
            currentMonth = 1
        }
    }
    colorTrip(departDate,returnDate)
    postData('http://localhost:8095/submission', destination)
    .then((data) => {
        let lat = data[9]
        let lon = data[3]
        console.log(data);
    })
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

function addMonth(position,currentMonth,endMonth,currentYear){
    for(currentMonth; currentMonth <= endMonth; currentMonth++){
        position.insertAdjacentHTML('beforeend',calendarCreate(currentYear,currentMonth))
    }
}
let viewCal = document.getElementById('view-cal')

function calendarView(){
    if(stepThree.style.display === "none"){
        stepThree.style.display = "flex";
        viewCal.innerText = "Hide calendar"
        if(document.getElementsByTagName("table").length > 1){
            let currentActive = document.getElementsByClassName("active-calendar")[0].id
            document.getElementById("next").style.display = "flex";
            let dashPosition = currentActive.indexOf("-")
            let currentMonth = parseInt(currentActive.slice(0,dashPosition))
            let currentYear = parseInt(currentActive.slice(dashPosition + 1))
            if(currentMonth === 12){
                currentMonth = 1
                currentYear +=1
                if(document.getElementById(`${currentMonth}-${currentYear}`) === null){
                    document.getElementById("next").style.display = "none";
                }
            }if(document.getElementById(`${currentMonth + 1}-${currentYear}`)=== null){
                document.getElementById("next").style.display = "none";
            }if(currentMonth === 1){
                currentMonth = 12
                currentYear -= 1
                if(document.getElementById(`${currentMonth}-${currentYear}`) != null){
                    document.getElementById("back").style.display = "flex";
                }
            }if(document.getElementById(`${currentMonth-1}-${currentYear}`)!= null){
                document.getElementById("back").style.display = "flex";
            }
        }
    }else if(stepThree.style.display === "flex"){
        stepThree.style.display = "none";
        document.getElementById("next").style.display = "none";
        document.getElementById("back").style.display = "none";
        viewCal.innerText = "View Calendar"
    }
}

function nextActive(){
    document.getElementById("back").style.display = "flex";
    let currentActive = document.getElementsByClassName("active-calendar")[0].id
    let dashPosition = currentActive.indexOf("-")
    let currentMonth = parseInt(currentActive.slice(0,dashPosition))
    let currentYear = parseInt(currentActive.slice(dashPosition + 1))
    document.getElementById(`${currentMonth}-${currentYear}`).className = "inactive-cal" 
    currentMonth += 1
    if(currentMonth === 12){
        document.getElementById("month").innerText = `${getMonth(currentMonth)} ${currentYear}`
        document.getElementById(`${currentMonth}-${currentYear}`).className = "active-calendar"
        if(document.getElementById(`1-${currentYear + 1}`) == null){
            document.getElementById("next").style.display = "none";
        }
    }else if(currentMonth === 13){
        currentMonth = 1
        currentYear += 1
        document.getElementById("month").innerText = `${getMonth(currentMonth)} ${currentYear}`
        document.getElementById(`${currentMonth}-${currentYear}`).className = "active-calendar"
        if(document.getElementById(`${currentMonth + 1}-${currentYear}`) == null){
            document.getElementById("next").style.display = "none";
        }
    }else{
        document.getElementById("month").innerText = `${getMonth(currentMonth)} ${currentYear}`
        document.getElementById(`${currentMonth}-${currentYear}`).className = "active-calendar"
        if(document.getElementById(`${currentMonth +1}-${currentYear}`) === null){
            document.getElementById("next").style.display = "none";
        }
    }

}

function previousActive(){
    let currentActive = document.getElementsByClassName("active-calendar")[0].id
    let dashPosition = currentActive.indexOf("-")
    let currentMonth = parseInt(currentActive.slice(0,dashPosition))
    let currentYear = parseInt(currentActive.slice(dashPosition + 1))
    document.getElementById(`${currentMonth}-${currentYear}`).className = "inactive-cal"
    currentMonth -=1
    if(currentMonth === 1){
        document.getElementById(`${currentMonth}-${currentYear}`).className = "active-calendar"
        document.getElementById("month").innerText = `${getMonth(currentMonth)} ${currentYear}`
        document.getElementById("next").style.display = "flex"
        if(document.getElementById(`12-${currentYear-1}`) == null){
            document.getElementById("back").style.display = "none";
        }
    }else if(currentMonth === 0){
        currentMonth = 12
        currentYear -= 1
        document.getElementById("month").innerText = `${getMonth(currentMonth)} ${currentYear}`
        document.getElementById(`${currentMonth}-${currentYear}`).className = "active-calendar"
        if(document.getElementById(`${currentMonth-1}-${currentYear}`) == null){
            document.getElementById("next").style.display = "none";
        }
    }else{
        document.getElementById("month").innerText = `${getMonth(currentMonth)} ${currentYear}`
        document.getElementById(`${currentMonth}-${currentYear}`).className = "active-calendar"
        document.getElementById("next").style.display = "flex"
        if(document.getElementById(`${currentMonth -1}-${currentYear}`) === null){
            document.getElementById("back").style.display = "none";
        }
    }  

}

export{
    uiUpdate,
    calendarView,
    nextActive,
    previousActive
}