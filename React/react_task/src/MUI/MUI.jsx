/*
Material UI is an open-source React component library that implements 
Google's Material Design.

It's comprehensive and can be used in production out of the box.


npm install @mui/material @emotion/react @emotion/styled

@mui/icons-material
@mui/x-data-grid

https://mui.com/material-ui/

*/

import React from 'react'
import Button from '@mui/material/Button';
import DeleteIcon from '@mui/icons-material/Delete';
import SendIcon from '@mui/icons-material/Send';
import Rating from '@mui/material/Rating';

import Alert from '@mui/material/Alert';

import Box from '@mui/material/Box';
import { useTheme } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import SkipPreviousIcon from '@mui/icons-material/SkipPrevious';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import SkipNextIcon from '@mui/icons-material/SkipNext';


function MUI() {
    const theme = useTheme();
    return (
        <div className='container mt-5'>
            <Button variant="text">Text</Button>
            <Button variant="contained">Contained</Button>
            <Button variant="outlined">Outlined</Button>
            <hr />
            <Button color="secondary">Secondary</Button>
            <Button variant="contained" color="success">
                Success
            </Button>
            <Button variant="outlined" color="error">
                Error
            </Button>
            <hr />
            <Button variant="contained" size="small">
                Small
            </Button>
            <Button variant="contained" size="medium">
                Medium
            </Button>
            <Button variant="contained" size="large">
                Large
            </Button>

            <hr />

            <Button variant="outlined" startIcon={<DeleteIcon />}>
                Delete
            </Button>
            <Button variant="contained" endIcon={<SendIcon />}>
                Send
            </Button>

            <hr></hr>
            <Rating name="half-rating" defaultValue={2.5} precision={0.5} />
            <Rating name="half-rating-read" defaultValue={2.5} precision={0.5} readOnly />

            <hr />

            <Alert severity="success">This is a success Alert.</Alert>
            <Alert severity="info">This is an info Alert.</Alert>
            <Alert severity="warning">This is a warning Alert.</Alert>
            <Alert severity="error">This is an error Alert.</Alert>
            <Alert variant="filled" severity="success">
                This is a filled success Alert.
            </Alert>
            <Alert variant="filled" severity="info">
                This is a filled info Alert.
            </Alert>
            <Alert variant="filled" severity="warning">
                This is a filled warning Alert.
            </Alert>
            <Alert variant="filled" severity="error">
                This is a filled error Alert.
            </Alert>

            <hr />

            <Card sx={{ display: 'flex' }}>
                <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                    <CardContent sx={{ flex: '1 0 auto' }}>
                        <Typography component="div" variant="h5">
                            Live From Space
                        </Typography>
                        <Typography
                            variant="subtitle1"
                            component="div"
                            sx={{ color: 'text.secondary' }}
                        >
                            Mac Miller
                        </Typography>
                    </CardContent>
                    <Box sx={{ display: 'flex', alignItems: 'center', pl: 1, pb: 1 }}>
                        <IconButton aria-label="previous">
                            {theme.direction === 'rtl' ? <SkipNextIcon /> : <SkipPreviousIcon />}
                        </IconButton>
                        <IconButton aria-label="play/pause">
                            <PlayArrowIcon sx={{ height: 38, width: 38 }} />
                        </IconButton>
                        <IconButton aria-label="next">
                            {theme.direction === 'rtl' ? <SkipPreviousIcon /> : <SkipNextIcon />}
                        </IconButton>
                    </Box>
                </Box>
                <CardMedia
                    component="img"
                    sx={{ width: 151 }}
                    image="https://mui.com/static/images/cards/live-from-space.jpg"
                    alt="Live from space album cover"
                />
            </Card>
        </div>
    )
}

export default MUI