import React, { useMemo } from 'react'
import './style.scss'
import { Box } from '@mui/material'

function SideBar( {active, setActive}) {
  const sideBarContents = useMemo(() => ["Dashboard","Chat Box","User Board","Contacts", "Contacts of Bhai"], [])
  return (
    <Box className="sidebar">
      {/* <img src="https://getlogovector.com/wp-content/uploads/2019/10/gd-spa-a-coesia-company-logo-vector.png" alt='LOGO' /> */}
      {sideBarContents.map((ele, index)=>(
        <Box key={index} className={`sessions ${active === index ? "active": ""}`} onClick={()=>setActive(index)}>
          {ele}
        </Box>
      ))}
    </Box>
  )
}

export default SideBar