import React from 'react';
import { Container, Grid, Typography, Hidden } from '@mui/material';
import BG from '@Vite/assets/images/BG_coming.png';
import Image from 'next/image';
import Countdown from 'react-countdown';

const ComingSoon = () => {


  const ab = 'erf';

  console.log(ab);
  return (
    <Container maxWidth={false} sx={{
      height: 'calc(100vh - 8rem)',
    }} >
      <Grid container alignContent="center" alignItems="center" height="100%" >
        <Grid item xs={12} sm={7}>
          <Grid container justifyContent="center"  >
            <Grid item xs={12} sm={8} >
              <Typography variant="h1" component="h2" gutterBottom align='center' fontWeight={600} fontSize="6.4rem" >
            Coming Soon
          </Typography>
              <Typography variant="h5" align="center" component="h2" fontSize="3.2rem" fontWeight={500} gutterBottom>
          Our Website is currently under construction
          </Typography>
            </Grid>

          </Grid>
          <Grid container my={3}>
            <Grid item xs={12}>
              <Typography align='center' variant="h5" component="h2" fontSize="5rem" fontWeight={500} gutterBottom>
                <Countdown date="2023-09-01T00:00:00" />
            </Typography>
            </Grid>
          </Grid>


          </Grid>
        <Hidden smDown >
          <Grid item xs={12} sm={5} justifySelf={
            'center'
          } sx={{
            width: '100%',
            height: '95%',
          }} >
            <Image
              src={BG}
              objectFit='cover'
              alt="Website is currently under construction"
              placeholder='blur'
              style={{
                display: 'block',
                height: '100%',
              }}

            />
          </Grid>
        </Hidden>
      </Grid>
    </Container>
  )
}

export default ComingSoon