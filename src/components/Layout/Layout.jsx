import React, { useState, useEffect } from 'react'
import Header from './Header'
import Footer from './Footer'

const Layout = ({ children }) => {

  const [scrollTop, setScrollTop] = useState(0)

  const isSticky = () => {
    const scrollData = window.scrollY;
    setScrollTop(scrollData)

  };




  useEffect(() => {

    window.addEventListener('scroll', isSticky);

    return () => {
      window.removeEventListener('scroll', isSticky);

    };
  }, [scrollTop]);



  return (
    <div className='relative'>
      <Header type={scrollTop} />
      <main className='xl:pt-20 pt-10'>
        {
          children
        }
      </main>
      <Footer />
    </div>
  )
}

export default Layout