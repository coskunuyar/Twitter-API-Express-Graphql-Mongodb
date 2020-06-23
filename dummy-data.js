module.exports = {
    users: [
        { id: "1" , username: "coskun" },
        { id: "2" , username: "veli" }
    ],
    tweets: [
        { id:"1" , ownerId: "1" , reTweetedBy: ["2"] , text: "Hello World 1"},
        { id:"2" , ownerId: "2" , reTweetedBy: ["1"] , text: "Hello World 2"},
    ]
}