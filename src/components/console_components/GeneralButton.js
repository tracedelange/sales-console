import React from 'react'
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles((theme) => ({
    root: {
      '& > *': {
        margin: theme.spacing(1),
        backgroundColor: '#6e79b5',
      },
    },
  }));

const EditProfileButton = ({text, callback}) => {
    const classes = useStyles();
    return (
      <div className={classes.root}>
        <Button onClick={callback} variant="contained" color="primary">
          {text}
        </Button>
      </div>
    );  
}


export default EditProfileButton

