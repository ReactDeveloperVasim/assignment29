import { Grid, TextField } from '@mui/material';
import React from 'react';

const Click = () => {
    return (
        <Grid container spacing={2}>
            <Grid item xs={8}>
                <TextField variant='outlined' label="Enter Here...." fullWidth  />
            </Grid>
            <Grid item xs={4}>
                <Button variant="contained" fullWidth>submit</Button>
            </Grid>
        </Grid>
    );
};

export default Click;