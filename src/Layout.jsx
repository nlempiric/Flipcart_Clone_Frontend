import React from 'react'
import Header from './component/Header'

const Layout = ({children}) => {
  return (
    <div>
      <Header/>
        {children}
    </div>
  )
}

export default Layout
