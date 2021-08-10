import { withStyles, Button } from '@material-ui/core';

const StyledButton = withStyles({
  root: {
    background: 'rgba(255, 215, 79, 1)',
    borderRadius: '4px',
    color: 'rgba(111, 72, 236, 1)',
    height: 48,
    padding: '0 30px',
    boxShadow: '1px 3px 11px -3px rgba(255, 105, 135, .3)',
  },
  label: {
    textTransform: 'capitalize',
  },
})(Button);

export default StyledButton