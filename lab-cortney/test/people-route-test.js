'use strict';

const request = require('superagent');
const expect = require('chai').expect;

const server = require ( './../server');
const port = process.env.PORT || 3000;
const serverUrl = `http://localhost:${port}`;

describe('testing people-route module', function(){
  console.log(server.isRunning);
  before(function(){
    console.log('hello');
    if (!server.isRunning){
      server.listen(port, function(){
        console.log('Testing People Route Sever Not Running');
        // done();
      });
      return;
    }
    console.log('Testing People Route Sever Running');
    // done();
  });

  after(function(done){
    if (server.isRunning){
      server.close(function(){
        server.isRunning = false;
        console.log('Server Closing - After');
        done();
      });
      return;
    }
    console.log('Server is Being Closed - After');
    done();
  });
  //
  it('should do nothing' , (done) => {
    expect("null").to.equal("null");
    done();
  });

  // describe('testing method POST on endpoint /api/people', function(){
  //   before((done) => {
  //     console.log('serverUrl', serverUrl);
  //     request.post(`${serverUrl}/api/people`)
  //       .send({name: 'testname!'})
  //       .end((err, res) => {
  //         this.res = res;
  //         this.person = res.body;
  //         done();
  //       });
  //   });
  //
  //   it('should return status 200', () => {
  //     expect(this.res.status).to.equal(200);
  //   });
  //
  //   it('should return a person', () => {
  //     expect(this.person.name).to.equal('testname!');
  //   });
  // });
  it('should return status 400', function(done) {
    request.post(serverUrl + '/api/people')
      // .send({bad:'object'})
      .end(function(err, res) {
        console.log('inside the .end for POST fail test');
        expect(res.status).to.equal(400);
        done();
      });
  });
  // describe('for method POST on endpoint /api/people', () => {
  //
  // });
}); //THIS IS THE END