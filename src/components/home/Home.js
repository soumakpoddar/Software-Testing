import React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import CardMedia from '@mui/material/CardMedia';
import "./Home.css";

const Home = (props) => {

    async function getData(url){
        const response = await fetch(url);
        const res = await response.json();
        return response;
    }

    return (
        <div data-testid="home" className="home">
            <Card sx={{ maxWidth: 345 }}>
                <CardMedia
                    component="img"
                    height="140"
                    image={props.urls}
                    alt="green iguana"
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                        {props.title}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        {props.content}
                    </Typography>
                </CardContent>
                <CardActions>
                    <Button size="small"><a href="#">Share</a></Button>
                    <Button size="small"><a href={props.buttonURL2} target="_blank">Learn More</a></Button>
                </CardActions>
            </Card>
        </div>
    )
}

export default Home;