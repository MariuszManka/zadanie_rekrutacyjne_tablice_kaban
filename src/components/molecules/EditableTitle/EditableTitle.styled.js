import { InputBase, Typography } from '@material-ui/core'
import { withStyles } from '@material-ui/core/styles'

export const StyledInput = withStyles((theme) => ({
   root: {
      margin: theme.spacing(1),
      marginBottom: theme.spacing(3),
      height: 30,
      padding: '6px 0 7px 0',
      fontSize: '1.8rem',
      fontWeight: 500,
   },
   focused: {
      background: theme.palette.list.titleFocusColor,
   }
}))(InputBase)

export const StyledText = withStyles((theme) => ({
   root: {
      margin: theme.spacing(1),
      marginBottom: theme.spacing(3),
      height: 30,
      padding: '6px 0 7px 0',
      fontSize: '1.8rem',
      fontWeight: 500,
      letterSpacing: '1px',
      textTransform: 'uppercase'
   },
}))(Typography)