import { tasks } from './sample';

export const resolvers = {
	Query: {
		hello: () => {
			return 'xd World with GraphQL';
		},
		greet(root, args) {
			console.log(args);
			return `Hello ${args.name}`;
		},
		tasks() {
			return tasks;
		},
	},
	Mutation: {
		createTask(_, { input }) {
			input._id = tasks.length;
			tasks.push(input);
			return input;
		},
	},
};
