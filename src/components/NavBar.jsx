
import * as React from 'react';
import { AppBar, Toolbar, Typography, Button, Stack, styled } from '@mui/material';

export function NavBar() {

    const CustomTypography = styled(Typography)({
        fontFamily: '"Spectral-Regular", serif',
        fontWeight: 1000
    });

    const CustomButton = styled(Button)({
        fontFamily: '"Spectral-Regular", serif',
        fontWeight: 500
    });

    return (
        <AppBar position="static" sx={{ backgroundColor: '#242424'}}>
            <Toolbar>
                <CustomTypography variant="h6" sx={{ flexGrow: 1}}>Logo</CustomTypography>
                <Stack direction="row" spacing={2}>
                    <CustomButton color="inherit">Home</CustomButton>
                    <CustomButton color="inherit">Skills</CustomButton>
                    <CustomButton color="inherit">Projects</CustomButton>
                </Stack>
            </Toolbar>
        </AppBar>
    );
}


