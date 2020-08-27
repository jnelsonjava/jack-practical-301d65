'use strict';

const request = require('supertest');

/*
-------------------------------------------------------------------
Complete the createServer function to include routes as follows:
  - a GET request to / should respond with status of 200
  - a DELETE request to /things/1 should respond with status of 405
  - any other route should return status of 404

NOTE: You do not need write the app.listen() code for your server
      The test do this for you
-------------------------------------------------------------------
*/

const createServer = () => {

  const express = require('express');
  const app = express();

  // routes go here

  return app;
};

///////////////////////////////////////////////////
// TESTS
///////////////////////////////////////////////////

describe('Testing challenge', function () {

  let server = createServer();

  it('responds to /', function testSlash() {
    return request(server)
      .get('/')
      .then(response => {
        expect(response.status).toEqual(200);
      })
  });

  it('responds to /things/1', function testSlash() {
    return request(server)
      .delete('/things/1')
      .then(response => {
        expect(response.status).toEqual(405);
      })
  });

  it('404 everything else', function testPath() {
    return request(server)
      .get('/foo')
      .then(response => {
        expect(response.status).toEqual(404);
      })
  });
});

