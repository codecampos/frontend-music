import React from 'react';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControl from '@material-ui/core/FormControl';


export default function PaymentForm() {
  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom>
        Payment method
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <FormControl component="fieldset">
            <RadioGroup aria-label="gender" name="gender1" value="Boleto" >
              <FormControlLabel value="Boleto" control={<Radio />} label="Boleto" />
            </RadioGroup>
          </FormControl>
        </Grid>
      </Grid>
    </React.Fragment>
  );
}