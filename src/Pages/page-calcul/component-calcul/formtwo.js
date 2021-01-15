import React, { Component } from 'react';
import Dialog from '@material-ui/core/Dialog';
import AppBar from '@material-ui/core/AppBar';
import { ThemeProvider as MuiThemeProvider } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

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

export class FormUserDetails extends Component {
  

  render() {
    const { values, handleChange } = this.props;
 
    return (
      <MuiThemeProvider>
        <>
          
            <FormControl >
                <InputLabel htmlFor="grouped-native-select">Taille de la bouteille</InputLabel>
                <Select native defaultValue="" id="grouped-native-select"
                placeholder="taille de la bouteille"
                label="taille_bouteille"
                onChange={handleChange('taille')}
                margin="normal"
                fullWidth
                >
                <option aria-label="None" value=""></option>
                <option aria-label="None" value="9">9</option>
                <option aria-label="None" value="12">12</option>
                <option aria-label="None" value="15">15</option>
                <option aria-label="None" value="18">18</option>
                
                </Select>
            </FormControl>
            <FormControl >
            
                <TextField id="standard-basic"  label="Pression de la bouteille (en bars)" defaultValue="200"
                placeholder="Pression de la bouteille"
                label="pression_bouteille"
                onChange={handleChange('pression')}
                margin="normal"
                fullWidth></TextField>
            </FormControl>
            <FormControl >
            
                <Typography id="discrete-slider" gutterBottom>
                    Profondeur
                </Typography>
                <Slider
                 
                 placeholder="Profondeur"
                 label="Profondeur_bouteille"
                 onChange={handleChange('profondeur')}
                 margin="normal"
                 fullWidth
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
            <FormControl>
            
                <TextField  with={500} id="standard-basic" label="Durée de la plongée avant remontée (mins)" placeholder="Durée de la plonger avant retomber"
                onChange={handleChange('duree')}
                margin="normal"
                fullWidth></TextField>
            </FormControl>
            <FormControl >
                <InputLabel htmlFor="grouped-native-select">Choix de la table</InputLabel>
                <Select native defaultValue="" id="grouped-native-select" 
                placeholder="table"
                label="table"
                onChange={handleChange('table')}
                margin="normal"
                fullWidth>
                <option aria-label="None" value=""></option>
                <option aria-label="None" value="0">Buhlman</option>
                <option aria-label="None" value="1">MN90</option>
                
                
                </Select>
            </FormControl>
          
        </>
      </MuiThemeProvider>
    );
  }
}

export default FormUserDetails;