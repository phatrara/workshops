

const graphql = require("graphql");
const { GraphQLObjectType, GraphQLSchema , GraphQLString, GraphQLInt, GraphQLList,GraphQLNonNull } = graphql

const studentData = require('../MOCK_DATA.json');
const StudentType = require("./TypeDefs/TypeStudent")
const UserType = require('./TypeDefs/TypeUser');
const userData = require('../IDPASS.json')


let number = 10;
let numberU = 10;



const RootQuery = new GraphQLObjectType({
    name:"RootQueryType",
    fields:{
        getAllStudent: {
            type: new GraphQLList(StudentType),
            args: {id: {type:GraphQLInt}},
            resolve(parent,args){
                return studentData
            }
        },
        getAllUsers:{
            type: new GraphQLList(UserType),
            args:{id:{type:GraphQLInt}},
            resolve(_,args){
                return userData
            }
        }
        
    }
})
const Mutation = new GraphQLObjectType({
    name: "Mutation",
    fields:{
        createStudent:{
            type: StudentType,
            args:{
                Gender:{type:GraphQLString},
                first_name:{type:GraphQLString},
                last_name:{type:GraphQLString},
                Address:{type:GraphQLString},
                ID_card_number:{type:GraphQLString},
                Phone_Number:{type:GraphQLString},
                Note:{type:GraphQLString},
            },
            resolve(parent,args){
                studentData.push({
                    id:number=number+1,
                    first_name:args.first_name,
                    last_name:args.last_name,
                    Address:args.Address,
                    ID_card_number:args.ID_card_number,
                    Phone_Number:args.Phone_Number,
                    Note:args.Note,
                    Gender:args.Gender
                })
                return args
            }
        },
        removeStudent:{
            type: StudentType,
            args:{
                id:{type: GraphQLInt},
            },
            resolve(parent,args){
                // const i = userData.find(e=>e===id)
                const i = studentData.findIndex(e=>e.id == args.id)
                // const i = userData.filter((e) => e.id )
                // console.log('i =',i); 
                studentData.splice( i ,1)
                // console.log('userData = ',userData);
                return args
            }
        },
        updateStudent:{
            type: StudentType,
            args:{
                id:{type: GraphQLInt},
                first_name:{type:GraphQLString},
                last_name:{type:GraphQLString},
                Address:{type:GraphQLString},
                ID_card_number:{type:GraphQLString},
                Phone_Number:{type:GraphQLString},
                Note:{type:GraphQLString},
                Gender:{type:GraphQLString},
            },
            resolve(parent,args){
                // const i = userData.filter(e=>e.id)
                // const i = userData.findIndex(e=>e.id === args.id)
                // userData.splice(i,1,{...args})
                const i = studentData.findIndex(e=>e.id === args.id)
                console.log({...args});
                studentData.splice(i,1,{...args})
            }
        },
        registerUser:{
            type: UserType,
            args:{
                username:{type:GraphQLString},
                password:{type:GraphQLString},
                comfirmpassword:{type:GraphQLString},
                email:{type:GraphQLString},
            },
            resolve(parent,args){
                userData.push({
                    id:numberU=numberU+1,
                    username:args.username,
                    password:args.password,
                    email:args.email,
                })
                return args
            }
        }
    }
})


module.exports = new GraphQLSchema({query: RootQuery , mutation:Mutation})
