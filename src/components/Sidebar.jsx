import { Stack } from '@mui/material'
import React from 'react'
import { categories } from '../utils/constants'
const Sidebar = ({selectedCategory,setSelectedCategory}) => {
   return (
      <Stack
         direction="row"
         sx={{ flexDirection: { md: "column" }, height: { sx: "auto", md: "95%" },overflowX:"auto" }}
      >
         {categories.map((cat) => (
            <button
               className='category-btn'
               style={{ background: selectedCategory === cat.name && "#Fc1503", color: "#FFF" }}
               key={cat.name}
               onClick={()=>{setSelectedCategory(cat.name)}}
            >
               <span
                  style={{ color: selectedCategory === cat.name ? "#FFF" : "#FF0000", marginRight: "15px" }}
               >{cat.icon}</span>
               <span
                  style={{ opacity: selectedCategory === cat.name ? 1 : 0.8 }}>{cat.name}</span>
            </button>
         ))}
      </Stack>
   )
}

export default Sidebar