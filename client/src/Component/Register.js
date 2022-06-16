import { useMutation } from "@apollo/client";
import { Button, Form, Input } from "antd";
import ErrorList from "antd/lib/form/ErrorList";
import React, { useState } from "react";
import { REGISTER_USER_MUTATION } from "../GraphQL/Mutation";



function Register() {
    const [username,setUsername] = useState(null)
    const [password,setPassword] = useState(null)
    const [comfirmpassword,setComfirmpassword] = useState(null)
    const [email,setEmail] = useState(null)
    const [registerUser,{error}] = useMutation(REGISTER_USER_MUTATION);
    const register =(e)=>{
        // e.preventDefault()
        registerUser({
            variables:{
                username:username,
                password:password,
                comfirmpassword:comfirmpassword,
                email:email,
            }
        })
        setUsername(null)
        setPassword(null)
        setComfirmpassword(null)
        setEmail(null)
    }
            return(
                <Form onFinish={register}>
                    <Input
                    type="text" 
                    name="username"
                    placeholder="Username"
                    value={username}
                    onChange={(e)=>{
                        setUsername(e.target.value)
                    }}
                    />
                    <Input
                    type="password" 
                    name="password"
                    placeholder="Password"
                    value={password}
                    onChange={(e)=>{
                        setPassword(e.target.value)
                    }}
                    />
                    <Input
                    type="password" 
                    name="comfirm password"
                    placeholder="Comfirm Password"
                    value={comfirmpassword}
                    onChange={(e)=>{
                        setComfirmpassword(e.target.value)
                    }}
                    />
                    <Input
                    type="email" 
                    name="email"
                    placeholder="E-mail"
                    value={email}
                    onChange={(e)=>{
                        setEmail(e.target.value)
                    }}
                    />
                    <Button htmlType="submit" type="primary">Register</Button>
                </Form>
            ) 
            
        
    
}
export default Register;