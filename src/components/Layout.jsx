import React from 'react'
import { Outlet } from 'react-router-dom'

const Layout = () => {
  return (
    <div>
      I am Layout

      <Outlet />
    </div>
  )
}

export default Layout
