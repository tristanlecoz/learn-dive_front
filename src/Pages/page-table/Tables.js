import React from "react";
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import Formulaire from "./component-table/form";
import SimpleAccordion from "./component-table/accordeon";




const useStyles = makeStyles((theme) => ({
  title:{
    marginTop: "2%",
  },
    
}));
 

const Tables = () => {
  const classes=useStyles();
  return (
    <div id="tableau">
        <Container maxWidth="lg">
        <Typography edge="start" variant="h4" className={classes.title}>
          Visualisation des Tables
        </Typography>    
        <Formulaire />  
        <SimpleAccordion />
        
      </Container>
      </div>
  );
}

export default Tables;