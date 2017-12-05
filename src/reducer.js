// @flow

import type { DataSetState, SetDataSetAction, RemoveDataSetAction } from 'redux-dataset'

export const SetDataSetActionType = '@REDUX_DATASET/SET'
export const RemoveDataSetActionType = '@REDUX_DATASET/REMOVE'
type Action = SetDataSetAction<*> | RemoveDataSetAction

const reducers = {};

reducers[SetDataSetActionType] = (
  state: DataSetState<*>,
  action: SetDataSetAction<*>
): DataSetState<*> => {
  return {
    ...state,
    [action.payload.id]: { ...action.payload.data }
  }
}

reducers[RemoveDataSetActionType] = (
  state: DataSetState<*>,
  action: RemoveDataSetAction
): DataSetState<*> => {
  return Object.entries(state)
    .filter(([key]) => ![action.payload.id].includes(key))
    .reduce((obj, [key, val]) => Object.assign(obj, { [key]: val }), {})
}

export default (state: DataSetState<*> = {}, action: Action): DataSetState<*> => {
  const reducer = reducers[action.type]

  return reducer ? reducer(state, (action: any)) : state
}
