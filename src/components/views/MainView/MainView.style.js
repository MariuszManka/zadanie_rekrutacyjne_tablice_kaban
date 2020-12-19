import { Grid, } from '@material-ui/core'
import { withStyles } from '@material-ui/core/styles'

export const StyledMainView = withStyles(({ palette }) => ({
   root: {
      backgroundColor: palette.primary.main,
      minHeight: '100vh'
   },
}))(Grid)