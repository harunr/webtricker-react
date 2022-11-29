import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { blogList } from '../../config/data';
import EmptyList from '../../components/common/EmptyList';

const BlogSingle = () => {
  const { id } = useParams();
  const [blog, setBlog] = useState(null);

  useEffect(() => {
    let blog = blogList.find((blog) => blog.id === parseInt(id));
    if (blog) {
      setBlog(blog);
    }
  }, []);

  return (
    <>
      {blog ? (
        <div className='blog-single-wrap'>
          <div className="common-wrap clear">
            <div className="blog-single-inner">
                <div className="blog-single-query">
                  <dfn className='blog-date'>Published {blog.createdAt}</dfn>
                    <h1>{blog.title}</h1>
                    <p class="title-description">{blog.titleDesc}</p>
                    <figure>
                      <img src={blog.cover} alt='cover' />
                    </figure>
                    <p className='blog-desc' >{blog.description}</p>
                </div>
                <div className="blog-single-contents">
                  <p>{blog.subText}</p>
                </div>
              </div>
          </div>
        </div>
      ) : (
        <EmptyList />
      )}


    <section class="blog-notes-wrap">
      <div class="common-wrap clear">
        <h2>Notes:</h2>
        <div class="blog-main-notes" >
          <p>Never ever think of giving up. Winners never quit and quitters never win. Take all negative words out of your mental dictionary and focus on the solutions with utmost conviction and patience. The battle is never lost until you’ve abandon your vision.</p>
        </div>
        <div class="blog-notes-thumbnail" >
          <figure>
            <img src="img/blog-single/blogNotesThumbnail1.png" alt=""/>
          </figure>
          <figure>
            <img src="img/blog-single/blogNotesThumbnail2.png" alt=""/>
          </figure>
        </div>
      </div>
    </section>

    </>
  );
};

export default BlogSingle;
