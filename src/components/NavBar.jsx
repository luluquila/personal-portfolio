
import * as React from 'react';
import { AppBar, Toolbar, Typography, Button, Stack, styled } from '@mui/material';

export function NavBar() {

    const scrollToSection = (sectionId) => {
        const element = document.getElementById(sectionId);
        if (element) {
            element.scrollIntoView({
                behaviour: 'smooth',
                block: 'start'
            });
        }
    };

    const navItems = [
        { label: 'Home', id: 'home' },
        { label: 'Skills', id: 'skills' },
        { label: 'Projects', id: 'projects'}
    ]

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
                    {navItems.map((item) => (
                        <CustomButton key={item.id} color="inherit" onClick={() => scrollToSection(item.id)}>{item.label}</CustomButton>
                    ))}      
                </Stack>
            </Toolbar>
        </AppBar>
    );
}


