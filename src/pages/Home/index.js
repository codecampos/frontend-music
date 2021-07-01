import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Header from '../Header';
import Container from '@material-ui/core/Container';
import Carrousel from '../Carrousel/index'
import Basses from '../Basses/index'
import Acoustics from '../Acoustics/index'
import ElectricGuitars from '../ElectricGuitars/index'
import Electronics from '../Electronics/index'
import brands from '../../assets/brands.png'
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import { Link } from 'react-router-dom'

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
      <Link color="inherit" to="/">
        Groove Music
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const useStyles = makeStyles((theme) => ({
  root: {
    minHeight: '100vh',
  },
  img: {
    marginTop: '10px',
    marginBottom: '50px',
    maxWidth: '100%',
    border: '1px solid',
    borderColor: 'rgba(0, 0, 0, 0.4)'
  },
  h3: {
    fontSize: '50px',
    alignContent: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    borderBottom: '1px solid black'
  },

}));

const sections = [
  { title: 'ELECTRIC GUITARS', url: '#electric' },
  { title: 'BASSES', url: '#basses' },
  { title: 'ACOUSTICS', url: '#acoustics' },
  { title: 'ELECTRONICS', url: '#electronics' },
];

export default function Home() {

  const classes = useStyles();

  return (
    <div className={classes.root}>
      <CssBaseline />
      <Container maxWidth="lg">
        <Header sections={sections} />
        <Carrousel />
        <img src={brands} alt="brands" className={classes.img} />
      </Container>
      <Container maxWidth="lg" id="electric">
        <h3 className={classes.h3}>ELECTRIC GUITARS</h3>
        <ElectricGuitars />
      </Container>
      <Container maxWidth="lg" id="basses">
        <h3 className={classes.h3}>BASSES</h3>
        <Basses />
      </Container>
      <Container maxWidth="lg" id="acoustics">
        <h3 className={classes.h3}>ACOUSTICS</h3>
        <Acoustics />
      </Container>
      <Container maxWidth="lg" id="electronics">
        <h3 className={classes.h3}>ELECTRONICS</h3>
        <Electronics />
      </Container>
      <Box mt={8}>
        <Copyright />
      </Box>
    </div>
  );
}
