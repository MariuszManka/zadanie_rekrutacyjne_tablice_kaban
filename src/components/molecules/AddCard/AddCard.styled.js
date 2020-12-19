import {  Box, Paper, Button } from '@material-ui/core'
import { withStyles, fade } from '@material-ui/core/styles'

export const StyledAddCard = withStyles((theme) => ({
   root: {
      padding: theme.spacing(1),
      margin: theme.spacing(2, 0),
      backgroundColor: theme.palette.list.background,
      cursor: 'pointer',

      "&:hover": {
         backgroundColor: fade("#313336", 0.20)
      }
   },
}))(Paper)


export const StyledBox = withStyles((theme) => ({
   root: {
     marginTop:theme.spacing(4),
   },
}))(Box)


export const StyledButton = withStyles((theme) => ({
   root: {
      margin: theme.spacing(1),
   },
}))(Button)


