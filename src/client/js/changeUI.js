// Should update UI from step 1 to step 2
let submitButton = document.getElementById("submit-button")
submitButton.addEventListener("click", uiUpdate());

function uiUpdate(destination,multiCity,departDate,returnDate){
    document.getElementById("step-1").style.display = "none";
    document.getElementById("step-2").style.display = "flex";
    createCalendar(duration,multiCity,departMonth,returnMonth)
}

