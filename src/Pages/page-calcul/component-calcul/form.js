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


 
                  
  const Formulaire = (props) => {
      const classes = useStyles();
      const [data,setData]=React.useState();
      const [tables, settables] = React.useState([]);

      React.useEffect(() => {
        fetch("http://127.0.0.1:8000/api/tables")
          .then(response => response.json())
          .then(result => settables(result))
          .catch(error => console.log('error', error));
      }, [])
     
      const handleChange = (e) =>
      {
        setData({
          ...data,
          [e.target.name]:e.target.value.trim()
        }
        )
       
      }

      

      const fetchtogetdata =()=>{
        props.updateurl("http://127.0.0.1:8000/api/calcul?table="+data.table+"&profondeur="+data.profondeur+"&dureePlongee="+data.duree+"&volumeBouteille="+data.taille+"&pressionRemplissage="+data.pression); 
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
            
                <TextField id="standard-basic" name="pression"onChange={handleChange} label="Pression de la bouteille (en bars)"/>
            </FormControl>
            <FormControl className={classes.formControl}>
            
               <TextField id="standard-basic" name="profondeur"onChange={handleChange} label="Profondeur"/>
            </FormControl>
            <FormControl className={classes.formControl}>
            
                <TextField onChange={handleChange} name="duree" with={500} id="standard-basic" label="Durée de la plongée avant remontée (mins)"/> 
            </FormControl>
            <FormControl className={classes.formControl}>
                <InputLabel htmlFor="grouped-native-select">Choix de la table</InputLabel>
                <Select native defaultValue="" name="table" onChange={handleChange} id="grouped-native-select">
                <option aria-label="None" value=""></option>
                {tables.map((table) => ( 
                <option aria-label="None" value={table.id}>{table.nom}</option>
                ))}
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
