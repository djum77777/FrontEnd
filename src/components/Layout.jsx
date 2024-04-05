import React from 'react'
import Navbar from './Navbar'
import { Helmet,HelmetProvider } from 'react-helmet-async'

function Layout({title,children}) {
  return (
    //props child itu isi dlm bungkusan <layout> misal isinya ada <Navbar/> jd navbar ini jd childnya </layout>
    <HelmetProvider>
      {/*helmet untuk title page*/}
      <Helmet>
        <title>{title}</title>
      </Helmet>
      <Navbar/>
      <div>{children}</div>
    </HelmetProvider>
  )
}

export default Layout