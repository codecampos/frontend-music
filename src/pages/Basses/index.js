import React, { useState, useEffect } from 'react';
import api from '../../services/api';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import IconButton from '@material-ui/core/IconButton';

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 345,
  },

  cardGrid: {
    paddingTop: theme.spacing(8),
    paddingBottom: theme.spacing(8),
  },
  card: {
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
  },
  cardMedia: {

  },
  cardContent: {
    flexGrow: 1,
  },
}));


export default function Basses() {
  const classes = useStyles();
  const [name, setName] = useState('');
  const [price, setPrice] = useState('');
  const [product, setProduct] = useState([]);

  useEffect(() => {
    async function loadProducts() {
      const response = await api.get('/dashboard');
      setProduct(response.data);
    }
    loadProducts();
  }, []);

  async function handleSubmit(product) {
    setPrice(product.price)
    setName(product.name)
    console.log(product.name)
    await api.post('/cart', { name, price });
    alert("Adicionado no carrinho!");
  }

  return (
    <>
      <Container className={classes.cardGrid} maxWidth="md">
        {/* End hero unit */}
        <Grid container spacing={4}>

          {
            product.filter(product => product.tags == 'Bass').map(product => (
              <Grid item key={product._id} xs={12} sm={6} md={4}>

                <Card className={classes.card}>
                  <CardActionArea>
                    <CardMedia
                      className={classes.cardMedia}
                      component="img"
                      alt="Contemplative Reptile"
                      height="140"
                      image={product.thumbnail_url}
                      title="Contemplative Reptile"
                    />

                    <CardContent className={classes.cardContent}>
                      <Typography gutterBottom variant="h5" component="h2">
                        {product.name}
                      </Typography>

                      <Typography variant="body2" color="textSecondary" component="p">
                        {product.description}
                        <br />
                      </Typography>
                    </CardContent>
                  </CardActionArea>
                  <CardActions>
                    <Button size="small" color="primary" >
                      {`R$ ${product.price}`}
                    </Button>
                    <Button size="small" color="primary">
                      {product.color}
                    </Button>
                    <IconButton color="primary" type="submit" aria-label="search" onClick={() => handleSubmit(product)}>

                      <AddShoppingCartIcon />
                    </IconButton>
                  </CardActions>
                </Card>
              </Grid>

            ))
          }
        </Grid>
      </Container>
    </>
  )
}