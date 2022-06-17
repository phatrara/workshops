import React, { useEffect, useState } from "react";
import {useQuery,gql, useMutation} from '@apollo/client';
import {LOAD_STUDENT} from '../GraphQL/Queries'
import customStyles from "./TablecustomStyles";
import { Button, Col, Form, Input, Row, Space, Table,Modal} from 'antd';
import {EditOutlined,DeleteFilled} from '@ant-design/icons'
import UpdateUser from "./updateUser";
import { REMOVE_STUDENT_MUTATION } from "../GraphQL/Mutation";
import { UPDATE_STUDENT_MUTAION } from "../GraphQL/Mutation";
import { QueryDocumentKeys } from "graphql/language/ast";
import {useLocation} from 'react-router-dom'
import deleteTableRows from './updateUser'



function GetUsers()  {

  const [removeStudent,{error}] = useMutation(REMOVE_STUDENT_MUTATION);
  const [updateStudent] = useMutation(UPDATE_STUDENT_MUTAION);
  const {loading,data,refetch} = useQuery(LOAD_STUDENT);
  const [student,setStudent] = useState([]);
  const [editrow,setEditrow] = useState(null);
  const [formdata] = Form.useForm();
  const [newData,setNewData] = useState([]);
  // const [isedit,setIsedit] = useState(false);
console.log(data);


  useEffect(()=>{
      if (data) {
      setStudent(data.getAllStudent)
      // console.log(data.getAllUsers);
      }
  },[data])
  // console.log(users.map((e)=>e.id));

const deleteTableRows=(index)=> {
  console.log(index);
  Modal.confirm({
    title:'คุณแน่ในที่จะลบข้อมูลใช่ไหม',
    okText:'Yes',
    cancelText:'No',
    onOk:()=>{
        removeStudent({
      variables:{
          id:index
      }
  },).then(refetch)
  
    },
    
  })
  
  // const rows = [...users]
  // this.setUsers({users:this.state.users.filter((e) => e.id !== index)})
  // const rows = users.filter((e) => e.id !== index);
  // const rows = users.splice(index, 1);
  // setUsers(rows)

  // console.log(index);
}
// const editUser = (record)=>{
//   setIsedit(true);
//   setEditrow({...record})
// }



const updateUserrow =(values)=>{
  // const updateDataUser = [...users]
  // console.log('value Data = ',values.first_name);
  // const i = users.findIndex(e=>e.id === editrow)
  // updateDataUser.splice(i,1,{...values,id:editrow})
  // console.log(editrow);
  // setUsers(updateDataUser)
  setEditrow(null)
  console.log('value Data2 = ',values.first_name);
  updateStudent({
    variables:{
      id:editrow,
      first_name:values.first_name,
      last_name:values.last_name,
      Gender:values.Gender,
      Address:values.Address,
      ID_card_number:values.ID_card_number,
      Phone_Number:values.Phone_Number,
      Note:values.Note,
    }
  }).then(refetch);
  // console.log('');
  // console.log('formdata fn',formdata.first_name);
  // console.log('formdata',formdata);

  // window.location.reload();
  // console.log('updateusers',updateDataUser);
  // console.log('users',users);
}
//   console.log('data = ',updateDataUser);
  console.log('student Data = ',student);
// }
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
          render:(text,record)=>{
            if(editrow === record.id){
             return <Form.Item
             name="first_name"
             rules={[{
              required:true,
              message:'กรุณากรอกข้อมูล ชื่อจริง'
             }]}>
                <Input />
              </Form.Item>
            }else{
              return <p>{text}</p>
            }
          }
        },
        {
            title: 'นามสกุล',
            dataIndex: 'last_name',
            key: 'last_name',
            render:(text,record)=>{
              if(editrow === record.id){
               return <Form.Item
               name="last_name"
               rules={[{
                required:true,
                message:'กรุณากรอกข้อมูล นามสกุล'
               }]}>
                  <Input/>
                </Form.Item>
              }else{
                return <p>{text}</p>
              }
            }
          },
          {
            title: 'เพศ',
            dataIndex: 'Gender',
            key: 'Gender',
            render:(text,record)=>{
              if(editrow === record.id){
               return <Form.Item
               name="Gender"
               rules={[{
                required:true,
                message:'กรุณากรอกข้อมูล เพศ'
               }]}>
                  <Input/>
                </Form.Item>
              }else{
                return <p>{text}</p>
              }
            }
          },
        {
          title: 'ที่อยู่',
          dataIndex: 'Address',
          key: 'Address',
          render:(text,record)=>{
            if(editrow === record.id){
             return <Form.Item
             name="Address"
             rules={[{
              required:true,
              message:'กรุณากรอกข้อมูล ที่อยู่'
             }]}>
                <Input/>
              </Form.Item>
            }else{
              return <p>{text}</p>
            }
          }
        },
        {
          title: 'เลขบัตรประชาชน',
          dataIndex: 'ID_card_number',
          key: 'ID_card_number',
          render:(text,record)=>{
            if(editrow === record.id){
             return <Form.Item
             name="ID_card_number"
             rules={[{
              required:true,
              message:'กรุณากรอกข้อมูล เลขบัตรประชาชน'
             }]}>
                <Input/>
              </Form.Item>
            }else{
              return <p>{text}</p>
            }
          }
        },
        {
            title: 'เบอร์โทร',
            dataIndex: 'Phone_Number',
            key: 'Phone_Number',
            render:(text,record)=>{
              if(editrow === record.id){
               return <Form.Item
               name="Phone_Number"
               rules={[{
                required:true,
                message:'กรุณากรอกข้อมูล เบอร์โทร'
               }]}>
                  <Input/>
                </Form.Item>
              }else{
                return <p>{text}</p>
              }
            }
          },
          {
            title: 'หมายเหตุ',
            dataIndex: 'Note',
            key: 'Note',
            render:(text,record)=>{
              if(editrow === record.id){
               return <Form.Item
               name="Note"
               >
                  <Input />
                </Form.Item>
              }else{
                return <p>{text}</p>
              }
            }
          },
        {
          title: 'Action',
          key: 'action',
        render: (_, record) => {
          return (
          <>
          <Space size="middle">
            {/* <Button type="link" onClick={()=>{
              editUser(record);
            }}>EEDDIITT</Button> */}
            <Button type="link" onClick={()=>{
              setEditrow(record.id)
              formdata.setFieldsValue({
                first_name:record.first_name,
                last_name:record.last_name,
                Address:record.Address,
                ID_card_number:record.ID_card_number,
                Phone_Number:record.Phone_Number,
                Note:record.Note,
                Gender:record.Gender,
              })
              console.log(record.id);
            }}>Edit</Button>
            <Button type="link" htmlType="submit">save</Button>
            {/* <a >Edit<EditOutlined /> {record.name}</a> */}
            <Button type="link" onClick={()=>(deleteTableRows(record.id))}  >Delete<DeleteFilled /></Button>
            {/* <UpdateUser/> */}
            
          </Space>
          </>

        )}
        },

      ];
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
    dataSource={student}
    size='middle'
    />

        return(
        <div>
          <Row justify="center"span={16}>
            <Col span={24}>
              <Form form={formdata} onFinish={updateUserrow}>
              <Getalluser />
              {/* <Modal
              title='Edit Data.'
              visible={isedit}
              okText='Save'
              onCancel={()=>{
                resetEdit()
              }}
              onOk={()=>{
                setUsers(pre=>{
                  return pre.map(e=>{
                    if(e.id === isedit.id){
                      return isedit
                    }else{
                      return e
                    }
                  })
                })
              }}>
                <Input value={editrow?.first_name} onChange={(e)=>{setEditrow(pre=>{
                  return {...pre,first_name:e.target.value}
                })}}/>
              </Modal>  */}
              </Form>
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


