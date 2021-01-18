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


 
  const Formulaire= (props) => {
      const classes = useStyles();
      const [tables, settables] = React.useState([]);

      React.useEffect(() => {
        fetch("http://127.0.0.1:8000/api/tables")
          .then(response => response.json())
          .then(result => settables(result))
          .catch(error => console.log('error', error));
      }, [])

      
     const handleChange = (e) =>
      {
        props.updateloadtable(e.target.value);
        
      }

      return(
        <div id="formulaire">
            <FormControl className={classes.formControl}>
                <InputLabel htmlFor="grouped-native-select">Choix de la table</InputLabel>
                <Select native defaultValue="" onChange={handleChange} id="grouped-native-select">
                <option aria-label="None" value=""></option>
                {tables.map((table) => ( 
                <option aria-label="None" value={table.id}>{table.nom}</option>
                ))}
                </Select>
            </FormControl>
        </div>
      );
  }

  export default Formulaire;