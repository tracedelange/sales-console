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


// https://stackoverflow.com/questions/2901102/how-to-print-a-number-with-commas-as-thousands-separators-in-javascript
function numberWithCommas(x) {
  return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

export default function CustomerTable({data, handleRowClick, customerFilter}) {
  const classes = useStyles();

  return (
    <TableContainer classes={{root: classes.customeTableContainer}} component={Paper}>
      <Table stickyHeader className={classes.table} aria-label="sticky table">
        <TableHead>
          <TableRow>
            <TableCell className={classes.cellHeader} >Customer</TableCell>
            <TableCell className={classes.cellHeader} align="center"># of Orders</TableCell>
            <TableCell className={classes.cellHeader} align="center">Gross Income From Customer</TableCell>
            <TableCell className={classes.cellHeader} align="center">Average Purchase Amount</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map((row) => (
            <TableRow onClick={() => handleRowClick(row.customerName)} key={row.id}>
              <TableCell className={classes.cell} component="th" scope="row">
                {row.customerName}
              </TableCell>
              <TableCell className={classes.cell} align="center">{numberWithCommas(row.orders.length)}</TableCell>
              <TableCell className={classes.cell} align="center">${numberWithCommas(row.totalSpent)}</TableCell>
              <TableCell className={classes.cell} align="center">${numberWithCommas(Math.round(row.totalSpent / row.orders.length))}</TableCell>

            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}