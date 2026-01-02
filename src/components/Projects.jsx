import * as React from 'react';
import { Box, Typography, Stack, styled } from '@mui/material';

export function Projects() {

    const projectsInfo = [
        {id: 'game-of-twenty-one', label: 'Game Of Twenty One', 
            description: 'This personal project of Game of Twenty One was written using just raw JavaScript, HTML, and CSS. It is deployed at GitHub Pages.', 
            technologies: ['JavaScript', 'HTML', 'CSS', 'GitHub Actions', 'GitHub Pages'], 
            codeLink: 'https://github.com/luluquila/game-of-twenty-one', 
            pageLink: 'https://luluquila.github.io/game-of-twenty-one/'
        },
        {id: 'battleship', label: 'Battleship', 
            description: 'This personal project of Battleship was written using javaScript front-end framework ReactJs. It is deployed at Firebase.', 
            technologies: ['ReactJs', 'Vite', 'JavaScript', 'Google Cloud Firebase', 'GitHub Actions', 'CI/CD'], 
            codeLink: 'https://github.com/luluquila/battleship', 
            pageLink: 'https://battleship-84af9.firebaseapp.com/'
        },
        {id: 'weight-insights', label: 'Weight Insights', 
            description: 'This is a group project of a full-stack application aiming to help people with losing weight in a gamified group competition.', 
            technologies: ['Firestore', 'NoSQL', 'NestJs', 'TypeScript', 'React', 'Material UI'], 
            codeLink: 'https://github.com/weight-insights/wi-react-ui', 
            pageLink: ''
        }
    ];

    const CustomTypography = styled(Typography)({
        fontFamily: '"Spectral-Regular", serif',
        fontWeight: 1000
    });

    const BoldCustomTypography = styled(Typography)({
        fontFamily: '"Sepctral-Bold", serif',
        fontWeight: 1000
    });
 

    return (
        <Box id="projects"  sx={{display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center'}}>
            <CustomTypography>This is Projects</CustomTypography>
            <CustomTypography>My projects</CustomTypography>
            <Stack direction="column" spacing={2} sx={{ width: '100%', maxWidth: '800px'}}>
                    {projectsInfo.map((item) => (
                        <Box key={item.id} color="inherit" sx={{ p: 3, border: '1px solid #ddd', borderRadius: 2}}>
                            <CustomTypography>{item.label}</CustomTypography>
                            <CustomTypography>{item.description}</CustomTypography>
                            <BoldCustomTypography>{item.technologies}</BoldCustomTypography>
                        </Box>
                    ))}      
                </Stack>
        </Box>
    );
}