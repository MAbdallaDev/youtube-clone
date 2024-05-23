import { Box, Container, Grid, Stack } from '@mui/material';
import React from 'react'
import { ChannelCard, VideoCard } from './';

const Videos = ({ data, justifyContent, xs, sm, md, lg }) => {
   console.log(data);
   if (data === null) return "loading"
   return (
      <>
         {/* <Stack flexWrap='wrap'
            flexDirection='row'
            // justifyContent:{}
            gap={2}
            sx={{ justifyContent: { xs: "space-between", md: justifyContent } }}
         >
            {data.map((item, idx) => (
               <>
                  {item.id.videoId && <VideoCard video={item} key={idx} />}
                  {item.id.channelId && <ChannelCard channel={item} key={idx} />}
               </>
            ))}

         </Stack > */}
         <Container
         >
            <Grid container spacing={2} >

               {data.map((item, idx) => (
                  <>
                     {(item.id.videoId || item.id.channelId) &&
                        <Grid item xs={xs} sm={sm} md={md} lg={lg} key={idx}>
                           {item.id.videoId && <VideoCard video={item} key={idx} />}
                           {item.id.channelId && <ChannelCard channel={item} key={idx} />}
                        </Grid>
                     }
                  </>
               ))}
            </Grid>

         </Container >
      </>
   )
}

export default Videos