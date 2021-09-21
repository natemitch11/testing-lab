const {returnTwo, greeting, sum, subtract, multiply, divide} = require('./function')

test("Should return 2 as an Integer", () =>{
    expect(returnTwo()).toBe(2)
})

test("Should return Hello {name}", () =>{
    expect(greeting('James')).toEqual('Hello, James.')
})

describe('Math functions', ()=>{
    test("Should return a sum of 2 numbers", ()=>{
        expect(sum(1,2)).toBe(3);
    })
    test("Should subtract 2 numbers", ()=>{
        expect(subtract(2,1)).toBe(1);
    })
    test("Should return a product of 2 numbers", ()=>{
        expect(multiply(2,2)).toBe(4);
    })
    test("Should divide 2 numbers", ()=>{
        expect(divide(10,2)).toBe(5);
    })

})