// import React from 'react'

import AppBar from "../components/AppBar"
import BlogCard from "../components/BlogCard"
import BlogSkeleton from "../components/BlogSkeleton";
import { useBlogs } from "../hooks"

const Blogs = () => {
  const {loading, blogs} = useBlogs();

  if(loading) {
    return(
      <div>
        <div className="sticky top-0">
          <AppBar />
        </div>
        <div className="mx-auto max-w-xl">
          <BlogSkeleton />
          <BlogSkeleton />
          <BlogSkeleton />
          <BlogSkeleton />
          <BlogSkeleton />
      </div>
      </div>
    )

  }

  return (
    <div>
      <div className="sticky top-0 z-1 bg-white">
        <AppBar />
      </div>
      <div className="mx-auto max-w-xl">

        { blogs.map(blog => <BlogCard 
          id={blog.id}
          authorName={blog.author.name || "Anonymous"}
          title= {blog.title}
          content={blog.content}
          publishedDate= "2nd March 2024"
        />)}
        
      </div>
    </div>
  )
}

export default Blogs