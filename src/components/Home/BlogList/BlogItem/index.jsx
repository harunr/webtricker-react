import React from 'react';
import { Link } from 'react-router-dom';

const BlogItem = ({
  blog: {
    description,
    title,
    createdAt,
    cover,
    id,
  },
}) => {
  return (
    <Link className='blogItem-wrap' to={`/blog/${id}`}>
      <figure>
        <img className='blogItem-cover' src={cover} alt='cover' />
      </figure>
      <div className="blogItem-content">
        <h3>{title}</h3>
        <p className='blogItem-desc'>{description}</p>
        <em>{createdAt}</em>
        <div className="read-more">Read More</div>
      </div>
    </Link>
  );
};

export default BlogItem;
