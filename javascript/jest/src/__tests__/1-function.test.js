import { sum } from '../testedFiles/1-function'

describe('sum', () => {
  it('to add two integers correctly', () => {
    expect(sum(1, 1)).toBe(2)
    expect(sum(2, 4)).toBe(6)
    expect(sum(4, 4)).toBe(8)
  })
})
