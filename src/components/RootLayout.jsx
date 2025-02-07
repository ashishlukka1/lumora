import React from 'react'
import { Outlet, useLocation } from 'react-router-dom'
import Header from './Header/Header'

function RootLayout() {
  const location = useLocation();
  
  const isLectureDisplay = location.pathname.includes('/lecture/');

  return (
    <div>
      {!isLectureDisplay && <Header />}
      <Outlet />
    </div>
  )
}

export default RootLayout;