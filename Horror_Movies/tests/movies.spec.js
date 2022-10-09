
const { response } = require('express');
const request = require('supertest')

const {app,movies} = require('../index.js')

describe("Movie test", () => {
    test('Get movies', async() => {
       //const res = await request(app).get('/')
        return request(app).get('/').then(response=>{
            expect(response.status).toBe(200)
            expect(response.body.length).toBe(movies.length)
            
            
        })

        
      })
});

