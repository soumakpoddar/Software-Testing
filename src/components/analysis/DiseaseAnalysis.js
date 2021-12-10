import React from 'react';
import './DiseaseAnalysis.css';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';

const DiseaseAnalysis = ({label}) => {
    return (
        <div data-testid="button" className="button-style">
            <Box sx={{ flexGrow: 1 }}>
                <AppBar position="static" style={{ background: '#138557' }}>
                    <Toolbar>
                    <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                        {label}
                    </Typography>
                    </Toolbar>
                </AppBar>
            </Box>
        </div>
    );
}

export default DiseaseAnalysis;