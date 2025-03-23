import React from 'react'
import Blogs from './Blogs'
import Footer from './Footer'
import Navbar from './Navbar'
import ScrollToTop from './ScrollToTop'
// import Hero from './Hero';
import HeroBlogs from './HeroBlogs'



 const BlogPage = () => {
  return (
   
    <div className="relative z-0 bg-primary">
    <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
      <Navbar />
      <HeroBlogs/>
      {/* <Hero /> */}
    </div>
    <Blogs />
<Footer />
    <ScrollToTop />
  </div>
  )
}
export default BlogPage;

