// @flow

import type { SetDataSetAction, RemoveDataSetAction } from 'redux-dataset'
import { SetDataSetActionType, RemoveDataSetActionType  } from './reducer'

export const setDataSetAction = <P: Object>(
  id: string,
  data: P[] | null = null,
  load: boolean = true,
  page: number | null = null,
  pagesCount: number | null = null,
  sort: Object = {},
  filter: Object = {},
): SetDataSetAction<P> => {
  return {
    type: SetDataSetActionType,
    payload: { id, data: { data, load, page, pagesCount, sort, filter } }
  }
}

export const removeDataSetAction = (id: string): RemoveDataSetAction => {
  return { type: RemoveDataSetActionType, payload: { id } }
}
