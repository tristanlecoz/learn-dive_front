import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';




const useStyles = makeStyles((theme) => ({
   
    root: {
      flexGrow: 1,
      backgroundColor: theme.palette.background.paper,
      marginTop:"4%",
      width:'50%',
      marginLeft:'25%',
    },
  }));


  function TabPanel(props) {
    const { children, value, index, ...other } = props;
  
    return (
      <div
        role="tabpanel"
        hidden={value !== index}
        id={`simple-tabpanel-${index}`}
        aria-labelledby={`simple-tab-${index}`}
        {...other}
      >
        {value === index && (
          <Box p={3}>
            <Typography>{children}</Typography>
          </Box>
        )}
      </div>
    );
  }
  
  TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.any.isRequired,
    value: PropTypes.any.isRequired,
  };
  
  function a11yProps(index) {
    return {
      id: `simple-tab-${index}`,
      'aria-controls': `simple-tabpanel-${index}`,
    };
  }

  

  const Tableau = (props)  =>  {
      const classes=useStyles();
      
      const [value, setValue] = React.useState(0);
    
    
      const handleChange = (event, newValue) => {
        setValue(newValue);
      };

      const [resultForm,setresult]=React.useState([])
      React.useEffect(()=>{
        console.log(props.updateurl);
        fetch(props.updateurl)
        .then(response => response.json())
        .then(result => setresult(result))
        .catch(error => console.log('error', error));
        console.log(resultForm);
      
      },[props.updateurl]);
      
      return(
        <div className={classes.root}>
        <AppBar position="static">
          <Tabs value={value} onChange={handleChange} aria-label="simple tabs example">
            <Tab label="Paliers" {...a11yProps(0)} />
            <Tab label="Temps" {...a11yProps(1)} />
            <Tab label="Oxygénation" {...a11yProps(2)} />
          </Tabs>
        </AppBar>
        <TabPanel value={value} index={0}>
            <Typography variant="h6" gutterBottom>
               Palier 3 : {resultForm.palier3}
            </Typography>
            <Typography variant="h6" gutterBottom>
               Palier 6 : {resultForm.palier6}
            </Typography>
            <Typography variant="h6" gutterBottom>
               Palier 9 : {resultForm.palier9}
            </Typography>
            <Typography variant="h6" gutterBottom>
               Palier 12 : {resultForm.palier12}
            </Typography>
            <Typography variant="h6" gutterBottom>
               Palier 15 : {resultForm.palier15}
            </Typography>
        </TabPanel>
        <TabPanel value={value} index={1}>
            <Typography variant="h6" gutterBottom>
               Temps total de remontée : {resultForm.tempsTotalDeRemontee}
               <br></br>
               Temps total de plongée : {resultForm.tempsTotalDePlongee}
            </Typography>
        </TabPanel>
        <TabPanel value={value} index={2}>
            <Typography variant="h6" gutterBottom>
                  Volume restant(en litre) : {resultForm.volumeRestant}
                  <br></br>
                  Pression restante (en bar) : {resultForm.pressionRestante}
            </Typography>
        </TabPanel>
      </div>
      );

  }

  export default Tableau;