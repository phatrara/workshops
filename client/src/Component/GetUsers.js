import React, { useEffect, useState } from "react";
import {useQuery,gql} from '@apollo/client';
import {LOAD_USERS} from '../GraphQL/Queries'
import DataTable from "react-data-table-component";
import customStyles from "./TablecustomStyles";
import { Space, Table } from 'antd';

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
            <Space size="middle">
              <a>Invite {record.name}</a>
              <a>Delete</a>
            </Space>
          ),
        },
      ];


  
    const {loading,error,data} = useQuery(LOAD_USERS);
    const [users,setUsers] = useState([]);
    useEffect(()=>{
        if (data) {
        setUsers(data.getAllUsers)
        console.log(data.getAllUsers);

        }
    },[data])
    const Appt = () => <Table customStyles={customStyles} columns={columns} dataSource={users}/>;
    return (
    
        <div>
        {/* {users.map((val)=>{ return <h1>{val.first_name}</h1>  })}             */}
        <Appt/>
        </div>
    )
}

export default GetUsers;


