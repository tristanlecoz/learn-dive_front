import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';


const useStyles = makeStyles((theme) => ({
    formControl: {
      margin: theme.spacing(1),
      minWidth: 120,
      width:350,
    },
  }));


 
  const Formulaire = () => {
      const classes = useStyles();
      return(
        <div id="formulaire">
            <FormControl className={classes.formControl}>
                <InputLabel htmlFor="grouped-native-select">Choix de la table</InputLabel>
                <Select native defaultValue="" id="grouped-native-select">
                <option aria-label="None" value=""></option>
                <option aria-label="None" value="0">Buhlman</option>
                <option aria-label="None" value="1">MN90</option>
                </Select>
            </FormControl>
        </div>
      );
  }

  export default Formulaire;