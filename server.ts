import express from 'express';
// import graphqlHTTP from 'express-graphql';

// import basicSchema from './schemas/basic';

const server = express();

// var root = {
//     hello: () => {
//         return 'Hello world!';
//     }
// };

// server.use(
//     '/graphql',
//     graphqlHTTP({
//         schema: basicSchema,
//         rootValue: root,
//         graphiql: true
//     })
// );

server.listen(3000, () => {
    console.log('gqlets listening on port 3000!');
});
