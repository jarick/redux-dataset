import { reducer, SetDataSetActionType, RemoveDataSetActionType } from '../'

describe('reducer', () => {

  it('#setDataSet', () => {
    const payload = { id: 'test', data: [{ item: 'item' }], page: 1, pagesCount: 2, load: true }
    const action = {
      type: SetDataSetActionType,
      payload: { ...payload }
    }
    expect(reducer(undefined, action)).toEqual({
      test: { ...payload.data }
    })
  })

  it('#removeDatSet', () => {
    const action: RemoveSubscriptionAction = {
      type: RemoveDataSetActionType,
      payload: { id: 'test' }
    }
    const dataSet = { data: null, page: null, pagesCount: null, load: false }
    expect(reducer({ test: dataSet }, action)).toEqual({})
  })

})
