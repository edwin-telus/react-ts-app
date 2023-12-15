/**
 * CacheService.ts
 * The following implementation is due we are using JSONBIN.io as a free service which has some limits for the request up to 10k.
 * With the following implementation we cache the response by using DexieJS.
 */
import Dexie, { type Table } from 'dexie'

import { type User } from '../types'

interface Cache {
  users: Table<User>
}

export class CacheService extends Dexie implements Cache {
  users!: Table<User>

  constructor () {
    super('users')
    this.version(1).stores({
      users: '[id+name+status], favoriteFood, favoriteMovie, lastUpdateDate'
    })
  }
}

export default new CacheService()
