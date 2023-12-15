import { useState } from 'react'
import {
  Box, IconButton, Paper, Table, TableBody, TableCell,
  TableContainer, TableHead, TablePagination,
  TableRow, Typography
} from '@mui/material'

import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward'
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward'

import { type User } from '../types'
import { userTableColumns } from '../helpers/utilFn'
import { USER_STATUSES, SORT } from '../helpers/constants'

// [START] Component to show whether a user is active or inactive
interface StatusBulletProps {
  color: string
}

const StatusBullet: React.FC<StatusBulletProps> = ({
  color
}) => {
  return (
    <Box
    mr={1}
      sx={{
        borderRadius: '50%',
        display: 'inline-block',
        height: '16px',
        width: '16px',
        bgcolor: color
      }}
    />
  )
}
// [END]

interface Props {
  handleSortChange: (sort: string, sortBy: string) => void
  users: User[]
  sort: string
  sortBy: string
}

const UserListTable: React.FC<Props> = ({
  handleSortChange,
  users,
  sort,
  sortBy
}) => {
  const [page, setPage] = useState(0)
  const [rowsPerPage, setRowsPerPage] = useState(25)

  const handleChangePage = (_event: unknown, newPage: number): void => {
    setPage(newPage)
  }

  const handleChangeRowsPerPage = (event: React.ChangeEvent<HTMLInputElement>): void => {
    setRowsPerPage(+event.target.value)
    setPage(0)
  }

  /**
   * Takes care of each data cell value in the row and render it accordingly
   * @param row
   * @param column
   * @returns
   */
  const printRowCell = (row: User, column: string): JSX.Element => {
    const value = row[column as keyof User]
    if (column === 'status') {
      return (
        <Box key={column} display="flex" alignItems='center'>
          <StatusBullet
            color={value === USER_STATUSES.ACTIVE ? '#93c47d' : '#ff7676'}
          />
          <span>{value}</span>
        </Box>
      )
    }
    return (
      <Box key={column}>
        {value}
      </Box>
    )
  }

  const showSortIcon = (column: string): JSX.Element => {
    let icon
    if (sort === SORT.ASC && sortBy === column) {
      icon = (
      <IconButton sx={{ padding: 0 }} aria-label="sort-desc" onClick={() => { handleSortChange(column, SORT.ASC) }}>
        <ArrowDownwardIcon fontSize="small" sx={{ color: '#fff' }} />
      </IconButton>)
    } else {
      icon = (
      <IconButton sx={{ padding: 0 }} aria-label="sort-desc" onClick={() => { handleSortChange(column, SORT.DESC) }}>
        <ArrowUpwardIcon fontSize="small" sx={{ color: '#fff' }} />
      </IconButton>)
    }

    if (sort === SORT.DESC && sortBy === column) {
      icon = (
      <IconButton sx={{ padding: 0 }} aria-label="sort-desc" onClick={() => { handleSortChange(column, SORT.DESC) }}>
        <ArrowUpwardIcon fontSize="small" sx={{ color: '#fff' }} />
      </IconButton>)
    } else {
      icon = (
      <IconButton sx={{ padding: 0 }} aria-label="sort-desc" onClick={() => { handleSortChange(column, SORT.ASC) }}>
        <ArrowDownwardIcon fontSize="small" sx={{ color: '#fff' }} />
      </IconButton>)
    }

    return icon
  }

  return (
    <>
      <Box mt="2rem" ml="2rem">
        <Typography variant="h4">User List</Typography>
      </Box>
      <Box m="0.5rem 2rem 3rem">
        <Paper sx={{ width: '100%', overflow: 'hidden' }}>
        <TableContainer sx={{ maxHeight: 'calc(100vh - 250px)' }}>
          <Table stickyHeader aria-label="sticky table">
            <TableHead>
            <TableRow>
                {userTableColumns.map((column) => (
                  <TableCell
                    key={column.id}
                    align={column.align}
                    style={{ minWidth: column.minWidth }}
                  >
                    {column.label}
                    {showSortIcon(column.id)}
                  </TableCell>
                ))}
              </TableRow>
            </TableHead>
            <TableBody>
            {users.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((user) => {
              return (
                  <TableRow hover role="checkbox" tabIndex={-1} key={user.id}>
                    {userTableColumns.map((column) => {
                      return (
                        <TableCell key={column.id} align={column.align}>
                          {printRowCell(user, column.id)}
                        </TableCell>
                      )
                    })}
                  </TableRow>
              )
            })}
            </TableBody>
          </Table>
        </TableContainer>
        <TablePagination
          rowsPerPageOptions={[25, 100, 200, 300, 500]}
          component="div"
          count={users.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onPageChange={handleChangePage}
          onRowsPerPageChange={handleChangeRowsPerPage}
        />
      </Paper>
      </Box>
    </>
  )
}

export default UserListTable
