// import { type User } from '../types'
// import type CacheService from './CacheService'
// import { type CacheService } from './CacheService'

// const API_URL = 'https://api.jsonbin.io/v3/b/657bf6f1266cfc3fde69145c'

// TODO: Implement all the following services with axios instead of fetch

// export default class UserListService {
//   constructor (db: class<CacheService>) {

//   }
// }

// export const fetchUsers = async (): Promise<User[]> => {
//   const res = await fetch(API_URL)
//   if (!res.ok) {
//     console.error('Error fetching users')
//     return []
//   }

//   const { record: users } = await res.json() as { record: User[] }
//   return users
// }

// export default {
//   fetchUsers
// }
