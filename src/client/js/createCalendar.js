// Should prepopulate the body of the document to a calendar with the duration of the trip
let month = 

function calendarCreate(duration,multi,departMonth, returnMonth){
    let calendar = document.getElementById("calendar")
    calendar.style.gridTemplateColumns = 7
    calendar.style.gridTemplateRows = 5
    if(multi){
        if(duration < 7){
            calendar.style.gridTemplateColumns = duration
        }else{
            let weeks = duration/7
            let remainderDays = duration % 7

        }
    }else{

    }
}