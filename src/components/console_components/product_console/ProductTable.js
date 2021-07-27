import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
  customerTableContaier: {
    overflowx: 'initial'
  },
  cell:{
    fontSize: 20,
  },
  cellHeader: {
    fontSize: 30,
  }

});

function createData(name, calories, fat, carbs, protein) {
  return { name, calories, fat, carbs, protein };
}

// const rows = [
//   createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
//   createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
//   createData('Eclair', 262, 16.0, 24, 6.0),
//   createData('Cupcake', 305, 3.7, 67, 4.3),
//   createData('Gingerbread', 356, 16.0, 49, 3.9),
// ];

// https://stackoverflow.com/questions/2901102/how-to-print-a-number-with-commas-as-thousands-separators-in-javascript
function numberWithCommas(x) {
  return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

export default function CustomerTable({data}) {
  const classes = useStyles();

  // data.map((item) => console.log(item))

  return (
    <TableContainer classes={{root: classes.customeTableContainer}} component={Paper}>
      <Table stickyHeader className={classes.table} aria-label="sticky table">
        <TableHead>
          <TableRow>
            <TableCell className={classes.cellHeader} >Product</TableCell>
            <TableCell className={classes.cellHeader} align="center"># Sold</TableCell>
            <TableCell className={classes.cellHeader} align="center">Sale Price</TableCell>
            <TableCell className={classes.cellHeader} align="center">Gross Income From Product</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map((row) => (
            <TableRow key={row.id}>
              <TableCell className={classes.cell} component="th" scope="row">
                {row.productName}
              </TableCell>
              <TableCell className={classes.cell} align="center">{numberWithCommas(row.numberSold)}</TableCell>
              <TableCell className={classes.cell} align="center">${numberWithCommas(row.productCost)}</TableCell>
              <TableCell className={classes.cell} align="center">${numberWithCommas((row.productCost) * (row.numberSold))}</TableCell>

            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}