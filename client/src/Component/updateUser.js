import React from "react";
import { REMOVE_USER_MUTATION } from "../GraphQL/Mutation";
import { useMutation } from "@apollo/client";
import { GraphQLInt } from "graphql";
import {DeleteFilled, UserSwitchOutlined} from '@ant-design/icons'

function UpdateUser() {

    return(
        <a >Delete<DeleteFilled /></a>
    )
}

export default UpdateUser