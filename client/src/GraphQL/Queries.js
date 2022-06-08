import {gql} from '@apollo/client';

export const LOAD_USERS = gql`
            query{
                getAllUsers{
                id
                Gender
                first_name
                last_name
                Address
                Note
                ID_card_number
                Phone_Number
                }
            }

`