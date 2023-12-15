import {
  Button, Dialog, DialogActions, DialogContent,
  DialogContentText, DialogTitle, Typography, Box
} from '@mui/material'

interface Props {
  opened: boolean
  onClose: () => void
}

const AboutModal: React.FC<Props> = ({ opened = false, onClose }) => {
  const handleClose = (): void => {
    onClose()
  }
  return (
    <>
    <Dialog
      open={opened}
      onClose={handleClose}
      aria-labelledby="alert-dialog-title"
      aria-describedby="alert-dialog-description"
    >
      <DialogTitle sx={{ color: '#0F121F' }} id="alert-dialog-title">About</DialogTitle>
      <DialogContent>
        <DialogContentText component="h2" id="alert-dialog-description">
          <Typography><strong>Author:</strong> Edwin de Jesús Antonio Mendoza Granadino</Typography>
          <Typography><strong>Date:</strong> December 15th, 2023</Typography>
          <Box mt="0.5rem">
            <Typography><strong>Other Technologies:</strong></Typography>
            <Box>
            <ul>
                <li><Typography><strong>UI Tools: </strong>Material UI</Typography></li>
            </ul>
            </Box>
          </Box>
          <Box mt="2rem">
            <Typography><strong>Final Notes:</strong> In order to sort data either ascending or descending click on the arrow besides each cell in the table&apos;s header</Typography>
          </Box>
        </DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose} autoFocus>
          Close
        </Button>
      </DialogActions>
    </Dialog>
  </>
  )
}

export default AboutModal
