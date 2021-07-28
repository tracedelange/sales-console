import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
  root: {
    minWidth: 350,
    maxWidth: 400,
    minHeight: 100,
    margin: "6vh",
    backgroundColor : '#EEEDE7',
    marginRight: 10,
  },
  content: {
    marginTop: 0,
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: '1vw',
  },
  pos: {
    marginBottom: 4,
  }
});

export default function SimpleCard({data}) {
  const classes = useStyles();

  // https://stackoverflow.com/questions/2901102/how-to-print-a-number-with-commas-as-thousands-separators-in-javascript
  function numberWithCommas(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  }

  let totalNumberProductsSold = 0
  let grossSales = 0
  data.map((item) => totalNumberProductsSold = totalNumberProductsSold + item.numberSold)
  data.map((item) => grossSales = grossSales + (item.numberSold * item.productCost))

    
  return (
    <Card className={classes.root}>
      <CardContent className={classes.content}>
        <Typography className={classes.title} color="textSecondary" gutterBottom>
          YTD Gross Stats
        </Typography>

        <Typography variant="h5" component="h2">
          Total Number of Products Sold: <br/> <span className={classes.span}>{numberWithCommas(totalNumberProductsSold)}</span>
        </Typography>
        {/* <br /> */}
        <Typography variant="h5" component="h2">
          Total Gross Sales: <br/> <span className={classes.span}>${numberWithCommas(grossSales)}</span>
        </Typography>
        {/* <br /> */}
        <Typography variant="h5" component="h2">
          Average Sale Price: <br/> <span className={classes.span}>${numberWithCommas(Math.round(grossSales/(totalNumberProductsSold)))}</span>
        </Typography>
      
      </CardContent>
    </Card>
  );
}