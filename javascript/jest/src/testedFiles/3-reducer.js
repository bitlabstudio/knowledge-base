export const initialState = {
  count: 0,
}

export const sampleReducer = (state = initialState, action) => {
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
