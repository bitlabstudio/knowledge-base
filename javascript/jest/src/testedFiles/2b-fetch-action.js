export const SAMPLE_FETCH_ACTION = 'SAMPLE_FETCH_ACTION'
export const sampleFetchAction = () => ({ type: SAMPLE_FETCH_ACTION })

export const SAMPLE_FETCH_ACTION_DONE = 'SAMPLE_FETCH_ACTION_DONE'
export const sampleFetchActionDone = response => ({
  type: SAMPLE_FETCH_ACTION_DONE,
  response,
})

export const SAMPLE_FETCH_ACTION_ERROR = 'SAMPLE_FETCH_ACTION_ERROR'
export const sampleFetchActionError = error => ({
  type: SAMPLE_FETCH_ACTION_ERROR,
  error,
})

export const sampleFetchActionThunk = params => dispatch => {
  dispatch(sampleFetchAction())
  return fetch(`localhost:8000/test/?${params}`, {
    method: 'GET',
  })
    .then(response => response.json())
    .then(json => dispatch(sampleFetchActionDone(json)))
    .catch(error => dispatch(sampleFetchActionError(error)))
}
