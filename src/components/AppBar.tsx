// import React from 'react'

import { Link } from "react-router-dom"

const AppBar = () => {
  return (
    <div className="border-b flex justify-between px-10 py-4">
        <Link to="/blogs" className="flex justify-center flex-col"> 
            <div className="flex justify-center flex-col text-lg cursor-pointer"> Medium </div>
        </Link>
        <div>
            <Link to='/publish'>
                <button type="button" className="mr-8 text-white bg-green-700 hover:bg-green-800 focus:outline-none focus:ring-4 focus:ring-green-300 font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"> New </button>
            </Link>
            <Avatar name="Siddhesh" />
        </div>
    </div>
  )
}

interface AvatarProps {
    name: string
}
export function Avatar({name}: AvatarProps) {
    return (
        <div className="relative inline-flex items-center justify-center w-10 h-10 overflow-hidden bg-gray-100 rounded-full dark:bg-gray-600 mr-1">
            <span className="font-medium text-gray-600 dark:text-gray-300"> {name.slice(0,1).toUpperCase()}</span>
        </div>
    )
}

export default AppBar