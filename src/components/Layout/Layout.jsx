import React, { useState, useEffect } from 'react'
import Header from './Header'
import Footer from './Footer'
import TopMarquee from './TopMarquee'

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
      <div className='fixed w-full'>
        <TopMarquee />
        <Header type={scrollTop} />
      </div>
      <main className='xl:pt-32 pt-20'>
        {
          children
        }
      </main>
      <Footer />
    </div>
  )
}

export default Layout