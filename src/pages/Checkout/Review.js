import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import api from '../../services/api';

const useStyles = makeStyles((theme) => ({
  listItem: {
    padding: theme.spacing(1, 0),
  },
  total: {
    fontWeight: 700,
  },
  title: {
    marginTop: theme.spacing(2),
  },
}));

export default function Review() {
  const [cart, setCart] = useState([]);

  useEffect(() => {
    async function loadProducts() {
      const response = await api.get('/cartShow');
      setCart(response.data);
    }

    loadProducts();
  }, []);

  const classes = useStyles();

  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom>
        Order summary
      </Typography>
      <List disablePadding>
        {cart.map((cart) => (
          <ListItem className={classes.listItem} key={cart._id}>
            <ListItemText primary={cart.name} />
            <Typography variant="body2">{cart.price}</Typography>
          </ListItem>
        ))}
        <ListItem className={classes.listItem}>
          <ListItemText primary="Total" />
          <Typography variant="subtitle1" className={classes.total}>
            {cart.reduce((total, cart) =>
              (total) + (+cart.price), 0

            )
            }

          </Typography>
        </ListItem>
      </List>
    </React.Fragment>
  );
}