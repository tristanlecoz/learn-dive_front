import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';

import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";
import Calcul from './page-calcul/Calcul';
import Tables from './page-table/Tables';
import './Header.css'

const useStyles = makeStyles((theme) => ({ 
    root: {
        flexGrow: 1,
    },
    menuButton: {
        marginRight: theme.spacing(2),
    },
    title: {
        flexGrow: 1,
    },
}));



const Header = () => {
    const classes = useStyles();

    return (
        <Router>
        <div className={classes.root}>
        <AppBar position="static">
            <Toolbar>
           
            <Typography edge="start" variant="h6" className={classes.title}>
                LEARN-DIVE
            </Typography>
            <Link className='lien' to="/calcul"> <p>Calcul de la plongée </p></Link>
            <Link className='lien' to="/tables"> <p>Visualisation des tables</p></Link>
            </Toolbar>
        </AppBar>

        <Switch>
          <Route path="/calcul">
            <Calcul />
          </Route>
          <Route path="/tables">
            <Tables />
          </Route>
        </Switch>
        </div>

        </Router>
    );
} 


export default Header;