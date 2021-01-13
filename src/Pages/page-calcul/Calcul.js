import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import './Calcul.css'
import Formulaire from "./component-calcul/form";
import Tableau from "./component-calcul/tableau";

const useStyles = makeStyles((theme) => ({
    title:{
      marginTop: "2%",
    },
      
  }));


const Calcul = () => {
 const classes = useStyles();
 return (
    <div id="calcul">
      <Container maxWidth="lg">
      <Typography edge="start" variant="h4" className={classes.title}>
         Calcul du profil de plongée
      </Typography>      
      <Formulaire />
      <Tableau />
    </Container>
    </div>
  );
}

export default Calcul;