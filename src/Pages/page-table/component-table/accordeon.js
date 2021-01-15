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
import { blue } from '@material-ui/core/colors';
import Paper from '@material-ui/core/Paper';
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

export default function SimpleAccordion() {
  const classes = useStyles();

  
  /*const [paliers, setDatas] = React.useState([])

  React.useEffect(() => {
    fetch("http://localhost:3001/comments")
      .then(response => response.json())
      .then(result => setDatas(result))
      .catch(error => console.log('error', error));
  }, [])
    
  console.log(paliers);*/
  return (
    <div className={classes.root}>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography className={classes.heading}> 10 mètres </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            <Grid  className="grid" container spacing={3}>
              <Grid item xs={3}>
              <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography className={classes.heading}>Accordion 1</Typography>
        </AccordionSummary>
        <AccordionDetails>
        <div className={classes.liste}>
                <List >
                    <ListItem >
                    <Typography variant="subtitle1" gutterBottom>
                        Palier 3 : 10 minutes
                    </Typography>
                    
                    </ListItem>
                    <Divider />
                    <ListItem >
                    <Typography variant="subtitle1" gutterBottom>
                        Palier 6 : 15 minutes
                    </Typography>
                    
                    </ListItem>
                    <Divider />
                    <ListItem >
                    <Typography variant="subtitle1" gutterBottom>
                        Palier 9 : 20 minutes
                    </Typography>
                    
                    </ListItem>
                    <Divider />
                    <ListItem >
                    <Typography variant="subtitle1" gutterBottom>
                        Palier 15 : 30 minutes
                    </Typography>
                    
                    </ListItem>
                    <Divider />
                </List>
                
            </div>
        </AccordionDetails>
      </Accordion>
              </Grid>
              
              
              
              <Grid item xs={3}>
              <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography className={classes.heading}>Accordion 1</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex,
            sit amet blandit leo lobortis eget.
          </Typography>
        </AccordionDetails>
      </Accordion>
              </Grid>
            </Grid>
          </Typography>
        </AccordionDetails>
      </Accordion>
     
      
    </div>
  );
}