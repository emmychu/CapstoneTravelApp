// Should update UI from step 1 to step 2
submitButton = document.getElementById("submit-button")
submitButton.addEventListener("click", uiUpdate())

function uiUpdate(){
    let multiCity = false
    document.getElementById("step-1").style.display = "none";
    document.getElementById("step-2").style.display = "flex";
    document.getElementById("destination") = document.getElementById("first-destination").value
    let duration = document.getElementById("duration").value
    if(document.getElementById("multicity").checked){
        multiCity = true;
    }
    createCalendar(duration,multiCity)
}

