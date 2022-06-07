import React, { useEffect } from "react";
import {useQuery,gql} from '@apollo/client';
import {LOAD_USERS} from '../GraphQL/Queries'


function GetUsers() {
    const {loading,error,data} = useQuery(LOAD_USERS);

    useEffect(()=>{
        console.log(data)
    },[data])

    return(
        <div>
            
        </div>
    )
}

export default GetUsers;


