import * as React from 'react';
import { Box, Typography } from '@mui/material';

export function Skills() {

    return (
        <Box id="skills" sx={{
            paddingTop: '80px',
            minHeight: '100vh',
            scrollMarginTop: '80px'
        }}>
            <Typography>This is Skills</Typography>
            <Typography>My skills</Typography>
        </Box>
    );
}