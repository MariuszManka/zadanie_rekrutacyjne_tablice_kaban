import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
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
        </Toolbar>
      </AppBar>
    </>
  );
}