import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';

export default function ActionAreaCard({name, status, gender, specie, image, origin, location, firstEpsode}) {
  return (
    <Card sx={{ maxWidth: 345,}}>
      <CardActionArea sx={{margin : 2}}>
        <CardMedia
          component="img"
          image={image}
          alt={status}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
           {name}
          </Typography>
          <Typography variant="body2" color="text.secondary">
          Gender: {gender}
          </Typography>
          <Typography variant="body2" color="text.secondary">
          Specie: {specie}
          </Typography>
          <Typography variant="body2" color="text.secondary">
           Home planet: {origin}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Last known location: {location}
          </Typography>
          <Typography variant="body2" color="text.secondary">
          First seen in: {firstEpsode}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
