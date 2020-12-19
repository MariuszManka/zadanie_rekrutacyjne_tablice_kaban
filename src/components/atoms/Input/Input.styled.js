import { withStyles, } from '@material-ui/core/styles'
import {Paper, InputBase} from '@material-ui/core'

export const StyledInputContainer = withStyles((theme) => ({
   root: {
      margin: theme.spacing(1)
   },
}))(Paper)

export const StyledInputBase = withStyles((theme) => ({
   root: {
      padding: theme.spacing(1),
   },
}))(InputBase)