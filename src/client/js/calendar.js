// Should change the body of the document to a calendar with the duration of the trip

function calendarCreate(duration,multi,departDate, returnDate){
    let calendar = document.getElementById("calendar")
    //want to do data call to API through server to get information
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