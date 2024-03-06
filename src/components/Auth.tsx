// import React from 'react'
import { Link, useNavigate } from "react-router-dom"
import { ChangeEvent, useState } from "react"
import { SignupType } from "@siddhesh30/common"
import { BACKEND_URL } from "../config"
import axios from "axios"

const Auth = ({type}: {type: "signup" | "signin"}) => {
    const [postInputs, setPostInputs] = useState<SignupType>({
        name: "",
        email: "",
        password: ""
    })
    const navigate = useNavigate();

    async function sendRequest() {
        try{
            const response = await axios.post(`${BACKEND_URL}/api/v1/user/${type==="signup"? "signup" : "signin"}`, postInputs);
            const jwt = response.data;
            localStorage.setItem("token", jwt);
            navigate('/blogs');
        }catch(e){

        }
    }

    return (
        <div className="h-screen flex justify-center flex-col">
            <div className="text-3xl font-bold mx-auto">
                Create an account
            </div>
            <div className="text-slate-400 font-light mx-auto mb-8">
                {type === "signin" ? "Don't have an account? " : "Already have an account?"}
                <Link to={type === "signin" ? "/signup" : "/signin"} className="underline ml-1"> {type === "signin" ? "Signup" : "Login"} </Link>
            </div>

            { type === "signup" ? 
                <Labelledinput label="Name" placeholder="Enter your name" onChange={(e) => {
                    setPostInputs({
                        ...postInputs,
                        name: e.target.value
                    })
                    // console.log(e.target.value)
                }} /> : null
            }
            <Labelledinput label="Email" placeholder="Enter your email" onChange={(e) => {
                setPostInputs({
                    ...postInputs,
                    email: e.target.value
                })
                // console.log(e.target.value)
            }} />
            <Labelledinput label="Password" type={"password"} placeholder="Enter your password" onChange={(e) => {
                setPostInputs({
                    ...postInputs,
                    password: e.target.value
                })
                // console.log(e.target.value)
            }} />

            <div className="mx-auto mt-4">
            <button type="button" className="text-white text-xl bg-gray-800
            hover:bg-gray-900 focus:outline-none focus:ring-4 
            focus:ring-gray-300 font-medium rounded-lg 
            py-2.5 mb-2 dark:bg-black w-[400px]" onClick={sendRequest}> {type==="signup" ? "Signup" : "Signin"}</button>
            </div>

        </div>
    )
}

interface LabelledInputType {
    label: string,
    placeholder: string,
    onChange: (e: ChangeEvent<HTMLInputElement>) => void,
    type?: string,
}

function Labelledinput({label, type, placeholder, onChange}: LabelledInputType) {
    return (
        <div className="mx-auto mb-5">
            <label className="block ml-1 mb-2 text-sm font-semibold text-gray-900 dark:text-black">{label}</label>
            <input onChange={onChange} type={type || "text"} id="first_name" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-[400px] p-2.5 dark:border-gray-600 dark:placeholder-gray-400 dark:text-black" placeholder={placeholder} required />
        </div>
    )
}

export default Auth