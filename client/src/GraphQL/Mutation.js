import {gql} from '@apollo/client';


export const CREATE_USER_MUTATION = gql`

mutation createUser(
    $Gender:String!
    $first_name:String!
    $last_name:String!
    $Address:String!
    $ID_card_number:String!
    $Phone_Number:String!
    $Note:String!

){
    createUser(
        Gender:$Gender
        first_name:$first_name
        last_name:$last_name
        Address:$Address
        ID_card_number:$ID_card_number
        Phone_Number:$Phone_Number
        Note:$Note
    ){
        id
    }
}


`;

export const REMOVE_USER_MUTATION = gql`

mutation removeUser($id:Int!){
    removeUser(id:$id){
      id
    }
  }


`;