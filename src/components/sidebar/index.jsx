import React, { useMemo } from 'react'
import './style.scss'
import { Box } from '@mui/material'

function SideBar( {active, setActive}) {
  const sideBarContents = useMemo(() => ["Dashboard","Chat Box","User Board","Contacts", "Contacts of Bhai"], [])
  return (
    <Box className="sidebar">
      {sideBarContents.map((ele, index)=>(
        <Box key={index} className={`sessions ${active === index ? "active": ""}`} onClick={()=>setActive(index)}>
          {ele}
        </Box>
      ))}
    </Box>
  )
}

export default SideBar