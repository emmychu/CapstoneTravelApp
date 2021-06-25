import { submitForm } from './js/formSubmission'
import {previousActive,nextActive, uiUpdate} from './js/changeUI'
import {calendarCreate} from './js/calendar'
import { dateObject } from './js/dateConvert'
import { dateCheck } from './js/validDate'
import { calendarView } from './js/changeUI'
import { tripSummary, countDown, duration } from './js/tripDetails'
// import { hello } from './js/dataCall'

import './styles/base.scss'
import './styles/step1.scss'
import './styles/step2.scss'
import './styles/step3.scss'

alert("Please fill out the form and press submit! Thanks!");

document.getElementById("view-cal").addEventListener("click", () => {calendarView()})
document.getElementById("next").addEventListener("click",() => {nextActive()})
document.getElementById("back").addEventListener("click",() => {previousActive()})

export {
    submitForm,
    dateObject,
    dateCheck,
    uiUpdate,
    calendarCreate,
    calendarView,
    nextActive,
    previousActive,
    tripSummary,
    countDown,
    duration,
    // dateCall
}

