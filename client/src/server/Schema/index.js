

const graphql = require("graphql");
const { GraphQLObjectType, GraphQLSchema , GraphQLString, GraphQLInt, GraphQLList } = graphql

const userData = require('../MOCK_DATA.json');
const UserType = require("./TypeDefs/UserType")

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
                    id:userData.length + 1,
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
        }
    }
})


module.exports = new GraphQLSchema({query: RootQuery , mutation:Mutation})
