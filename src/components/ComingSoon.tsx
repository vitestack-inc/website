import React from 'react';
import {Container, Grid, Typography, Box} from '@mui/material';

const ComingSoon = () => {
  return (
    <Container maxWidth="xl"> 
      <Grid container >
        <Grid item xs={12} sm={6}>
          <Typography variant="h1" component="h2" gutterBottom >
            Coming Soon
          </Typography>
          <Typography variant="h5" component="h2" gutterBottom>
          Our Website is currently under construction
          </Typography>

          <Box>
            <Typography variant="body1" gutterBottom sx={{
              color:'primary.main'
            }}>
              Want to get notified when we go live?
            </Typography>
            
          </Box>
          </Grid>
        <Grid item xs={12} sm={6}>
          </Grid>
      </Grid>
    </Container>
  )
}

export default ComingSoon