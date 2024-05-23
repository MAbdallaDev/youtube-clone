import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import { FetchFromApi } from '../utils/FetchFromApi';
import { Box } from '@mui/material';
import ChannelCard from './ChannelCard';
import {Videos} from './';

const ChannelDetails = () => {
   const { id } = useParams();
   const [channelDetails, setChannelDetails] = useState(null);
   const [videos, setVideos] = useState([]);
   useEffect(() => {
      FetchFromApi(`channels?part=snippet&id=${id}`)
         .then((data) => setChannelDetails(data.items[0]));
      FetchFromApi(`search?channelId=${id}&part=snippet&order=date`)
         .then((data) => setVideos(data.items));
   }, [id])
   console.log(channelDetails);
   return (
      <Box minHeight='95vh'>
         <Box>
            <div style={{
               background: 'linear-gradient(135deg, rgba(144,2,84,1) 0%, rgba(60,9,121,1) 49%, rgba(0,128,255,1) 100%)',
               height: '300px',
               zIndex: '10'
            }} />
            <Box
               sx={{ display: 'flex', justifyContent: 'center', marginTop: '-120px' }}
            >
               <ChannelCard channel={channelDetails} />
            </Box>
            <Box sx={{px:{sm:'20px'}}} marginTop='50px'>
               <Videos data={videos} justifyContent='center' xs={12} sm={6} md={4} lg={3}/>
            </Box>
         </Box>
      </Box>
   )
}

export default ChannelDetails