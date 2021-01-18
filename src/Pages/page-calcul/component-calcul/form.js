import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';



const useStyles = makeStyles((theme) => ({
    formControl: {
      margin: theme.spacing(1),
      minWidth: 120,
      width:350,
    },
  }));


 

  const Formulaire = () => {
      const classes = useStyles();
      const [data,setData]=React.useState();
      const [resultForm,setresult]=React.useState();
        
      

      const handleChange = (e) =>
      {
        setData({
          ...data,
          [e.target.name]:e.target.value.trim()
        }
        )
      }
      React.useEffect(()=>{
        //let url ="http://127.0.0.1:8000/api/calcul?"+data.table+"&profondeur="+data.profondeur+"&dureePlongee="+data.duree;
        //console.log(url);
      
      },[data]);


      const fetchtogetdata =()=>{
        let url ="http://127.0.0.1:8000/api/calcul?table="+data.table+"&profondeur="+data.profondeur+"&dureePlongee="+data.duree;
        console.log(url);
        fetch(url)
        .then(response => response.json())
        .then(result => setresult(result))
        .catch(error => console.log('error', error));
        console.log(resultForm);
      }

      return(
        <div id="formulaire">
            <FormControl className={classes.formControl}>
                <InputLabel htmlFor="grouped-native-select">Taille de la bouteille</InputLabel>
                <Select native onChange={handleChange} name="taille"  id="grouped-native-select">
                <option aria-label="None" value=""></option>
                <option aria-label="None" value="9">9</option>
                <option aria-label="None" value="12">12</option>
                <option aria-label="None" value="15">15</option>
                <option aria-label="None" value="18">18</option>
                
                </Select>
            </FormControl>
            <FormControl className={classes.formControl}>
            
                <TextField id="standard-basic" name="pression"onChange={handleChange} label="Pression de la bouteille (en bars)" defaultValue="200"/>
            </FormControl>
            <FormControl className={classes.formControl}>
            
               <TextField id="standard-basic" name="profondeur"onChange={handleChange} label="Profondeur"/>
            </FormControl>
            <FormControl className={classes.formControl}>
            
                <TextField onChange={handleChange} name="duree" with={500} id="standard-basic" label="Durée de la plongée avant remontée (mins)"/> 
            </FormControl>
            <FormControl className={classes.formControl}>
                <InputLabel htmlFor="grouped-native-select">Choix de la table</InputLabel>
                <Select native defaultValue="" id="grouped-native-select" onChange={handleChange} name="table">
                <option aria-label="None" value=""></option>
                <option aria-label="None" value="0">Buhlman</option>
                <option aria-label="None" value="1">MN90</option>
                
                
                </Select>
            </FormControl>
            <br></br>
            <Button variant="contained" color="primary" onClick={fetchtogetdata}>
               Calculer
            </Button>
        </div>
      );
  }

  export default Formulaire;
