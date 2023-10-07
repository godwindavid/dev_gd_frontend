import React, { useContext, useState } from 'react'
import PrivateRoutes from './PrivateRoutes'
import PublicRoutes from './PublicRoutes'
import appContext from '../appContext'

const Routing = () => {
  const {token} = useContext(appContext)



  // const token = localStorage.getItem("userData")

  console.log(token)
  return (
    <div>{token ? <PrivateRoutes /> : <PublicRoutes />}</div>
  )
}

export default Routing