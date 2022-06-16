const graphql = require("graphql");
const { GraphQLObjectType,   GraphQLString ,GraphQLInt  } = graphql

const  StudentType = new GraphQLObjectType({
    name: "Student",
    fields: ()=>({
        id:{type:GraphQLInt},
        Gender:{type:GraphQLString},
        first_name:{type:GraphQLString},
        last_name:{type:GraphQLString},
        Address:{type:GraphQLString},
        ID_card_number:{type:GraphQLString},
        Phone_Number:{type:GraphQLString},
        Note:{type:GraphQLString},

    }),
});


module.exports = StudentType