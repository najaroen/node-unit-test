const assert = require('assert');
describe('b test', () => {
    context('function b test', () => {
        it('should do some thing', () => {
            assert.equal(1,1)
            console.log(`ENV: `,process.env.NODE_ENV)
        })
        if(process.env.NODE_ENV === 'development') {
            console.log('DEVELOPMENT MODE')
        }
    })
})