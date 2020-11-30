const assert = require('assert')
describe('Hell', ()=> {
    context('function to be tested', () => {
        it('should do someting', ()=>{
            assert.equal(1,1)
        });
        it('should do someting elses', ()=>{
            assert.deepEqual({name:'joe'}, {name:'joe'})
        });
    })
})