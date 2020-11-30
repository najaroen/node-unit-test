const chai = require('chai');
const expect = chai.expect;
const chaiAspromise = require('chai-as-promised');
chai.use(chaiAspromise)
const demo = require('./demo');

describe('demo', () => {
    context('add', () => {
        it('should add two numbers', () => {
            expect(demo.add(1,2)).to.equal(3)
        })
    })
    context('test promise', () => {
        it('should test the call back', (done)=> {
            demo.addCallback(1,2, (err, result) => {
                expect(err).to.not.exist;
                expect(result).to.equal(3);
                done();
            })
        } )
        it('should add two numbers', (done) => {
            demo.addPromise(1,2)
            .then((result)=> {
                expect(result).to.equal(3);
                done();
            })
            .catch((err) => {
                console.log('error ')
                done(err)
            })
        })
        it('should test a promise with return', () => {
            return demo.addPromise(1,2)
            .then(result=> {
                expect(result).to.equal(3)
            })
        })
        it('test promise with async await', async () => {
            let result = await demo.addPromise(1,2)
            expect(result).to.equal(3)
        })
        it('test promise with async await with chaiAsPromise', async () => {
            await expect(demo.addPromise(1,2)).to.eventually.equal(4)
        })
    })
})