import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import TextField from '@material-ui/core/TextField';
import Slider from '@material-ui/core/Slider';
import Typography from '@material-ui/core/Typography';


const useStyles = makeStyles((theme) => ({
    formControl: {
      margin: theme.spacing(1),
      minWidth: 120,
      width:350,
    },
  }));


  function valuetext(value) {
    return `${value}°C`;
}

const marks = [
    {
      value: 0,
      label: '0',
    },
    {
        value: 10,
        label: '10',
      },
    {
      value: 20,
      label: '20',
    },
    {
        value: 30,
        label: '30',
      },
    {
      value: 40,
      label: '40',
    },
    {
        value: 50,
        label: '50',
      },
    {
      value: 60,
      label: '60',
    },
  ];

  const Formulaire = () => {
      const classes = useStyles();
      return(
        <div id="formulaire">
            <FormControl className={classes.formControl}>
                <InputLabel htmlFor="grouped-native-select">Taille de la bouteille</InputLabel>
                <Select native defaultValue="" id="grouped-native-select">
                <option aria-label="None" value=""></option>
                <option aria-label="None" value="9">9</option>
                <option aria-label="None" value="12">12</option>
                <option aria-label="None" value="15">15</option>
                <option aria-label="None" value="18">18</option>
                
                </Select>
            </FormControl>
            <FormControl className={classes.formControl}>
            
                <TextField id="standard-basic" label="Pression de la bouteille (en bars)" defaultValue="200"/>
            </FormControl>
            <FormControl className={classes.formControl}>
            
                <Typography id="discrete-slider" gutterBottom>
                    Temperature
                </Typography>
                <Slider
                    defaultValue={0}
                    getAriaValueText={valuetext}
                    aria-labelledby="discrete-slider"
                    valueLabelDi splay="auto"
                    step={1}
                    marks
                    min={0}
                    max={63}
                    marks={marks}
                />
            </FormControl>
            <FormControl className={classes.formControl}>
            
                <TextField with={500} id="standard-basic" label="Durée de la plongée avant remontée (mins)"/> 
            </FormControl>
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