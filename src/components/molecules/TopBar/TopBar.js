import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import { Icon } from 'components/atoms'
import {TopBarStyles} from './TopBarStyled'


export default function TopBar() {
  const classes = TopBarStyles();

  return (
    <>
      <AppBar position="static" color="secondary" >
        <Toolbar>
          <Typography className={classes.title} variant="subtitle1" noWrap>
            Kaban List
          </Typography>
          <IconButton
            edge="start"
            className={classes.menuButton}
            color="inherit"
            aria-label="open drawer"
          >
            <Icon name="menu"/>
          </IconButton>
        </Toolbar>
      </AppBar>
    </>
  );
}