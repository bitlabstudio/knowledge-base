# Redux Actions

Redux action creators like the following are nothing but regular functions.

```ecmascript 6
export const SAMPLE_ACTION = 'SAMPLE_ACTION'
export const sampleAction = () => ({ type: SAMPLE_ACTION })
```

So you can test them like regular functions as well.

```ecmascript 6
describe('sampleAction', () => {
  it('returns correct action type', () => {
    expect(sampleAction()).toEqual({ type: SAMPLE_ACTION })
  })
})
```

Notice the use of `toEqual` since we've got an object to compare now.

Or shorter:

```ecmascript 6
test('sampleAction returns correct action type', () => {
  expect(sampleAction()).toEqual({ type: SAMPLE_ACTION })
})
```
