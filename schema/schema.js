const graphql = require('graphql');
const { GraphQLString, GraphQLInt } = require('graphql');
const _ = require('lodash');

const {
  GraphQLObjectType,
  //GraphQLString,
  //GraphQLInt
} = graphql;

const users = [
  { id: '23', firstName: 'Jason', age: 20 },
  { id: '46', firstName: 'Alexis', age: 54 },
];

const UserType = new GraphQLObjectType({
  name: 'User',
  fields: {
    id: { type: GraphQLString },
    firstName: { type: GraphQLString },
    age: { type: GraphQLInt },
  }
});

const RootQuery = new GraphQLObjectType({
  name: 'RootQueryType',
  fields: {
    user: {
      type: UserType,
      args: { id: { type: GraphQLString } },
      resolve(parentValue, args) {
        return _.find(users, { id: args.id });
      },
    }
  }
});