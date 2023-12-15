import { type Components } from '@mui/material'

export default {
  MuiSvgIcon: {
    defaultProps: {
      // color: 'secondary'
    }
  },
  MuiTableCell: {
    styleOverrides: {
      head: {
        fontWeight: '900',
        backgroundColor: '#293477',
        color: '#fff9f9'
      },
      root: {
        color: '#0F121F',
        fontWeight: '500'
      }
    }
  }
} satisfies Components
