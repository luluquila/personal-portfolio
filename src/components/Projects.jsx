import * as React from 'react';
import { Box, Typography, Stack, Tooltip, IconButton, styled } from '@mui/material';
import GitHubIcon from '@mui/icons-material/GitHub';
import OpenInNewIcon from '@mui/icons-material/OpenInNew';

export function Projects() {

    const projectsInfo = [
        {id: 'game-of-twenty-one', label: 'Game Of Twenty One', 
            description: 'This personal project of Game of Twenty One was written using just raw JavaScript, HTML, and CSS. It is deployed at GitHub Pages.', 
            technologies: ['JavaScript', 'HTML', 'CSS', 'GitHub Actions', 'GitHub Pages'], 
            codeLink: 'https://github.com/luluquila/game-of-twenty-one', 
            pageLink: 'https://luluquila.github.io/game-of-twenty-one/',
            imagePath: 'src/assets/game-of-twenty-one-screenshot.png'
        },
        {id: 'battleship', label: 'Battleship', 
            description: 'This personal project of Battleship was written using javaScript front-end framework ReactJs. It is deployed at Firebase.', 
            technologies: ['ReactJs', 'Vite', 'JavaScript', 'Google Cloud Firebase', 'GitHub Actions', 'CI/CD'], 
            codeLink: 'https://github.com/luluquila/battleship', 
            pageLink: 'https://battleship-84af9.firebaseapp.com/',
            imagePath: 'src/assets/battleship-screenshot.png'
        },
        {id: 'weight-insights', label: 'Weight Insights', 
            description: 'This is a group project of a full-stack application aiming to help people with losing weight in a gamified group competition.', 
            technologies: ['Firestore', 'NoSQL', 'NestJs', 'TypeScript', 'React', 'Material UI'], 
            codeLink: 'https://github.com/weight-insights/wi-react-ui', 
            pageLink: '',
            imagePath: 'src/assets/weight-insights-icon.png'
        }
    ];

    const CustomTypography = styled(Typography)({
        fontFamily: '"Spectral-Regular", serif',
        fontWeight: 1000
    });

    const BoldCustomTypography = styled(Typography)({
        fontFamily: '"Spectral-Bold", serif',
        fontWeight: 1000
    });

    
 

    return (
        <>
        <CustomTypography variant="h4">Projects</CustomTypography>
        <Box id="projects"  sx={{display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center', margin: '70px'}}>
            <Stack direction="column" spacing={2} sx={{ width: '100%', maxWidth: '1200px'}}>
                    {projectsInfo.map((project, index) => (
                         <Box key={project.id} sx={{ 
                            display: 'flex', 
                            flexDirection: 'row', // Responsive
                            alignItems: 'stretch', // Stretch on desktop only
                            gap: 4
                        }}> 
                            {/* Image Box - Matches content height */}
                            <Box sx={{ 
                                width: { xs: '100%', md: '50%' },
                                display: 'flex',
                                flexDirection: 'column',
                                justifyContent: 'center',
                                order: index % 2 === 0 ? 0 : 1 
                            }}>
                                <Box sx={{
                                    width: '100%',
                                    borderRadius: 2,
                                    overflow: 'hidden',
                                    border: '1px solid #ddd',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    backgroundColor: '#f8f8f8',
                                    aspectRatio: '16/9', // Maintain aspect ratio
                                    minHeight: { xs: '250px', md: 'auto' }
                                }}>
                                    {project.imagePath ? (
                                        <img 
                                            src={project.imagePath} 
                                            alt={project.label}
                                            style={{ 
                                                width: '100%', 
                                                height: '100%', 
                                                objectFit: 'contain', // Shows full image
                                                padding: '10px'
                                            }}
                                        />
                                    ) : (
                                        'Project Image'
                                    )}
                                </Box>
                            </Box>

                            <Box key={project.id} color="inherit" sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', p: 3, order: index % 2 === 0 ? 1 : 0 }}>
                                <CustomTypography variant='h5'>{project.label}</CustomTypography>
                                <Box sx={{width: '65%', maxWidth: '600px', margin: '10px'}}><CustomTypography>{project.description}</CustomTypography></Box>
                                <Box sx={{display: 'flex', flexWrap: 'wrap',
                                    flexDirection: 'row', justifyContent: 'center', 
                                    gap: 1, margin: '5px'}}>{project.technologies.map((technology, index) => 
                                        {return <BoldCustomTypography key={index}>{technology}</BoldCustomTypography>})}
                                </Box>
                                <Tooltip title="View Code on GitHub">
                                    <IconButton 
                                        href={project.codeLink}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        color="inherit" // Inherits color from parent
                                        sx={{ color: 'white' }}
                                    >
                                        <GitHubIcon sx={{ fontSize: 32 }}/>
                                    </IconButton>
                                    </Tooltip>
                                    <Tooltip title="View Deployed App">
                                    <IconButton 
                                        href={project.pageLink}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        color="inherit" // Inherits color from parent
                                        sx={{ color: 'white' }}
                                    >
                                        <OpenInNewIcon sx={{ fontSize: 32 }}/>
                                    </IconButton>
                                    </Tooltip>
                            </Box>
                        </Box>
                        
                    ))}      
                </Stack>
        </Box>
        </>
    );
}