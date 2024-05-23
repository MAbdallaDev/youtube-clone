import { Box, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Videos from './Videos';
import { FetchFromApi } from '../utils/FetchFromApi';

const SearchFeed = () => {
   const { searchTerm } = useParams();
   const [videos, setVideos] = useState([]);
   useEffect(() => {
      FetchFromApi(`search?part=snippet&q=${searchTerm}`)
         .then((data) => setVideos(data.items));
   }, [searchTerm])
   return (
      <Box p={2} sx={{ overflowY: "auto", height: "90vh", flex: 2 }}>
         <Typography
            variant='h4'
            fontWeight='bold'
            sx={{ color: "#fff", mb: 2 }}>
            Search Results For: {searchTerm} <span style={{ color: "#FC1503" }}>Videos</span>
         </Typography>
         <Videos data={videos} justifyContent='start'  xs={12} sm={6} md={4} lg={3}/>
      </Box>
   )
}

export default SearchFeed