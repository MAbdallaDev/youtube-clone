import { Box, Stack, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { Sidebar, Videos } from './'
import { FetchFromApi } from '../utils/FetchFromApi';

const Feed = () => {
   const [selectedCategory, setSelectedCategory] = useState("New");
   const [videos,setVideos]=useState([]);
   useEffect(() => {
      FetchFromApi(`search?part=snippet&q=${selectedCategory}`)
         .then((data) => setVideos(data.items));
   }, [selectedCategory])
   return (
      <Stack
         sx={{ flexDirection: { sx: "column", md: "row" } }}>
         <Box
            sx={{
               borderRight: "1px solid #3d3d3d",
               height: { sx: "auto", md: "92vh" },
               p: { sx: 0, md: 2 }
            }}>
            <Sidebar selectedCategory={selectedCategory} setSelectedCategory={setSelectedCategory} />
            <Typography
               className='copyright'
               variant="body2"
               sx={{ color: "#fff", mt: { sx: 0, md: 1.5 } }}>
               Copyright 2024 mostafa abdalla
            </Typography>
         </Box>
         <Box p={2} sx={{ overflowY: "auto", height: "90vh", flex: 2 }}>
            <Typography
               variant='h4'
               fontWeight='bold'
               sx={{ color: "#fff", mb: 2 }}>
               {selectedCategory} <span style={{ color: "#FC1503" }}>Videos</span>
            </Typography>
            <Videos data={videos} justifyContent='start' xs={12} sm={6} md={4} lg={3}/>
         </Box>
      </Stack>
   )
}

export default Feed