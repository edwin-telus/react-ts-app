import { ThemeProvider } from '@mui/material/styles'

import TopBar from './components/TopBar'
import UserListTable from './components/UserListTable'
import theme from './theme'

import { useUserList } from './hooks/useUserList'

const App: React.FC = () => {
  const { handleSortChange, sort, sortBy, users } = useUserList()
  // TODO: add reducer here
  return (
    <ThemeProvider theme={theme}>
       <TopBar/>
       <UserListTable
          handleSortChange={ handleSortChange }
          sort={ sort }
          sortBy={ sortBy }
          users={ users }
       />
    </ThemeProvider>
  )
}

export default App
