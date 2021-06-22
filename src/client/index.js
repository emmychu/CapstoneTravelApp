import { submitForm } from './js/formSubmission'
// import {uiUpdate} from './js/changeUI'
// import {createCalendar} from './js/createCalendar'
// import { hello } from './js/dataCall'
import { dateObject } from './js/dateConvert'
import { dateCheck } from './js/validDate'

import './styles/base.scss'
import './styles/step1.scss'
import './styles/step2.scss'


alert("Please fill out the form and press submit! Thanks!");

// let multiCity = document.getElementById("multicity")
// multiCity.addEventListener("click",()=>{
//     multiCity.insertAdjacentHTML("afterbegin",`<div class = "questions" id = "total-cities"><`)
//     console.log("HELLO");
// })


export {
    submitForm,
    dateObject,
    dateCheck,
    // uiUpdate,
    // createCalendar,
    // dateCall
}

