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
import deleteTableRows from './updateUser'


function GetUsers()  {

  const [removeUser,{error}] = useMutation(REMOVE_USER_MUTATION);
  const {loading,data,refetch} = useQuery(LOAD_USERS);
  const [users,setUsers] = useState([]);



  useEffect(()=>{
      if (data) {
      setUsers(data.getAllUsers)
      // console.log(data.getAllUsers);
      }
  },[data])
  console.log(users.map((e)=>e.id));

  const handleChange = (index, evnt)=>{
    
    const { name, value } = evnt.target;
    const rowsInput = [...users];
    rowsInput[index][name] = value;
    setUsers(rowsInput);
 
}

const deleteTableRows=(index)=> {
  console.log(index);
  // const rows = [...users]
  // this.setUsers({users:this.state.users.filter((e) => e.id !== index)})
  // const rows = users.filter((e) => e.id !== index);
  // const rows = users.splice(index, 1);
  // setUsers(rows)
  removeUser({
      variables:{
          id:index
      }
  },).then(refetch)
  // console.log(index);
}

// const saveChange = input =>{
//   setIsOpen(false);
//   removeUser({
//     variables:{
//         id:index
//     }
// }).then(refetch);
// }
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
              <Button type="link" onClick={()=>(deleteTableRows(record.id))}  >Delete<DeleteFilled /></Button>
              {/* <UpdateUser/> */} 
            </Space>
            </>
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
              </Col>
              {/* <UpdateUser/> */}
            
            {/* <Child name={query.get("id")} />
            <Input  type="text"/>
            <Button>Apply</Button> */}
          </Row>
        {/* {users.map((val)=>{ return <h1>{val.first_name}</h1>  })}             */}
        </div>
        )
}
     
export default GetUsers;


