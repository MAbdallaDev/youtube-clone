import { Card, CardContent, CardMedia, Typography } from '@mui/material';
import React from 'react'
import { demoChannelTitle, demoChannelUrl, demoVideoTitle, demoVideoUrl } from '../utils/constants';
import { Link } from 'react-router-dom';
import { CheckCircle } from '@mui/icons-material';

const VideoCard = ({ video: { id: { videoId }, snippet } }) => {
   return (
      <Card
         sx={{
            // width: { xs: '100%',sm:'358px', md: '320px' },
            boxShadow: 'none',
            borderRadius: '0',
         //    '@media (max-width:500px)': {
         //       width: '100%'
         // }
         }}>
         <Link to={videoId ? `/video/${videoId}` : demoVideoUrl} >
            <CardMedia
               image={snippet?.thumbnails?.high?.url}
               alt={snippet?.title || demoVideoTitle}
               sx={{
                  width: '100%' , height: "170px", '@media (max-width:600px)': {
                     height: '140px'
                  }
               }}
            />
         </Link>
         <CardContent
            sx={{ backgroundColor: "#1e1e1e", height: "86px" }}
         >
            <Link to={videoId ? `/video/${videoId}` : demoVideoUrl}>
               <Typography variant='subtitle1' sx={{ color: "#fff", fontWeight: 'bold' }}>
                  {snippet?.title.slice(0, 60) || demoVideoTitle.slice(0, 60)}
               </Typography>
            </Link>
            <Link to={snippet?.channelId ? `/channel/${snippet?.channelId}` : demoChannelUrl}
               style={{ display: "flex" }}
            >
               <CheckCircle sx={{ color: "gray", fontSize: '14px', mr: "5px" }} />
               <Typography variant='subtitle2' sx={{ color: "gray", fontWeight: 'bold' }}>
                  {snippet?.channelTitle.slice(0, 60) || demoChannelTitle.slice(0, 60)}
               </Typography>
            </Link>
         </CardContent>
      </Card>
   )
}

export default VideoCard
