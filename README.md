# FEND Capstone Travel App

## Installation
* `npm i node`
* `npm i express`
* `npm i cors`
* `npm i body-parser`
* `npm install -D webpack`
* `npm i -D webpack-dev-server@4.0.0-beta.2`
* `npm install --save-dev webpack-cli`
* `npm i -D @babel/core @babel/preset-env babel-loader`
* `npm i -D style-loader node-sass css-loader sass-loader`
* `npm i -D clean-webpack-plugin`
* `npm i -D html-webpack-plugin`
* `npm i -D mini-css-extract-plugin`
* `npm i -D optimize-css-assets-webpack-plugin terser-webpack-plugin`
* `npm i node-fetch`
* `npm i dotenv`
* `npm i workbox-webpack-plugin`
* `npm i jest --save-dev`
* `npm i supertest --save-dev`

## Extend Options:
* Add end date and displayed length of trip
* Forecast for multiple days
* Image pulled for country from pixabay if no results

## Commands for Terminal
* `npm run build-prod`: Will run production build of site
* `npm run build-dev`: Will run developer build of site
* `npm run start`: Will run local server on port 8095
* `npm run test`: Will run written tests

## Important Notes
The application accepts city, state(if located within US) and country. If not found the background image will show a random image for the country instead of the city. There is an option to display a calendar which shows the start and end date of the trip. Start is represented by the color green and end is represented by the color red. The calendar also displays the forecast 16 days in advance. 

## Credits to:
* Calendar creation tutorial used from [here] (https://javascript.info/task/calendar-table)
* Server test tutorial used from [here] (https://zellwk.com/blog/endpoint-testing/)
* Back and forward icons borrowed from icons8.com