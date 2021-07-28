import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';

import CardContent from '@material-ui/core/CardContent';
import GeneralButton from '../GeneralButton'

import Typography from '@material-ui/core/Typography';
import { Divider } from '@material-ui/core';

const useStyles = makeStyles({
  root: {
    minWidth: 350,
    maxWidth: 400,
    minHeight: 100,
    margin: 40,
    backgroundColor : '#EEEDE7',
  },
  content: {
    marginTop: "1vh",
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 28,
  },
  pos: {
    marginBottom: 12,
  },
  span: {
    fontWeight: 600,
    fontSize: 24,
  }
});

export default function CustomerConsoleDataCard({name, customerData, handleReturnButtonClick}) {
  const classes = useStyles();


  // https://stackoverflow.com/questions/2901102/how-to-print-a-number-with-commas-as-thousands-separators-in-javascript
  function numberWithCommas(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  }
  console.log(customerData)
  return (
    <Card className={classes.root}>
      <CardContent className={classes.content}>
        <Typography className={classes.title} variant="h4" component="h2">
          {name}
        </Typography>
        <Typography variant="body1" component="p">
            Orders from customer: <br /> <span>{customerData.orders.length}</span>
        </Typography>
        <Typography variant="body1" component="p">
            Gross Income From Customer: <br/> <span>${numberWithCommas(customerData.totalSpent)}</span>
        </Typography>
        <Typography variant="body1" component="p">
            Average Purchase Amount: <br/> <span>${numberWithCommas(Math.floor(customerData.totalSpent / customerData.orders.length))}</span>
        </Typography>
        <br />
        <Divider />
        <br />
        <GeneralButton callback={handleReturnButtonClick} text={'Return to Graph'} />
      </CardContent>
    </Card>
  );
}
