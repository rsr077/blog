import axios from "axios";
import { useEffect, useState } from "react";
import { BACKEND_URL } from "../config";

export interface Post {
   "content" : string;
   "title" : string;
   "id" : number
   "author": {
     "name": string
   }
}


 export  const useBlog = ({id} : {id :string }) => {

    
const [loading, setLoading] = useState(true);
const [blog, setBlog] = useState<Post>();

useEffect(() => {
  if (!id) return;

  axios.get(`${BACKEND_URL}/api/v1/blog/${id}`, {
    headers: {
      Authorization: localStorage.getItem("token")
    }
  })
  .then(response => {
    setBlog(response.data.blog); // ✅ match backend key
  })
  .catch(error => {
    console.error("Error fetching blog:", error);
  })
  .finally(() => {
    setLoading(false);
  });
}, [id]);

return {
  loading,
  blog

  
};

       
 }
 




export const useBlogs = () => {
  const [loading, setLoading] = useState(true);
  const [blogs, setBlogs] = useState<Post[]>([]);



 
  useEffect(() => {
    axios.get(`${BACKEND_URL}/api/v1/blog/bulk`, {
      headers: {
        Authorization: localStorage.getItem("token")
      }
     
      
    })
    .then(response => {
      setBlogs(response.data.blogs);
    })
    .catch(error => {
      console.error("Error fetching blogs:", error);
    })
    .finally(() => {
      setLoading(false);
    });
  }, []);

  return {
    loading,
    blogs
  };
};
