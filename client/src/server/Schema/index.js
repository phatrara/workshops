

const graphql = require("graphql");
const { GraphQLObjectType, GraphQLSchema , GraphQLString, GraphQLInt, GraphQLList,GraphQLNonNull } = graphql

const userData = require('../MOCK_DATA.json');
const UserType = require("./TypeDefs/UserType")

let number = 10;



const RootQuery = new GraphQLObjectType({
    name:"RootQueryType",
    fields:{
        getAllUsers: {
            type: new GraphQLList(UserType),
            args: {id: {type:GraphQLInt}},
            resolve(parent,args){
                return userData
            }
        }
        
    }
})
const Mutation = new GraphQLObjectType({
    name: "Mutation",
    fields:{
        createUser:{
            type: UserType,
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
                userData.push({
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
        removeUser:{
            type: UserType,
            args:{
                id:{type: GraphQLInt},
            },
            resolve(parent,args){
                // const i = userData.find(e=>e===id)
                const i = userData.findIndex(e=>e.id == args.id)
                // const i = userData.filter((e) => e.id )
                // console.log('i =',i); 
                userData.splice( i ,1)
                // console.log('userData = ',userData);
                return args
            }
        },
        updateUser:{
            type: UserType,
            args:{
                id:{type: GraphQLInt},
                first_name:{type:GraphQLString},
                last_name:{type:GraphQLString},
                Address:{type:GraphQLString},
                ID_card_number:{type:GraphQLString},
                Phone_Number:{type:GraphQLString},
                Note:{type:GraphQLString},
            },
            resolve(parent,args){
                const i = userData.findIndex(e=>e.id == args.id)
                userData.splice(i,1,{...args})
            }
        }
    }
})


module.exports = new GraphQLSchema({query: RootQuery , mutation:Mutation})
