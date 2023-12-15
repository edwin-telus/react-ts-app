import { useEffect, useReducer } from 'react'

import { orderBy } from 'lodash'

import { type UserList, type User } from '../types'
import { SORT } from '../helpers/constants'
import data from '../services/data.json'

const initialState = {
  handleSortChange: () => {},
  users: [],
  sort: SORT.ASC,
  sortBy: 'id'
}

type Action =
  | { type: 'INIT_USERS', payload: { users: UserList } }
  | { type: 'SORT_CHANGE', payload: { sort: string, sortBy: string, users: UserList } }

interface State {
  handleSortChange: (sort: string, sortBy: string) => void
  users: UserList
  sort: string
  sortBy: string
}

const reducer = (state: State, action: Action): State => {
  if (action.type === 'INIT_USERS') {
    const { users } = action.payload
    return {
      ...state, users
    }
  }

  if (action.type === 'SORT_CHANGE') {
    const { sort, sortBy, users } = action.payload
    return {
      ...state, sort, sortBy, users
    }
  }
  return state
}

export const useUserList = (): {
  handleSortChange: (sort: string, sortBy: string) => void
  users: UserList
  sort: string
  sortBy: string
} => {
  const [{ users, sort, sortBy }, dispatch] = useReducer(reducer, initialState)

  const handleSortChange = (sortBy: string, sort: string): void => {
    const sortText = sort === SORT.ASC ? 'desc' : 'asc'
    const sortedUsers = orderBy(users, [sortBy], [sortText])

    dispatch({ type: 'SORT_CHANGE', payload: { sort: sortText, sortBy, users: sortedUsers } })
  }

  useEffect(() => {
    const fetchUsers = (): void => {
      const users: User[] = data as User[]
      dispatch({ type: 'INIT_USERS', payload: { users } })
    }
    fetchUsers()
  }, [])

  return {
    sortBy,
    sort,
    users,
    handleSortChange
  }
}
