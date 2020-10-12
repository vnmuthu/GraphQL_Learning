import express from 'express';
import { graphqlHTTP } from 'express-graphql';
import schema from './schema';

const app = express();

app.get('/', (req, res) => {
    res.send('My first GraphQL!!!');
});

const root = { hello: () => "Hi, I am Muthu" };

app.use('/graphql', graphqlHTTP({
    schema: schema,
    rootValue: root,
    graphiql: true,
}));

app.listen(8081, () => console.log('Running server on port http://localhost:8081/graphql'));
