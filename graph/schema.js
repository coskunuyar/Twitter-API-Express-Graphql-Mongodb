const { User , Tweet } = require('../models/index');
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
                return Tweet.find().where('ownerId').equals(parent.id);
            }
        },
        reTweets: {
            type: new GraphQLList(TweetType),
            resolve(parent,args){
                return Tweet.find().where('reTweetedBy').in(parent.id);
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
                return User.findById(parent.ownerId);
            }
        },
        reTweetedBy: {
            type: new GraphQLList(UserType),
            resolve(parent,args){
                return User.find().where("_id").in(parent.reTweetedBy);
            }
        }
    })
});

module.exports = {
    UserType,
    TweetType
}