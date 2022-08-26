import { v4 as uuid } from 'uuid'

export const transformWithUuid = (list = []) =>
  list.map((item) => ({
    ...item,
    uuid: uuid()
  }))
