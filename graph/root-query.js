const { User , Tweet } = require('../models/index');
const { UserType , TweetType } = require('./schema');
const { GraphQLObjectType, GraphQLID, GraphQLList } = require('graphql');
const { users, tweets } = require('../dummy-data');

module.exports =  new GraphQLObjectType({
    name: 'RootQueryType',
    fields: {
        user: {
            type: UserType,
            args: { id: { type: GraphQLID }},
            resolve(parent,args){
                return User.findById(args.id);
            }
        },
        users: {
            type: new GraphQLList(UserType),
            resolve(parent,args){
                return User.find();
            }
        },
        tweet: {
            type: TweetType,
            args: {id: { type: GraphQLID }},
            resolve(parent,args){
                return Tweet.findById(args.id);
            }
        },
        tweets: {
            type: new GraphQLList(TweetType),
            resolve(parent,args){
                return Tweet.find();
            }
        }
    }
});