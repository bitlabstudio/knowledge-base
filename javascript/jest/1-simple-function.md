# Simple function

Jest works with any simple JS funnction.

```ecmascript 6
const sum = (x1, x2) => x1 + x2
```

Te tests are usually super readable.  
A single test case is defined with the `test` keyword.  
It takes 2 arguments. 1. a description and 2. the test callback.  

```ecmascript 6
test('to add two integers correctly', () => {
  expect(sum(1, 1)).toBe(2)
})
```

`expect` always holds the function to test and then it's chained up with what it's supposed to match.
Common for simple variable outputs is `toBe`.  
For objects and arrays you should resort to using `toEqual` as you will see in later chapters.

For longer test cases with multiple scenarios you can bundle them up in the `describe` keyword.

```ecmascript 6
describe('sum', () => {
  it('adds two integers correctly', () => {
    expect(sum(1, 1)).toBe(2)
  })
  it('adds a positive and a negative integer correctly', () => {
    expect(sum(4, -2)).toBe(2)
  })
  it('adds two negative integers correctly', () => {
    expect(sum(-1, -1)).toBe(-2)
  })
})
```

`it` is synonym to `test` and can be used interchangeably.
