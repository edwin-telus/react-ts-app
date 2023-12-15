import { type UserTableColumn } from '../types'

export const userTableColumns: readonly UserTableColumn[] = [
  { id: 'id', label: 'ID', minWidth: 20 },
  { id: 'name', label: 'Name', minWidth: 120 },
  { id: 'favoriteFood', label: 'Favorite Food', minWidth: 120 },
  { id: 'favoriteMovie', label: 'Favorite Movie', minWidth: 120 },
  { id: 'status', label: 'Status', minWidth: 45 },
  { id: 'lastUpdateDate', label: 'Last Update Date', minWidth: 100 }
]

export default {
  userTableColumns
}
