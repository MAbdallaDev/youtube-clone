import { Stack, Typography } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'
import { logo } from '../utils/constants'
import SearchBar from './SearchBar'
const Navbar = () => (
   <Stack
      direction="row"
      alignItems="center"
      justifyContent="space-between"
      p={2}
      sx={{ backgroundColor: "#000", position: "sticky", top: 0 }}
   >
      <Link to="/" style={{display:"flex",alignItems:"center"}}>
         <img src={logo} alt='logo' height={45}/>
         <Typography variant='h5'  sx={{color:'#fff',ml:2,display:{xs:'none',md:'block'}}}>YouTube</Typography>
      </Link>
      <SearchBar />
   </Stack>
)


export default Navbar