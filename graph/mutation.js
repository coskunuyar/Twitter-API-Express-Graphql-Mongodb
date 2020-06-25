const { User , Tweet } = require('../models/index');
const { GraphQLObjectType, GraphQLString, GraphQLID } = require("graphql");
const { UserType, TweetType } = require("./schema");

module.exports = new GraphQLObjectType({
    name: 'Mutation',
    fields: {
        addUser: {
            type: UserType,
            args: {
                username: { type: GraphQLString }
            },
            resolve(parent,args){
                let user = new User({ username: args.username });
                return user.save();
            }
        },
        addTweet: {
            type: TweetType,
            args: {
                text: { type: GraphQLString },
                ownerId: { type: GraphQLID },
            },
            resolve(parent,args){
                let tweet = new Tweet({ text: args.text , ownerId: args.ownerId , reTweetedBy: []});
                return tweet.save();
            }
        },
        reTweet: {
            type: TweetType,
            args: {
                tweetId: { type: GraphQLID },
                userId: { type: GraphQLID },
            },
            async resolve(parent,args){
                let tweet = await Tweet.findById(args.tweetId);
                tweet.reTweetedBy.push(args.userId);
                return tweet.save();
            }
        }
    }
})