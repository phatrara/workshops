const express = require("express");
const app = express();
const PORT = 6969;
const cors = require('cors');
const {graphqlHTTP} = require("express-graphql");
const schema = require('./Schema/index');
const userData = require('./IDPASS.json')

app.use(cors());
app.use('/graphql',graphqlHTTP({
    schema,
    graphiql:true
}))
app.use('/login',(req,res)=>{
    res.send({
        token:'Testtoken',
        user:userData
    })
})

app.listen(PORT, ()=>{
    console.log("Server running");
    console.log('API is running on http://localhost:6969/login');
})
async function post(parent, args, context, info) {
    const { userId } = context;
  
    let postedBy = undefined
    if (userId) {
      postedBy = { connect: { id: userId } }
    }
  
    const newLink = await context.prisma.link.create({
        data: {
          url: args.url,
          description: args.description,
          postedBy
        }
      });
    
    context.pubsub.publish('NEW_LINK', newLink);  // not important for now
  
    return newLink;
  }

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