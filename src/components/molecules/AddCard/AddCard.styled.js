import {  Box, Paper, InputBase, Button } from '@material-ui/core'
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
     marginTop:theme.spacing(3),
   },
}))(Box)


export const StyledInputContainer = withStyles((theme) => ({
   root: {
      margin: theme.spacing(1),
      paddingBottom: theme.spacing(5),
   },
}))(Paper)

export const StyledInputBase = withStyles((theme) => ({
   root: {
      padding: theme.spacing(1),
   },
}))(InputBase)

export const StyledButton = withStyles((theme) => ({
   root: {
      margin: theme.spacing(1),
   },
}))(Button)


