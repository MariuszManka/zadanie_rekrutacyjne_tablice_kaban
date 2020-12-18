import { Grid, } from '@material-ui/core'
import { withStyles } from '@material-ui/core/styles'

export const StyledMainView = withStyles(({ palette }) => ({
   root: {
      backgroundColor: palette.primary.main,
      height: '100vh'
   },
}))(Grid)