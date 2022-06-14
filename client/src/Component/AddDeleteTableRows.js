
import { useMutation, useQuery } from "@apollo/client";
import { useState,useEffect } from "react";
import { REMOVE_USER_MUTATION } from "../GraphQL/Mutation";
import { LOAD_USERS } from "../GraphQL/Queries";
import TableRows from "./TableRows"


function AddDeleteTableRows(){
    const [removeUser,{error}] = useMutation(REMOVE_USER_MUTATION)
    const {loading,data} = useQuery(LOAD_USERS)
    const [rowsData, setRowsData] = useState([]);
    useEffect(()=>{
        if (data) {
        setRowsData(data.getAllUsers)
        // console.log(data.getAllUsers);
        }
    },[data])
    
 
    const addTableRows = ()=>{
  
        const rowsInput={
            fullName:'',
            emailAddress:'',
            salary:''  
        } 
        setRowsData([...rowsData, rowsInput])
      
    }
   const deleteTableRows = (index)=>{
        const rows = [...rowsData];
        rows.splice(index, 1);
        setRowsData(rows);
        removeUser({
            variables:{
                id:index+1
            }
        })
        
   }
 
   const handleChange = (index, evnt)=>{
    
    const { name, value } = evnt.target;
    const rowsInput = [...rowsData];
    rowsInput[index][name] = value;
    setRowsData(rowsInput);
 
}
console.log(rowsData);
    return(
        <div className="container">
            <div className="row">
                <div className="col-sm-8">
                <table className="table">
                    <thead>
                      <tr>
                          <th>Full Name</th>
                          <th>Email Address</th>
                          <th>ID</th>
                          <th><button className="btn btn-outline-success" onClick={addTableRows} >+</button></th>
                      </tr>
                    </thead>
                   <tbody>
                   <TableRows rowsData={rowsData} deleteTableRows={deleteTableRows} handleChange={handleChange} />
                   </tbody> 
                </table>
                </div>
                <div className="col-sm-4">
                </div>
            </div>
        </div>
    )
}
export default AddDeleteTableRows