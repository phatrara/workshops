import React, { useEffect, useState } from "react";
import {useQuery,gql, useMutation} from '@apollo/client';
import {LOAD_USERS} from '../GraphQL/Queries'
import customStyles from "./TablecustomStyles";
import { Button, Col, Input, Row, Space, Table} from 'antd';
import {EditOutlined,DeleteFilled} from '@ant-design/icons'
import UpdateUser from "./updateUser";
import { REMOVE_USER_MUTATION } from "../GraphQL/Mutation";
import { QueryDocumentKeys } from "graphql/language/ast";
import {useLocation} from 'react-router-dom'


function GetUsers() {
  const [removeUser,{error}] = useMutation(REMOVE_USER_MUTATION);
  const {loading,data} = useQuery(LOAD_USERS);
  const [users,setUsers] = useState([]);
  useEffect(()=>{
      if (data) {
      setUsers(data.getAllUsers)
      // console.log(data.getAllUsers);
      }
  },[data])
  console.log(users);
  const handleDeleteRow=(index)=> {
    const rows = [...users]
    rows.splice(index, 1);
    setUsers(rows)
  }
  // console.log(query.id);
  // const userRemove = (e) =>{
  //   console.log(users.id);
  //   // removeUser({
  //   //   variables:{id:users.id},
  //   // });
  // };
  // const handleDelete = (index, e) => {
  //   setUsers(users.filter((User, i) => i !== index));
  // };
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
              <Button type="link" onClick={handleDeleteRow} >Delete<DeleteFilled /></Button>
              
            </Space></>
          ),
        },
      ];
      console.log('');
      // function useQuery() {
      //   const { search } = useLocation();
      
      //   return React.useMemo(() => new URLSearchParams(search), [search]);
      // }
      // const query = useQuery();
      // function Child({ id }) {
      //   return (
      //     <div>
      //       {id ? (
      //         <h3>
      //           The <code>id</code> in the query string is &quot;{id}
      //           &quot;
      //         </h3>
      //       ) : (
      //         <h3>There is no id in the query string</h3>
      //       )}
      //     </div>
      //   );
      // }

      const onFinish = ()=>{
        
        removeUser({
          variables:{
              id:users.getAllUsers.id
          }
          
      })

            if (error){
                console.log(error);
            }
    };

    const Getalluser = () => 
    <Table 
    columns={columns} 
    dataSource={users}
    size='middle'
    />;
    
    

        return(
        <div>
          <Row justify="center"span={16}>
            <Col span={24}>
            <Getalluser />
            <UpdateUser/>
            {/* <Child name={query.get("id")} />
            <Input  type="text"/>
            <Button>Apply</Button> */}
            </Col>
          </Row>
        {/* {users.map((val)=>{ return <h1>{val.first_name}</h1>  })}             */}
        </div>
        )
     
}

export default GetUsers;


