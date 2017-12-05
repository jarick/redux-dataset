// @flow

import type { GlobalDataSetState, DataSet } from 'redux-dataset'

export const getDataSelector = <P: Object>(id: string) => {
  return (state: GlobalDataSetState<P>): DataSet<P> => {
    return state.dataSet[id]
  }
}
