const { GraphQLObjectType, GraphQLID, GraphQLString, GraphQLList } = require("graphql");
const { users, tweets } = require('../dummy-data');

const UserType = new GraphQLObjectType({
    name: 'User',
    fields: () => ({
        id: { type: GraphQLID },
        username: {type: GraphQLString },
        tweets: {
            type: new GraphQLList(TweetType),
            resolve(parent,args){
                return tweets.filter( tweet => tweet.ownerId === parent.id);
            }
        },
        reTweets: {
            type: new GraphQLList(TweetType),
            resolve(parent,args){
                return tweets.filter(tweet => tweet.reTweetedBy.includes(parent.id));
            }
        }
    })
});

const TweetType = new GraphQLObjectType({
    name: 'Tweet',
    fields: () => ({
        id: { type: GraphQLID },
        text: { type: GraphQLString },
        owner: {
            type: UserType,
            resolve(parent,args){
                return users.filter(user => user.id === parent.ownerId )[0];
            }
        },
        reTweetedBy: {
            type: new GraphQLList(UserType),
            resolve(parent,args){
                return users.filter(user => parent.reTweetedBy.includes(user.id));
            }
        }
    })
});

module.exports = {
    UserType,
    TweetType
}