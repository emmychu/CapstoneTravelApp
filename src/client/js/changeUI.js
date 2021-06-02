// Should update UI from step 1 to step 2
submitButton = document.getElementById("submit-button")
submitButton.addEventListener("click", uiUpdate())

function uiUpdate(){
    let multiCity = false
    document.getElementById("step-1").style.display = "none";
    document.getElementById("step-2").style.display = "flex";
    document.getElementById("destination") = document.getElementById("first-destination").value
    let departDate = new Date()
    let returnDate = new Date()
    departDate = document.getElementById("depart-date").value
    returnDate = document.getElementById("return-date").value
    let departMonth = parseInt(departDate.slice(5,6))
    let returnMonth = parseInt(returnDate.slice(5,6))
    let duration = (returnDate.getTime() - departDate.getTime)/(1000 * 60 * 60 *24)
    if(document.getElementById("multicity").checked){
        multiCity = true;
    }
    createCalendar(duration,multiCity,departMonth,returnMonth)
}

