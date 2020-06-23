const  {UserType , TweetType} = require('./schema');
const { GraphQLObjectType, GraphQLID, GraphQLList } = require('graphql');
const { users, tweets } = require('../dummy-data');

module.exports =  new GraphQLObjectType({
    name: 'RootQueryType',
    fields: {
        user: {
            type: UserType,
            args: { id: { type: GraphQLID }},
            resolve(parent,args){
                return users.filter(user => user.id === args.id);
            }
        },
        users: {
            type: new GraphQLList(UserType),
            resolve(parent,args){
                return users;
            }
        },
        tweet: {
            type: TweetType,
            args: {id: { type: GraphQLID }},
            resolve(parent,args){
                return tweets.filter(tweet => tweet.id === args.id);
            }
        },
        tweets: {
            type: new GraphQLList(TweetType),
            resolve(parent,args){
                return tweets;
            }
        }
    }
});