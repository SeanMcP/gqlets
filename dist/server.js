"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
// import graphqlHTTP from 'express-graphql';
// import basicSchema from './schemas/basic';
var server = express_1.default();
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
server.listen(3000, function () {
    console.log('gqlets listening on port 3000!');
});
