import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import Divider from '@material-ui/core/Divider';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles((theme) => ({
  
  heading: {
    fontSize: theme.typography.pxToRem(15),
    fontWeight: theme.typography.fontWeightRegular,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
  grid: {
    width:'100%',
  }
  
}));

const SimpleAccordion = (props) => {
  const classes = useStyles();

  
  const [paliers, setDatas] = React.useState([])

  React.useEffect(() => {
    console.log(props.idtable);
    fetch("http://127.0.0.1:8000/api/table/"+props.idtable)
      .then(response => response.json())
      .then(result => setDatas(result))
      .catch(error => console.log('error', error));
  }, [props.idtable])
    
  console.log(paliers);
  return (
    <div className={classes.root}>
       {paliers.map((palier) => ( 
          <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <Typography className={classes.heading}> {palier.profondeur} mètres </Typography>
          </AccordionSummary>
          <AccordionDetails>
            
              <Grid  className="grid" container spacing={3}>
                {palier.temps.map((temps_paliers)=> (
                  <Grid item xs={3}>
                    <Accordion>
                      <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel1a-content"
                        id="panel1a-header"
                      >
                        <Typography className={classes.heading}>{temps_paliers.temps} minutes</Typography>
                      </AccordionSummary>
                      <AccordionDetails>
                      <div className={classes.liste}>
                              <List >
                                  <ListItem >
                                  <Typography variant="subtitle1" gutterBottom>
                                      Palier 3 : {temps_paliers.palier3} minutes
                                  </Typography>
                                  
                                  </ListItem>
                                  <Divider />
                                  <ListItem >
                                  <Typography variant="subtitle1" gutterBottom>
                                     Palier 6 : {temps_paliers.palier6} minutes
                                  </Typography>
                                  
                                  </ListItem>
                                  <Divider />
                                  <ListItem >
                                  <Typography variant="subtitle1" gutterBottom>
                                    Palier 9 : {temps_paliers.palier9} minutes
                                  </Typography>
                                  
                                  </ListItem>
                                  <Divider />
                                  <ListItem >
                                  <Typography variant="subtitle1" gutterBottom>
                                     Palier 12 : {temps_paliers.palier12} minutes
                                  </Typography>
                                  
                                  
                                  </ListItem>
                                  <Divider />
                                  <ListItem >
                                  <Typography variant="subtitle1" gutterBottom>
                                     Palier 15 : {temps_paliers.palier15} minutes
                                  </Typography>
                                  
                                  
                                  </ListItem>
                                  <Divider />
                              </List>
                              
                          </div>
                      </AccordionDetails>
                    </Accordion>
                  </Grid>
                  
                ))}
                </Grid>
              
        </AccordionDetails>
      </Accordion>
        ))}
   
      
     
      
    </div>
  );
}
export default SimpleAccordion;