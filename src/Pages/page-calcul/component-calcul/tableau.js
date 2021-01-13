import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';




const useStyles = makeStyles((theme) => ({
    table: {
      minWidth: 650,
    },
    tableau: {
        marginTop:"4%",
    }
  }));


  function createData(name, calories, fat, carbs, protein) {
    return { name, calories, fat, carbs, protein };
  }
  
  const rows = [
    createData(5, 159, 6.0, 24),
    createData(10, 237, 9.0, 37),
    createData(20, 262, 16.0, 24),
    createData(25, 305, 3.7, 67),
    createData(30, 356, 16.0, 49),
  ];

  const Tableau = ()  =>  {
      const classes=useStyles();
      return(
        <TableContainer component={Paper} className={classes.tableau}>
        <Table className={classes.table} size="small" aria-label="a dense table">
          <TableHead>
            <TableRow>
              <TableCell>Temps</TableCell>
              <TableCell >Profondeur</TableCell>
              <TableCell >Oxygène</TableCell>
              <TableCell >Etat (descente,monter pallier,ect..)</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <TableRow key={row.name}>
                <TableCell >{row.name}</TableCell>
                <TableCell >{row.calories}</TableCell>
                <TableCell >{row.fat}</TableCell>
                <TableCell >{row.carbs}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      );

  }

  export default Tableau;