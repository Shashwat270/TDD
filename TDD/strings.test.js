const divide = require('./capitalize');

test('All the letters of the sentence must be uppercase',function(){
    expect(capitalize('')).toEqual('')
});

describe('capitalize', ()=>{
    it('It should convert all the charcaters to capital', () =>{
        expect(capitalize('abc')).toEqual('ABC')
    })
})