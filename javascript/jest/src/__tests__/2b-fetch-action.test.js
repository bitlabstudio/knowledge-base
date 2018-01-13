import configureMockStore from 'redux-mock-store'
import thunk from 'redux-thunk'
import * as actions from '../testedFiles/2b-fetch-action'
import fetchMock from 'fetch-mock'

const middlewares = [thunk]
const mockStore = configureMockStore(middlewares)

describe('sampleFetchActionThunk', () => {
  afterEach(() => {
    fetchMock.reset()
    fetchMock.restore()
  })

  it('dispatches the correct actions on success', () => {
    const expectedResponse = { foobar: ['something'] }
    const param = 'some=param'
    fetchMock.getOnce(`localhost:8000/test/?${param}`, {
      body: expectedResponse,
      headers: { 'content-type': 'application/json' },
    })
    const expectedActions = [
      actions.sampleFetchAction(),
      actions.sampleFetchActionDone(expectedResponse),
    ]
    const store = mockStore({ content: null })
    store.dispatch(actions.sampleFetchActionThunk(param)).then(() => {
      // return of async actions
      expect(store.getActions()).toEqual(expectedActions)
    })
  })

  it('dispatches the correct actions on error', () => {
    const param = 'some=param'
    const expectedError = { error: 'Failed' }
    fetchMock.getOnce(`localhost:8000/test/?${param}`, {
      status: 500,
      headers: { 'content-type': 'application/json' },
      throws: expectedError,
    })
    const expectedActions = [
      actions.sampleFetchAction(),
      actions.sampleFetchActionError(expectedError),
    ]
    const store = mockStore({ content: null })
    store.dispatch(actions.sampleFetchActionThunk(param)).then(() => {
      // return of async actions
      expect(store.getActions()).toEqual(expectedActions)
    })
  })
})
