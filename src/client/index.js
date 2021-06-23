import { submitForm } from './js/formSubmission'
import {uiUpdate} from './js/changeUI'
import {createCalendar} from './js/calendar'
import { getDay } from './js/calendar'
import { dateObject } from './js/dateConvert'
import { dateCheck } from './js/validDate'
// import { hello } from './js/dataCall'

import './styles/base.scss'
import './styles/step1.scss'
import './styles/step2.scss'

alert("Please fill out the form and press submit! Thanks!");

export {
    submitForm,
    dateObject,
    dateCheck,
    uiUpdate,
    createCalendar,
    getDay,
    // dateCall
}

