import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
  paper: {
    height: '400px',
    alignContent: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    border: '1px solid #000',
    boxShadow: '2px 2px 10px #000',
  },
  title: {
    fontSize: '70px',
    fontWeight: 'bold',
    color: '#3f51b5',
    marginBottom: '20px',
    textAlign: 'center',
    textShadow: '2px 2px #000',
  },
  details: {
    fontSize: '20px',
    marginLeft: '20px',
    marginTop: '20px',
  }
}));