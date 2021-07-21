// import request from 'supertest'
// import app from '../server/app.js'
// const app = require ('../server/index')
const express = require("express")
const { TestWatcher } = require("jest")
const supertest = require('supertest')
import { jest } from '@jest/globals'
// const imageAPI = require("../server/imageApi")
// import {imageAPI} from '../server/__mock__'
jest.mock('../server/imageApi')
const app = express()
const request = supertest(app)

// app.use("/image", imageAPI)

jest.mock("../server/imageApi", () =>[
    {
        keyword: "Dallas",
        image: "thisisaurl.com"
    }
])

global.fetch = jest.fn(() => 
    Promise.resolve({
        json: () => Promise.resolve({
            rates: "1234",
        })
    })
)


describe('should fetch users', () => {
    it('Gets the test endpoint', async () => {
        const response = await getImage
    })
});

// describe("Testing pixabay API call", () => {
//     // app.get('/http://localhost:8095/image', async(request,response) => {
//     //     response.json({message: 'pass'})
//     // })
//     it('Gets the test endpoint', async () => {
//         console.log("hello");
//         const response = await (await request.post('/image'))
//         console.log("hello2");
// })});