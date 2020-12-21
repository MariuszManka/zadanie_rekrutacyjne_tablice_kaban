import { Paper, Typography} from '@material-ui/core'
import { withStyles } from '@material-ui/core/styles'
import { Icon } from 'components/atoms'
import { grey } from '@material-ui/core/colors';

export const StyledCardWrapper = withStyles((theme) => ({
   root: {
    padding: theme.spacing(2),
    margin: theme.spacing(1),
    cursor: 'pointer',
    position: 'relative'
   },
}))(Paper)

export const StyledIcon = withStyles(() => ({
   root: {
      position: 'absolute',
      top: 3,
      right: 3,
      zIndex: 100,
      fontSize: 17,
      color: grey[700],
   },
}))(Icon)

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




