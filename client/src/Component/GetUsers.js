import React, { useEffect, useState } from "react";
import {useQuery,gql, useMutation} from '@apollo/client';
import {LOAD_USERS} from '../GraphQL/Queries'
import customStyles from "./TablecustomStyles";
import { Col, Row, Space, Table} from 'antd';
import {EditOutlined,DeleteFilled} from '@ant-design/icons'
import UpdateUser from "./updateUser";
import { REMOVE_USER_MUTATION } from "../GraphQL/Mutation";



function GetUsers() {
    
    const columns = [
        {
            title: 'ลำดับ',
            dataIndex: 'id',
            key: 'id',
          },
        {
          title: 'ชื่อจริง',
          dataIndex: 'first_name',
          key: 'first_name',
        },
        {
            title: 'นามสกุล',
            dataIndex: 'last_name',
            key: 'last_name',
          },
        {
          title: 'ที่อยู่',
          dataIndex: 'Address',
          key: 'Address',
        },
        {
          title: 'เลขบัตรประชาชน',
          dataIndex: 'ID_card_number',
          key: 'ID_card_number',
        },
        {
            title: 'เบอร์โทร',
            dataIndex: 'Phone_Number',
            key: 'Phone_Number',
          },
          {
            title: 'หมายเหตุ',
            dataIndex: 'Note',
            key: 'Note',
          },
        {
          title: 'Action',
          key: 'action',
          render: (_, record) => (
            <>
            <Space size="middle">
              <a >Edit<EditOutlined /> {record.name}</a>
              <a onFinish={onFinish} dataIndex={users.id} key={users.id}>Delete<DeleteFilled /></a>
            </Space></>
          ),
        },
      ];
      
      const onFinish = ()=>{
        
        removeUser({
            variables:{
                id:users.id
            }
        })

            if (error){
                console.log(error);
            }
    };
    const [removeUser,{error}] = useMutation(REMOVE_USER_MUTATION);
    const {loading,data} = useQuery(LOAD_USERS);
    const [users,setUsers] = useState([]);
    useEffect(()=>{
        if (data) {
        setUsers(data.getAllUsers)
        console.log(data.getAllUsers);
        }
    },[data])
    const Getalluser = () => 
    <Table 
    columns={columns} 
    dataSource={users}
    size='middle'
    />;
    return (
    
        <div>
          <Row justify="center"span={16}>
            <Col span={24}>
            <Getalluser/>
            </Col>
          </Row>
        {/* {users.map((val)=>{ return <h1>{val.first_name}</h1>  })}             */}
        </div>
    )
}

export default GetUsers;


