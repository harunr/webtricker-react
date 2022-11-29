import React, { useState } from 'react';
import BlogList from '../../components/Home/BlogList';
import ServiceHero from '../../components/service/ServiceHero';
import { blogList } from '../../config/data';

const Blog = () => {
  const [blogs, setBlogs] = useState(blogList);




  return (
    <>
    <section className="main-content-wrap blog">
        <ServiceHero
          HeroSrc="img/blog/hero-bg.jpg"
          heroTitle="Our Blogs"
        />
        <section className="blog-wrap">
          <div className="common-wrap clear">
            <BlogList blogs={blogs} />
          </div>
        </section>
    </section>
    </>
  );
};

export default Blog;
