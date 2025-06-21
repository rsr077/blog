import  { type Post } from "../hooks"

   
import { Appbar } from "./Appbar"
import { Avatar } from "./BlogCard"

export const FullBlog = ({post}: {post:Post}) => {
  return <div>
    <Appbar/>
    <div className="flex justify-center">  
     <div className="grid grid-cols-12 px-10 w-full pt-200 max-w-screen-2xl">
      <div className=" col-span-8">
        <div className="text-5xl font-extradbold">
          {post.title} 
        </div>
        <div className="text-slate-500 pt-2">
             Post on 2nd December 2023
        </div>
        <div className="pt-4">
          {post.content}
        </div>
      </div>
        <div className=" col-span-4">

          <div className="text-slate-600 text-lg">
               Author
          </div>
         

              <div className="flex w-full">
               <div className="pr-4 flex flex-col justify-center">
                   <Avatar name={post.author.name || "Anonymous"} size={"small"}/>
               </div>
              <div>

            
           <div className="text-xl font-bold">
               {post.author.name || "Anonymous"}
     
           </div>
                <div className="pt-2 text-slate-500">
                  Random catch phrase about the author's ability  to grab the user's attention 
                </div>
              </div>
            </div>
          
        </div>
     </div>
  </div>
  </div>
 
}