import { useState } from "react";
import type { ChangeEvent } from "react";
import {Link, useNavigate} from "react-router-dom";
import type { SignupInput } from "@rsr0775656454/medium-commons";
import axios from "axios";
import { BACKEND_URL  } from "../config"


//trpc 
export const Auth = ({ type }: { type: "signup" | "signin" }) => {
const navigate = useNavigate();

   const [postInputs ,setPostInput ]= useState<SignupInput>({
     name: "",
     email: "",
     password: ""

   });


   async function sendRequest() {

    try {
   const response = await axios.post(`${BACKEND_URL}/api/v1/user/${type === "signup" ? "signup" : "signin"}`, postInputs);

   console.log("Signup response:", response.data);


     const jwt = response.data.token  || response.data.jwt;
     localStorage.setItem("token", jwt);
     navigate("/blogs");

   } catch(e) {
    
   }
  
  }


   return  <div className="h-screen flex justify-center flex-col">


    <div className="flex justify-center  ">
     
     <div className="px-10">  

      <div className="text-3xl font-extrabold">
        Create an account 
     </div>

         <div> 
         <div className="text-slate-500 ">
            {type === "signin" ? "Don't have an account ? " : "Aleready have an account ? "}


           <Link className="pl-2 underline" to={ type === "signin" ? "/signup" : "/signin"}> {type === "signin" ? "Sign up" : "Sign in"}</Link>
         </div>
      </div>


          <div className="pt-8"> 

      { type === "signup" ?  <LabelledInput label="Name" placeholder="Rsr...." onChange={(e) => {

          setPostInput ({
            ...postInputs,
            name: e.target.value 
            
          })
   
        }}/> : null}

          <LabelledInput label="Username" placeholder="rajeev4342@gmail.com" onChange={(e) => {

          setPostInput ({
            ...postInputs,
            email: e.target.value 
          })

        }}/>




   

          <LabelledInput label="Password" type={"password"}  
          placeholder="123456" onChange={(e) => {

          setPostInput ({
            ...postInputs,
            password: e.target.value 
          })

        }}/>

             <button onClick={sendRequest} type="button" className="mt-8 w-full text-white bg-gray-800 hover:bg-gray-900  foucs:outline-none  focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700">{ type === "signin" ? "Sign in": "Sign up"}</button>
        </div>
        </div>

        </div>
        </div>



}
         
             interface LabelledInputType {
               label: string;
               placeholder: string;
               onChange: (e: ChangeEvent<HTMLInputElement>) => void;
               type?: string;
            }
 



        function LabelledInput({label, placeholder,  onChange, type}: LabelledInputType) {
           return <div>
              <label htmlFor="first_name" className="block mb-2 text-sm font-semibold text-black ">{label}</label>
              <input onChange={onChange} type={type || "text"} id="first_name" className="bg-gray-50 border border-gray-300  text-gray-900  text-sm  rounded-lg focus: ring-blue-500 focus:border-blue-500 block w-80 p-2.5  "  placeholder={placeholder} required /> 
           </div>
        }

      