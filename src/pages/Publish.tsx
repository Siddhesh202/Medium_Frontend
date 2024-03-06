// import React from 'react'
import JoditEditor from "jodit-react"
import {useRef, useState } from "react"
import AppBar from "../components/AppBar";
import axios from "axios";
import { BACKEND_URL } from "../config";
import DOMPurify from 'dompurify';

const Publish = () => {
  const editor = useRef(null);
  const [content, setContent] = useState('');
  const [title, setTitle] = useState('');

  const updateTitle = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTitle(e.target.value);
    console.log(title);
  }

  const publishPost = async () => {
    // console.log(content)
    console.log(localStorage.getItem('token'))
    axios.post(`${BACKEND_URL}/api/v1/blog`, {
        title,
        content
      },
      {
        headers: {
          Authorization: `Bearer ${localStorage.getItem('token')}`
        }
      }).then(response => { 
        console.log(response);
        setTitle('');
        setContent('');
      });
  }

	return (
    <div className="bg-slate-50 h-[100vh]">
      <div className="bg-white">
        <AppBar />
      </div>
      <div className="w-[900px] bg-white mx-auto p-4 mt-3">
        <div className="text-3xl font-bold mb-4">
          What's going in your mind ? 
        </div>
        <div className="mb-6">
          <div className="mb-3 text-lg"> Post Title </div>
          <input type="text" onChange={updateTitle} placeholder="Enter Title Here" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"/>
        </div>
        <div>
          <div className="mb-3 text-lg"> Post Content </div>
          <JoditEditor
            ref={editor}
            value={content}
            onChange={newContent => setContent(newContent)}
          />
        </div>
        <div className="mt-4">
          <button type="submit" onClick={publishPost} className="text-white bg-blue-700 hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Publish Post </button>
        </div>
      </div>
    </div>
	);
}

export function htmlToText ({ htmlContent } : {htmlContent: string}){
  const sanitizedHtml = DOMPurify.sanitize(htmlContent);
  return (
    <div dangerouslySetInnerHTML={{ __html: sanitizedHtml }} />
  );
};

export default Publish