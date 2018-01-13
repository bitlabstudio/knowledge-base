# Redux Reducers

Well reducers, just like action creators, are nothing but fairly simple JS functions.

So having a reducer like this:

```ecmascript 6
const initialState = {
  count: 0,
}

const sampleReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SAMPLE_ACTION': {
      return {
        ...state,
        count: state.count + 1,
      }
    }
    default:
      return state
  }
}
```

Can be tested like this:

```ecmascript 6
import { sampleAction } from './2-actions'
import { initialState, sampleReducer } from './3-reducers'

describe('sampleReducer', () => {
  it('returns the initial value when the default branch is hit', () => {
    expect(sampleReducer(initialState, { type: 'NOT_FOUND_ACTION' })).toEqual(
      initialState,
    )
  })

  it('updates the store correctly', () => {
    expect(sampleReducer(initialState, sampleAction())).toEqual({
      ...initialState,
      count: 1,
    })
  })
})
```

Notice that we can even import the original action creators here. So we could test actions and reducers in one test case.
