import React, { useEffect, useState } from "react";
import { REMOVE_USER_MUTATION } from "../GraphQL/Mutation";
import { useMutation, useQuery } from "@apollo/client";
import {DeleteFilled} from '@ant-design/icons'
import { Button } from "antd";
import { LOAD_USERS } from "../GraphQL/Queries";


function UpdateUser() {
    const {loading,data} = useQuery(LOAD_USERS);
    const [users,setUsers] = useState([]);
    useEffect(()=>{
        if (data) {
        setUsers(data.getAllUsers)
        // console.log(data.getAllUsers);
        }
    },[data])
    const handleDeleteRow=(index)=> {
        const rows = [...users]
        rows.splice(index, 1);
        setUsers(rows)
      }
 
                return(
                    users.map((data,index)=>{
                        const {first_name,last_name,Address,ID_card_number,Phone_Number,Gender,Note} = data;
                        return(
                        <div>
                           <Button type="link" onClick={()=>(handleDeleteRow(index))} >Delete<DeleteFilled /></Button>
                        </div>
                        )
                      })
                );
    
    
}

export default UpdateUser