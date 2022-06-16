import React, { useEffect, useState } from "react";
import { REMOVE_STUDENT_MUTATION } from "../GraphQL/Mutation";
import { useMutation, useQuery } from "@apollo/client";
import {DeleteFilled} from '@ant-design/icons'
import { Button } from "antd";
import { LOAD_USERS } from "../GraphQL/Queries";


function UpdateUser() {
    const [removeStudent,{error}] = useMutation(REMOVE_STUDENT_MUTATION)
    const {loading,data} = useQuery(LOAD_USERS);
    const [users,setUsers] = useState([]);
    useEffect(()=>{
        if (data) {
        setUsers(data.getAllUsers)
        // console.log(data.getAllUsers);
        }
    },[data])
    const deleteTableRows=(index)=> {
        const rows = [...users]
        rows.splice(index, 1);
        setUsers(rows)
        removeStudent({
            variables:{
                id:index+1
            }
        })
      }
      const handleChange = (index, evnt)=>{
    
        const { name, value } = evnt.target;
        const rowsInput = [...users];
        rowsInput[index][name] = value;
        setUsers(rowsInput);
     
    }
 
                return(
                    users.map((data,index)=>{
                        const {first_name,last_name,Address,ID_card_number,Phone_Number,Gender,Note} = data;
                        return(
                        <div>
                           <Button type="link" onClick={()=>(deleteTableRows(index))} >Delete<DeleteFilled /></Button>
                        </div>
                        )
                      })
                );
    
    
}

export default UpdateUser