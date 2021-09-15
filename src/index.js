import epxress from 'express';
import { graphqlHTTP } from 'express-graphql';
import schema from './schema';

const app = epxress();

app.get('/', (req, res) => {
	res.json({
		message: 'Hello World',
	});
});

app.use(
	'/graphql',
	graphqlHTTP({
		graphiql: true,
		schema: schema,
	}),
);

app.listen(3333, () => console.log('Server on port 3333'));
