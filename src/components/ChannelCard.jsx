import { Box, Card, CardContent, CardMedia, Typography } from '@mui/material';
import React from 'react'
import { Link } from 'react-router-dom';
import { demoChannelTitle, demoProfilePicture } from '../utils/constants';
import { CheckCircle } from '@mui/icons-material';

const ChannelCard = ({ channel }) => {
   return (
      <Card
         sx={{
            backgroundColor: 'transparent',
            width: { xs: '48%', md: '320px' },
            boxShadow: 'none',
            borderRadius: '20px',
            '@media (max-width:500px)': {
               width: '100%'
            },
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
         }} >
         <Link to={`/channel/${channel?.id?.channelId}`}>
            <CardContent
               sx={{
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  justifyContent: 'center'
               }}
            >
               <CardMedia
                  image={channel?.snippet?.thumbnails?.high?.url || demoProfilePicture}
                  alt={channel?.snippet?.title || demoChannelTitle}
                  sx={{
                     width: '180px', height: "180px",
                     borderRadius: '50%',
                     marginBottom: '10px',
                     border: '1px solid #1e1e1e'
                  }}
               />
               <Box sx={{ display: 'flex' }}>
                  <CheckCircle sx={{ color: "gray", fontSize: '14px', mr: "5px" }} />
                  <Typography variant='h6' sx={{ color: '#fff' }}>
                     {channel?.snippet?.title || demoChannelTitle}
                  </Typography>
               </Box>
               {channel?.statistics?.subscriberCount &&
                  <Typography sx={{color:'gray'}}>
                     {parseInt(channel?.statistics?.subscriberCount).toLocaleString() + ' Subscribers'}
                  </Typography>
               }  
            </CardContent>
         </Link>
      </Card>
   )
}

export default ChannelCard