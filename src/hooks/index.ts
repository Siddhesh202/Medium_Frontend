import { useEffect, useState } from "react"
import axios from "axios";
import { BACKEND_URL } from "../config";
import Blog from "../pages/Blog";

export interface Blog{
    content: string,
    title: string,
    id: string,
    author: {
        name: string
    }
}

export const useBlog = ({id} : {id: string}) => {
    const [loading, setLoading] = useState(true);
    const [blog, setBlog] = useState<Blog>();

    useEffect(() => {
        // console.log(`Bearer ${localStorage.getItem('token')}`);
        axios.get(`${BACKEND_URL}/api/v1/blog/${id}`, {
            headers: {
                Authorization: `Bearer ${localStorage.getItem('token')}`
            }
        })
        .then((response) => {
            // console.log(response.data.blogs);
            response.data.content.replace(/<[^>]+>/g, '');
            setBlog(response.data);
            setLoading(false);
        })
    }, [id]);


    return {
        loading,
        blog
    }
}   
export const useBlogs = () => {
    const [loading, setLoading] = useState(true);
    const [blogs, setBlogs] = useState<Blog[]>([]);

    useEffect(() => {
        // console.log(`Bearer ${localStorage.getItem('token')}`);
        axios.get(`${BACKEND_URL}/api/v1/blog/bulk`, {
            headers: {
                Authorization: `Bearer ${localStorage.getItem('token')}`
            }
        })
        .then((response) => {
            console.log(response.data.posts);
            const posts = response.data.posts.map((post:Blog) => {
                return { ...post, content: post.content.replace(/<[^>]+>/g, '')};
            });
            setBlogs(posts);
            setLoading(false);
        })
    }, []);


    return {
        loading,
        blogs
    }
}