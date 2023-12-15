import type { USER_STATUSES } from './helpers/constants'

// User - types
export interface User {
  id: number
  name: string
  favoriteFood: string
  favoriteMovie: string
  status: UserStatus
  lastUpdateDate?: string
}

export type UserId = Pick<User, 'id'>
export type UserName = Pick<User, 'name'>
export type UserFavoriteFood = Pick<User, 'favoriteFood'>
export type UserFavoriteMovie = Pick<User, 'favoriteMovie'>
export type UserLastUpdateDate = Pick<User, 'lastUpdateDate'>

export type UserList = User[]

export type UserStatus = typeof USER_STATUSES[keyof typeof USER_STATUSES]

// Table - types
interface Column {
  label: string
  minWidth?: number
  align?: 'right'
  format?: (value: number) => string
}

interface UserTableColumn extends Column {
  id: keyof User
}
