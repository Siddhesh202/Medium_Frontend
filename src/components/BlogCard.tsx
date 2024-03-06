import { Link } from "react-router-dom"

// import React from 'react'
interface BlogCardProps {
    id: string
    authorName: string,
    title: string,
    content: string,
    publishedDate: string
}

const BlogCard = ({id, authorName, title, content, publishedDate} : BlogCardProps) => {
  return (
    <Link to={`/blog/${id}`}>
    <div className="border-b p-4 border-slate-200 max-w-screen-lg">
        <div className="flex">
            <div className="flex justify-center flex-col"> <Avatar name={authorName} /> </div>
            <div className=" font-medium pr-1"> {authorName} </div>
            <div className="text-[4px] flex justify-center flex-col text-slate-500"> &#9679; </div>
            <div className="font-thin pl-1 text-slate-500">  { publishedDate} </div>
        </div>
        <div className="text-xl pt-2 font-semibold mb-1">
            { title }
        </div>
        <div className="text-md font-extralight">
            {content.length > 100 ? content.slice(0, 100) + "..." : content}
        </div>
        <div className="text-slate-500 pt-4 text-sm font-thin">
            {`${Math.ceil(content.length/100)} min read` }
        </div>
    </div>
    </Link>
  )
}

interface AvatarProps {
    name: string
}
export function Avatar({name}: AvatarProps) {
    return (
        <div className="inline-flex items-center justify-center w-5 h-5 overflow-hidden bg-gray-100 rounded-full dark:bg-gray-600 mr-1">
            <span className="font-medium text-gray-600 dark:text-gray-300"> {name.slice(0,1).toUpperCase()}</span>
        </div>
    )
}

export default BlogCard