import { sampleAction } from '../testedFiles/2-action'
import { initialState, sampleReducer } from '../testedFiles/3-reducer'

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
