module.exports = {
    users: [
        { id: "1" , username: "coskun" },
        { id: "2" , username: "veli" },
    ],
    tweets: [
        { id:"1" , ownerId: "1" , reTweetedBy: ["2"] , text: "999asdas a9sdas9"},
        { id:"2" , ownerId: "2" , reTweetedBy: ["1"] , text: "123qwdasdas waw"},
        { id:"3" , ownerId: "2" , reTweetedBy: ["1"] , text: "asdams aömsda "},
        { id:"4" , ownerId: "1" , reTweetedBy: ["1"] , text: "asdasd asdsad sada"},
    ]
}