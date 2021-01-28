import React from 'react';

const BlogPost = ({ mode, post, index }) => {
  const background = index % 2 > 0 ? `ask-bg-${mode}` : 'ask-rounds-bg text-white';

  return (
    <div className={`row p-4 ${background}`}>
      <div className='col'>
        <h3 className='ask-nav'>{post.title}</h3>
        <p className='ask-nav text-secondary mb-3'>{post.date}</p>
        <h5 className='ask-text' style={{ lineHeight: '150%' }}>{post.content}</h5>
      </div>
    </div>
  )
}

export default BlogPost;
