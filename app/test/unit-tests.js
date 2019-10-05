const chai = require('chai');
const expect = require('chai').expect;
const describe = require('mocha').describe;
const it = require('mocha').it;
const {getRandomSaying} = require('../index');


describe('Unit Tests: ', () => {
    it('Can access random saying', function(done){
        const obj = getRandomSaying();
        expect(obj.saying).to.be.an('string');
        expect(new Date(obj.date)).to.be.a('date');
        done();
    });
});