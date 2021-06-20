// Should update UI from step 1 to step 2
import { calendarCreate } from './createCalendar'

function uiUpdate(destination,multiCity,departDate,returnDate){
    document.getElementById("step-1").style.display = "none";
    document.getElementById("step-2").style.display = "flex";
    calendarCreate(destination,multiCity,departDate,returnDate)
}

