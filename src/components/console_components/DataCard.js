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
    margin: 40,
    backgroundColor : '#EEEDE7',
  },
  content: {
    marginTop: 50,
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 24,
  },
  pos: {
    marginBottom: 12,
  },
  span: {
    fontWeight: 600,
    fontSize: 24,
  }
});

export default function SimpleCard({title, product}) {
  const classes = useStyles();
  const bull = <span className={classes.bullet}>•</span>;


  // https://stackoverflow.com/questions/2901102/how-to-print-a-number-with-commas-as-thousands-separators-in-javascript
  function numberWithCommas(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  }

  // console.log(product)

  return (
    <Card className={classes.root}>
      <CardContent className={classes.content}>
        <Typography className={classes.title} color="textSecondary" gutterBottom>
          {title}
        </Typography>
        <Typography variant="h4" component="h2">
          {product.productName}
        </Typography>
        <Typography variant="body1" component="p">
          Number of units sold: <br/> <span className={classes.span}>{numberWithCommas(product.numberSold)}</span>
        </Typography>
        <Typography variant="body1" component="p">
            Gross Income from product sales: <br/> <span className={classes.span}>${numberWithCommas(product.numberSold * product.productCost)}</span>
        </Typography>
      </CardContent>
    </Card>
  );
}