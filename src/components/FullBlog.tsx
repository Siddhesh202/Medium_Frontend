// import React from 'react'
import AppBar from './AppBar'
import {Blog} from '../hooks/index'
import { htmlToText } from '../pages/Publish'

const FullBlog = ({blog}: {blog: Blog}) => {
  return (
    <div>
        <AppBar />
        <div className='grid grid-cols-12 px-20 w-full pt-[20px]'>
            <div className='col-span-8'> 
                <div className='text-3xl font-extrabold'> {blog.title} </div>
                <div className='font-extralight pt-2 pb-4'> Posted on March 22, 2024 </div>
                <div className=''> {htmlToText({htmlContent: blog.content})} </div>
            </div>
            <div className='col-span-4 pl-6'>
                <div className='text-lg'>
                    Author
                </div>

                <div className='flex pt-4 w-full'>
                    <div className='pr-3 flex justify-center flex-col'>
                        <Avatar name={blog.author.name[0].toUpperCase() || "Anonymous"} />
                    </div>
                    <div>
                        <div className='text-xl font-bold'>
                            {`${blog.author.name[0].toUpperCase()}${blog.author.name.slice(1)}` || "Anonymous"}
                        </div>
                        <div className='pt-2 text-slate-500'>
                            Random catchphrase about author's ability to grab the users attention
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    )
}

export function Avatar({name}: {name: string}) {
    return (
        <div className="relative inline-flex items-center justify-center w-8 h-8 overflow-hidden bg-gray-100 rounded-full dark:bg-gray-600 mr-1">
            <span className="font-medium text-gray-600 dark:text-gray-300"> {name.slice(0,1).toUpperCase()}</span>
        </div>
    )
}
export default FullBlog