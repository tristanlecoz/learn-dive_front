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

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    fontWeight: theme.typography.fontWeightRegular,
  },
  liste: {
    width: '100%',
    maxWidth: '100%',
    backgroundColor: theme.palette.background.paper,
  },
}));

export default function SimpleAccordion() {
  const classes = useStyles();

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
                </List>
                
            </div>
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography className={classes.heading}> 20 mètres </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
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
          </Typography>
        </AccordionDetails>
      </Accordion>
      
    </div>
  );
}