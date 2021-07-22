const express = require("express")
const supertest = require('supertest')
const app = express()
const request = supertest(app)

describe("Testing server endpoint", () => {
    app.get('/test', async(request,response) => {
        response.json({message: 'pass'})
    })
    it('Gets the test endpoint', async ()=> {
        const response = await (request.get('/test'))
        expect(response.status).toEqual(200)
        expect(response.body.message).toBe('pass')
})});