const chai = require('chai');
const expect = chai.expect;

describe('chai test', () => {
    it('should compare some value', () => {
        expect(1).to.equal(1)
    })
    it('should compare some other value', () => {
        expect({name:'bobo'}).to.deep.equal({name:'bobo'})
        expect({name: 'bobo'}).to.have.property('name').to.equal('bobo')
        expect(5>8).to.be.false;
        expect({}).to.be.a('object');
    })
})