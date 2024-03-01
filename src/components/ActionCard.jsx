import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import { CardActionArea } from '@mui/material';

export default function ActionCard({url, name}) {
  return (
    <Card sx={{ maxWidth: 400 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          image={url}
          alt={name}
        />
        <CardContent>
          
            <h2>{name}</h2>
         
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
