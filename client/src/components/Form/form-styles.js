
import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
  root: {
    '& .MuiTextField-root': {
      margin: theme.spacing(1),
    },
  },
  form: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
  },
  fileInput: {
    width: '97%',
    margin: '10px 0',
  },
  buttonSubmit: {
    marginBottom: 10,
  },
  paper: {
    ['@media (min-width:780px)']: { 
      width: '220px',
      position: 'fixed',
      padding: theme.spacing(2),
    },
    ['@media (min-width: 992px) and (max-width: 1199.98px)']: { 
      width: '310px',
      position: 'fixed',
      padding: theme.spacing(2),
    },
    ['@media (min-width: 1200px)']: { 
      width: '350px',
      position: 'fixed',
      padding: theme.spacing(2),
    }
  }
}));
