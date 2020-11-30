const assert = require('assert')
describe('Hell', ()=> {
    context('function to be tested', () => {
        before(()=> {
            console.log('before===>')
        })
        after(()=> {
            console.log('after===>')
        })
        beforeEach(() => {
            console.log('====>beforeEach')
        })
        afterEach(() => {
            console.log('=====>afterEach')
        })
        it('should do someting', ()=>{
            assert.equal(1,1)
        });
        it('should do someting elses', ()=>{
            assert.deepEqual({name:'joe'}, {name:'joe'})
        });
    })
})