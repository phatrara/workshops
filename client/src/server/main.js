const express = require("express");
const app = express();
const PORT = 6969;
const cors = require('cors');
const {graphqlHTTP} = require("express-graphql");
const schema = require('./Schema/index');

app.use(cors());
app.use('/graphql',graphqlHTTP({
    schema,
    graphiql:true
}))
app.listen(PORT, ()=>{
    console.log("Server running")
})


// app.use(cors({
//     origin: '*',
//     methods: ['GET','POST','DELETE','UPDATE','PUT','PATCH','OPTIONS']
// }));
// app.options('*', cors());

// app.all('/*', function(req, res, next) {
//     res.header("Access-Control-Allow-Origin", "*");
//     res.header("Access-Control-Allow-Headers", "X-Requested-With");
//     next();
//   });