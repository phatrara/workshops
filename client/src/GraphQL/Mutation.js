import {gql} from '@apollo/client';


export const CREATE_STUDENT_MUTATION = gql`

mutation createStudent(
    $Gender:String!
    $first_name:String!
    $last_name:String!
    $Address:String!
    $ID_card_number:String!
    $Phone_Number:String!
    $Note:String!

){
    createStudent(
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

export const REMOVE_STUDENT_MUTATION = gql`

mutation removeStudent($id:Int!){
    removeStudent(id:$id){
        id
    }
}


`;

export const UPDATE_STUDENT_MUTAION = gql`

mutation updateStudent(
    $id:Int!
    $first_name:String!
    $last_name:String!
    $Address:String!
    $ID_card_number:String!
    $Phone_Number:String!
    $Note:String!
    $Gender:String!
    ){
    updateStudent(
        id:$id
        first_name:$first_name
        last_name:$last_name
        Address:$Address
        ID_card_number:$ID_card_number
        Phone_Number:$Phone_Number
        Note:$Note
        Gender:$Gender
        ){
        id
        Gender
        first_name
        last_name
        Address
        ID_card_number
        Phone_Number
        Note
    }
}
`;

export const REGISTER_USER_MUTATION = gql`

mutation registerUser(
    $username:String!,
    $password:String!,
    $comfirmpassword:String!,
    $email:String!,
){
    registerUser(
        username:$username,
        password:$password,
        comfirmpassword:$comfirmpassword,
        email:$email,
    ){
        token
    }
}


`;

export const LOGIN_USER_MUTATION = gql`

mutation loginUser(
    $username:String!,
    $password:String!,
){
    loginUser(
      username: $username
      password: $password
    ) {
      token
    }
  }

`;