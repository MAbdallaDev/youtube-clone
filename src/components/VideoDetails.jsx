import React, { useEffect, useState } from 'react'
import { Box, Card, CardContent, CardMedia, Stack, Typography } from '@mui/material';
import ReactPlayer from 'react-player'
import { Link, useParams } from 'react-router-dom';
import { FetchFromApi } from '../utils/FetchFromApi';
import { CheckCircle } from '@mui/icons-material';
import { Videos } from './'
const VideoDetails = () => {
   const { id } = useParams();
   const [videoDetail, setVideoDetail] = useState(null);
   const [relatedVideos, setRelatedVideos] = useState(null);
   useEffect(() => {
      FetchFromApi(`videos?part=snippet,statistics&id=${id}`)
         .then((data) => { setVideoDetail(data.items[0]) })
      FetchFromApi(`search?part=snippet&relatedToVideoId=${id}`)
         .then((data) => { setRelatedVideos(data.items) })

   }, [])
   if (videoDetail?.snippet === undefined)
      return 'loading'

   const { snippet: { title, channelTitle, channelId }, statistics: { likeCount, viewCount } } = videoDetail;
   return (
      <Box sx={{ minHeight: '95vh' }}>
         <Stack sx={{ flexDirection: { xs: 'column', md: 'row' } }}>
            <Box flex={1}px={1} >
               <Box  sx={{ width: '100%', position: 'sticky', top: '86px' }}>
                  <ReactPlayer
                     url={`https://www.youtube.com/watch?v=${id}`}
                     controls
                     className='react-player' />
                  <Typography variant='h6' sx={{ color: '#fff', fontWeight: 'bold' }} p={1}>
                     {title}
                  </Typography>
                  <Stack
                     direction='row'
                     justifyContent='space-between'
                     px={2} py={1}
                  >
                     <Link to={`/channel/${channelId}`} >
                        <CheckCircle sx={{ color: 'gray', fontSize: '14px', mr: '6px' }} />
                        <Typography variant={{ sm: 'subtitle1', md: 'h6' }} sx={{ color: '#fff' }} >
                           {channelTitle}
                        </Typography>
                     </Link>
                     <Stack direction='row' alignItems='center' gap='20px' color='#fff'>
                        <Typography variant='body2' opacity='0.7' >
                           {parseInt(viewCount).toLocaleString()} View
                        </Typography>
                        <Typography variant='body2' opacity='0.7'>
                           {parseInt(likeCount).toLocaleString()} Like
                        </Typography>
                     </Stack>
                  </Stack>
               </Box>
            </Box>
            <Box  sx={{width:{xs:'100%',md:'325px'},md:{px:'8px',py:'16px'}}} >
               <Videos data={relatedVideos} justifyContent='center' xs={12} sm={6} md={12} lg={12}/>
            </Box>
         </Stack>
      </Box>
   )
}

export default VideoDetails