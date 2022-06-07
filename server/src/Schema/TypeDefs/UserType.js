
const graphql = require("graphql");
const { GraphQLObjectType,   GraphQLString, GraphQLInt  } = graphql

const UserType = new GraphQLObjectType({
    name: "User",
    fields: ()=>({
        id:{type:GraphQLInt},
        Gender:{type:GraphQLString},
        first_name:{type:GraphQLString},
        last_name:{type:GraphQLString},
        Address:{type:GraphQLString},
        ID_card_number:{type:GraphQLInt},
        Phone_Number:{type:GraphQLInt},
        Note:{type:GraphQLString},

    }),
});

module.exports = UserType