const supertest = require('supertest');
const chai = require('chai');
const expect = require('chai').expect;
const describe = require('mocha').describe;
const it = require('mocha').it;
const {server,shutdown} = require('../index');


describe('HTTP Tests: ', () => {
    after(function () {
        shutdown();
    });
    it('Can access GET /', function(done){
        //Go get all the lists
        supertest(server)
            .get('/')
            .set('Accept', 'application/json')
            .then((res) => {
                expect(res.body).to.be.an('object');
                done();
            })
            .catch(done);
    });

    it('Can access  properties on GET /', function(done){
        //Go get all the lists
        supertest(server)
            .get('/')
            .set('Accept', 'application/json')
            .then((res) => {
                expect(res.body.saying).to.be.an('string');
                expect(new Date(res.body.date)).to.be.a('date');
                done();
            })
            .catch(done);
    });
});