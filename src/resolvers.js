export const resolvers = {
	Query: {
		hello: () => {
			return 'xd World with GraphQL';
		},
		greet(root, args) {
			console.log(args);
			return `Hello ${args.name}`;
		},
	},
};
