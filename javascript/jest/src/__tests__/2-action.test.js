import { sampleAction, SAMPLE_ACTION } from '../testedFiles/2-action'

describe('sampleAction', () => {
  it('returns correct action type', () => {
    expect(sampleAction()).toEqual({ type: SAMPLE_ACTION })
  })
})
