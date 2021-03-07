// Should prepopulate the body of the document to a calendar with the duration of the trip

function calendarCreate(duration,multi){
    let calendar = document.getElementById("calendar")
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