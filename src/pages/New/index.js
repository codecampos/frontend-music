import React, { useState, useMemo } from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import PlaylistAddOutlinedIcon from '@material-ui/icons/PlaylistAddOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import Container from '@material-ui/core/Container';
import { Link } from 'react-router-dom'
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';
import api from '../../services/api'

import cam from '../../assets/camera.svg'
import './styles.css'

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
  paper: {
    marginTop: theme.spacing(1),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 0),
  },
}));

export default function New({ history }) {
  const [thumbnail, setThumbnail] = useState(null);
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [tags, setTags] = React.useState('Guitar');
  const [price, setPrice] = useState('');
  const [color, setColor] = useState('');
  const [brand, setBrand] = useState('');

  const preview = useMemo(() => {
    return thumbnail ? URL.createObjectURL(thumbnail) : null;
  }, [thumbnail]
  );

  async function handleSubmit(event) {
    event.preventDefault();

    const data = new FormData();

    data.append('thumbnail', thumbnail);
    data.append('name', name);
    data.append('description', description);
    data.append('tags', tags);
    data.append('price', price);
    data.append('color', color);
    data.append('brand', brand);

    await api.post('/products', data);

    history.push('/');
  }

  const classes = useStyles();

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <PlaylistAddOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Register Product
        </Typography>
        <form onSubmit={handleSubmit} className={classes.form} noValidate>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <label
                id="thumbnail"
                style={{ backgroundImage: `url(${preview})` }}
                className={thumbnail ? 'has-thumbnail' : ''}
              >
                <input type="file" onChange={event => setThumbnail(event.target.files[0])} />
                <img src={cam} alt="Select img" />
              </label>
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                autoComplete="Pname"
                name="productName"
                variant="outlined"
                required
                fullWidth
                id="productName"
                label="Product Name"
                autoFocus
                value={name}
                onChange={event => setName(event.target.value)}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="brand"
                label="Brand"
                name="brand"
                autoComplete="brand"
                value={brand}
                onChange={event => setBrand(event.target.value)}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="description"
                label="Description"
                name="description"
                autoComplete="description"
                value={description}
                onChange={event => setDescription(event.target.value)}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="color"
                label="Color"
                name="color"
                autoComplete="color"
                value={color}
                onChange={event => setColor(event.target.value)}
              />
            </Grid>
          </Grid>
          <Grid item xs={12} >
            <TextField
              autoComplete="price"
              name="price"
              variant="outlined"
              required
              fullWidth
              id="price"
              label="Price"
              autoFocus
              value={price}
              onChange={event => setPrice(event.target.value)}
            />
          </Grid>
          <Grid item xs={12}>
            <FormControl component="fieldset">
              <FormLabel component="legend">Tags</FormLabel>
              <RadioGroup aria-label="gender" name="gender1" value={tags} onChange={event => setTags(event.target.value)}>
                <FormControlLabel value="Guitar" control={<Radio />} label="Guitar" />
                <FormControlLabel value="Bass" control={<Radio />} label="Bass" />
                <FormControlLabel value="Acoustic" control={<Radio />} label="Acoustic" />
                <FormControlLabel value="Electronic" control={<Radio />} label="Electronic" />
              </RadioGroup>
            </FormControl>
          </Grid>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
            href="/"
          >
            Register Product
          </Button>
        </form>
      </div>
      <Box mt={5}>
        <Copyright />
      </Box>
    </Container>
  );
}