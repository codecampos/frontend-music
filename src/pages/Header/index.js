import React, { useState, useEffect } from 'react';
import api from '../../services/api';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import Link1 from '@material-ui/core/Link';
import ModalSignIn from '../ModalSignIn';
import ModalSignUp from '../ModalSignUp';
import ModalRegisterProduct from '../ModalRegisterProduct';
import ModalSearchProduct from '../ModalSearch';
import { Link } from 'react-router-dom';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';


const useStyles = makeStyles((theme) => ({
  toolbar: {

  },
  toolbarTitle: {
    flex: 1,

  },
  toolbarSecondary: {
    justifyContent: 'space-evenly',
    overflowX: 'auto',
    borderTop: `1px solid ${theme.palette.divider}`,
    borderBottom: `1px solid ${theme.palette.divider}`,
    borderBlockColor: '#000'
  },
  toolbarLink: {
    padding: theme.spacing(1),
    flexShrink: 0,
  },
}));

export default function Header(props) {
  const classes = useStyles();
  const { sections } = props;

  return (
    <>
      <Toolbar className={classes.toolbar}>

        <ModalSearchProduct />

        <Typography
          component="h2"
          variant="h5"
          color="inherit"
          align="center"
          noWrap
          className={classes.toolbarTitle}
        >
          <Link color="inherit" to="/">
            <IconButton color="inherit">
              Groove Music
            </IconButton>
          </Link>
        </Typography>
        <ModalSignIn />
        <ModalSignUp />

        <ModalRegisterProduct />
        <Link color="inherit" to="/checkout">
          <IconButton color="inherit">
            <ShoppingCartIcon />
          </IconButton>
        </Link>
      </Toolbar>
      <Toolbar component="nav" variant="dense" className={classes.toolbarSecondary}>
        {sections.map((section) => (
          <Link1
            color="inherit"
            noWrap
            key={section.title}
            variant="body2"
            href={section.url}
            className={classes.toolbarLink}
          >
            {section.title}
          </Link1>
        ))}
      </Toolbar>
    </>
  );
}

Header.propTypes = {
  sections: PropTypes.array,
};
