
import { getDataSelector } from '..'

describe('selectors', () => {

  it('#getSubscriptionIdSelector', () => {
    const dataSet = { data: null, page: null, pageCount: null, load: false }
    const state = {
      dataSet: {
        test: { ...dataSet }
      }
    }
    expect(getDataSelector('test')(state)).toEqual({ ...dataSet })
  })

})
