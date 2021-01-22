import React from 'react';
import blogPosts from 'util/blogPosts';
import BlogPost from './BlogPost';

const Blog = ({ mode }) => {
  return (
    <div className={`ask-bg-${mode} container-fluid text-center py-5 ask-full-page`}>
      <div className='row mb-2'>
        <div className='col'>
          <h1 className='ask-nav'>BLOG</h1>
        </div>
      </div>
      <div className='row mb-5'>
        <div className='col'>
          <h3 className='ask-nav'>Come learn about stuff I discovered while creating trivia, but didn't want to ask questions about!</h3>
        </div>
      </div>

    { blogPosts.map((post, i) => <BlogPost key={post.id} mode={mode} post={post} index={i} />)}

    </div>
  );
}

export default Blog;
