import { LockOutlined, UserOutlined } from "@ant-design/icons";
import { Button, Col, Form, Image, Input, Row } from "antd";
import { useState } from "react";
import logo from '../img/login.png'
import  './LoginCom.css'
import PropTypes from 'prop-types';
import { LOAD_USERS } from "../GraphQL/Queries";
import { useQuery } from "@apollo/client";
import {useNavigate} from 'react-router-dom'

// async function loginUser(credentails){
//     return fetch('http://localhost:6969/login',{
//         method:'POST',
//         headers:{
//             'Content-Type': 'application/json'
//         },
//         body:JSON.stringify(credentails)
//     }).then(data => data.json())
// }


function LoginCom({setToken}) {
    const navigate = useNavigate();
    const [username,setUsername] = useState('')
    const [password,setPassword] = useState('')
    
    // console.log(username,password);
    // const handlelogin = async e => {
    //     // e.preventDefault();
    //     const response = await loginUser({
    //         username,
    //         password
    //     });
    //     // if('userData' in response)
    //     console.log(response);
    //     setToken(response);
    // }


    return(
        <>
        
            <Row>
                <Col span={6}>
                    <Image src={logo} preview={false}/>
                </Col>
                <Col span={18}>
                    <Form name="loginform"  >
                            <Form.Item label='Username' name='Username'  rules={[{required:true, message:'กรุณากรอก Username!'}]}>
                            <Input prefix={<UserOutlined/>}   placeholder="Username" onChange={(e)=>{setUsername(e.target.value)}}/>
                            </Form.Item>
                            <Form.Item label='Password' name='Password' rules={[{required:true, message:'กรุณากรอก Password!'}]}>
                            <Input prefix={<LockOutlined/>}  type="password" placeholder="Password" onChange={(e)=>{setPassword(e.target.value)}}/>
                            </Form.Item>
                            <div className='btn-pos'>
                            <Button type="primary" htmlType="submit">Apply</Button>
                            <Button type="danger" htmlType="reset">Cancel</Button>
                            </div>
                    </Form>                            
                </Col>
            </Row>
        
        </>
    )
}
// LoginCom.propTypes ={
//     setToken:PropTypes.func.isRequired
// }
export default LoginCom;