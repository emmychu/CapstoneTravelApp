// import request from 'supertest'
// import app from '../server/app.js'
// const app = require ('../server/index')
const express = require("express")
const supertest = require('supertest')
const imageAPI = require("../server/imageApi")
const app = express()
const request = supertest(app)

app.use("/image", imageAPI)

describe("Testing pixabay API call", () => {
    // test("Testing getCoordinates function", () =>{
        // global.fetch = jest.fn(() => Promise.resolve({
        //     json: () => Promise.resolve("test")
        // }))
        // let destination = ["Dallas", "TX", "US"]
        // let api = 123
        // return getImage(api, destination).then(data => {expect(data.toBeUndefined)})

    // console.log("wow")
    app.get('/http://localhost:8095/image', async(request,response) => {
        res.json({message: 'pass'})
    })
    it('Gets the test endpoint', async () => {
        const response = await (await request.post('/image/dallas'))
        .expect()
        .done()
        // .send({destination:['dallas','us','tx']})
        // .end(functiuon(err,res){
        //     if(err){
        //         return done(err)
        //     }
        // })
        // .expect(response.status).toBe(200)
        // .expect(response.body.message).toBe('pass')
        // .set("Accept", "application/json")
        // .expect("Content-Type", "text/html; charset=utf-8")
    // )})
    
})});