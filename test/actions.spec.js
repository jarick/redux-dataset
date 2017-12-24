import configureMockStore from 'redux-mock-store'
import thunk from 'redux-thunk'
import {
  setDataSetAction, removeDataSetAction, SetDataSetActionType, RemoveDataSetActionType
} from '../'

const middlewares = [thunk]
const mockStore = configureMockStore(middlewares)

describe('actions', () => {

  it('#setDataSetAction short', () => {
    const data = [{ item: 'item' }]
    const id = 'test'
    const store = mockStore()
    const expectedActions = [
      {
        type: SetDataSetActionType,
        payload: {
          id,
          data: { data, page: null, pagesCount: null, load: true, filter: {}, sort: {}, search: {} }
        },
      },
    ]
    store.dispatch(setDataSetAction(id, data))
    expect(store.getActions()).toEqual(expectedActions)
  })

  it('#setDataSetAction full', () => {
    const data = [{ item: 'item' }]
    const id = 'test'
    const store = mockStore()
    const expectedActions = [
      {
        type: SetDataSetActionType,
        payload: {
          id,
          data: { data, page: 1, pagesCount: 2, load: true, filter: {}, sort: {}, search: {} }
        },
      },
    ]
    store.dispatch(setDataSetAction(id, data, true, 1, 2))
    expect(store.getActions()).toEqual(expectedActions)
  })

  it('#removeDataSetAction', () => {
    const id = 'test'
    const store = mockStore()
    const expectedActions = [
      {
        type: RemoveDataSetActionType,
        payload: { id },
      },
    ]
    store.dispatch(removeDataSetAction(id))
    expect(store.getActions()).toEqual(expectedActions)
  })

})
