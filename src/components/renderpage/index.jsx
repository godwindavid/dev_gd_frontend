import React, { useMemo } from 'react'
import './style.scss'
import { Box } from '@mui/material'
import UserListPage from './userListPage';


function RenderPage({active}) {

  const activeTab = useMemo(() => {
    switch (active) {
      case 0:
        return <></>
      case 1:
        return <UserListPage/>
      case 2:
        return <UserListPage/>
      case 3:
        return <UserListPage/>
      default:
        return <></>
    }
  }, [active])
  return (
    <Box className="render_page">
      {activeTab}
    </Box>
  )
}

export default RenderPage