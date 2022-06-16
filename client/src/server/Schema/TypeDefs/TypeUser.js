const graphql = require("graphql");
const { GraphQLObjectType,   GraphQLString ,GraphQLInt  } = graphql


const UserType = new GraphQLObjectType({
    name: "User",
    fields: ()=>({
        id:{type:GraphQLInt},
        username:{type:GraphQLString},
        password:{type:GraphQLString},
        comfirmpassword:{type:GraphQLString},
        email:{type:GraphQLString},
    }),
});

module.exports = UserType;