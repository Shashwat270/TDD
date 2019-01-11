const capitalize = require('./capitalize');

console.log(capitalize);


test('All the letters of the sentence must be uppercase',function(){
    expect(capitalize('')).toEqual('Not a string')
});

describe('capitalize', ()=>{
    it('It should convert all the charcaters to capital', () =>{
        expect(capitalize('abc')).toEqual('ABC')
    })
})

test('All the letters of the sentence must be uppercase',function(){
    expect(capitalize(111)).toEqual('1Not a string')
});