import './NavComponent.css'
import React from 'react';



const NavBar =()=>{
    const Login = ()=>{
        return <a href='/'>Login</a>       
    }
    const Signup =()=>{
        return <a href='/'>Sign Up</a>
    }
    const Contact =()=>{
        return <a href='/'>ติดต่อเรา</a>
    }
    const InsertStudent = ()=>{
        return <a href='/'>ลงทะเบียนนักเรียน</a>
    }
    const CheckStudent = ()=>{
        return  <a href='/'>ตรวจสอบข้อมูลนักเรียน</a>
    }
    const EditeStudent = ()=>{
        return <a href='/'>แก้ไข/ลบข้อมูลนักเรียน</a>
    }
    const DataStudent=()=>{
        return(
        <div>
            <ul className='ul-link'>
                <li><InsertStudent/></li>
                <li><CheckStudent/></li>
                <li><EditeStudent/></li>
            </ul>
        </div>
        )
    }
    const Homepage = ()=>{
        return <a href='/'>หน้าหลัก</a>
    }
    return (
        <div className='nav-container'>
            <ul className='ul-link'>
                <li className='box' id='1'>
                    <Homepage/>
                </li>
                <li className='box' id='2'>
                    <DataStudent/>
                </li>
                <li className='box' id='3'>
                    <Contact/>
                </li>
                <li className='box' id='4'>
                    <Login/>
                </li>
                <li className='box' id='5'>
                    <Signup/>
                </li>
            </ul>
        </div>
    )
}

export default NavBar;