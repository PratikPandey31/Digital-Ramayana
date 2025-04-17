import React from 'react'
import { Outlet } from 'react-router-dom'
import { Header, Footer } from './Components'

function Layout() {
  return (

    <div className="" style={{
      backgroundImage: `url('./src/Assets/Landing-page/Background.jpg')`,
      backgroundSize: 'cover'
      }}>
      <Header />
      <Outlet />
      <Footer />
    </div>
  )
}

export default Layout
