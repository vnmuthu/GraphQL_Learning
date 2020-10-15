import express from 'express';
import { graphqlHTTP } from 'express-graphql';
import schema from './schema';
import resolvers from './resolvers';

const app = express();
const root = resolvers;

app.get('/', (req, res) => {
    res.send('My first GraphQL!!!');
})

app.use('/graphql', graphqlHTTP({
    schema: schema,
    rootValue: root,
    graphiql: true
}))

app.listen(8085, ()=> console.log("Running server on port http://localhost:8085/graphql"));
