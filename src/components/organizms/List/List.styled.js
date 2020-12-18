import {makeStyles} from '@material-ui/core/styles'

export const ListStyles = makeStyles((theme) => ({
   root: {
      width: 300, 
      backgroundColor: theme.palette.list.background,
      margin: theme.spacing(3)
   }
}))
