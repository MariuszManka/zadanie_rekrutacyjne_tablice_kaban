import { Paper, Typography} from '@material-ui/core'
import { withStyles } from '@material-ui/core/styles'

export const StyledCardWrapper = withStyles((theme) => ({
   root: {
    padding: theme.spacing(2),
    margin: theme.spacing(1),
    cursor: 'pointer'
   },
}))(Paper)

export const StyledCardTitle = withStyles(() => ({
   root: {
      fontWeight: 500,
      letterSpacing: 1,
      fontSize: 17,
      fontFamily: 'Montserrat'
   },
}))(Typography)

export const StyledCardContent = withStyles(() => ({
   root: {
      marginTop: 5,
      marginLeft: 8,
      fontSize: 15,
      fontWeight: 300,
      fontFamily: 'Montserrat',
   },
}))(Typography)




