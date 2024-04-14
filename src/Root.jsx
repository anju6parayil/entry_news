import React from 'react'
import Header from './componants/Header'
import { Outlet } from 'react-router-dom'

const Root = () => {
  return (
    <div className='container'>
      <Header/>
      <Outlet/>
    </div>
  )
}

export default Root
