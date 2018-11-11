import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Button from './button'


function rand() {
  return Math.round(Math.random() * 100);
}

function getModalStyle() {
  const top =  rand();
  const left =  rand();


  return {
    top: `${top}%`,
    left: `${left}%`,
    transform: `translate(-${top}%, -${left}%)`,
  };
}

const styles = theme => ({
  paper: {
    position: 'absolute',
    width: theme.spacing.unit * 10,
    // backgroundColor: theme.palette.background.paper,
    // boxShadow: theme.shadows[5],
    // padding: theme.spacing.unit * 4,
  },
});

class SimpleModal extends React.Component {

  render() {
    const { classes } = this.props;

    return (
    
          <div style={getModalStyle()} className={classes.paper}>
            <Button onClick={this.props.onClick} />
          </div>
    );
  }
}

SimpleModal.propTypes = {
  classes: PropTypes.object.isRequired,
};

// We need an intermediary variable for handling the recursive nesting.
const SimpleModalWrapped = withStyles(styles)(SimpleModal);

export default SimpleModalWrapped;