db.posts.aggregate([
  {
    $lookup: {
      from: "authors",
      localField: "authorId",
      foreignField: "_id",
      as: "author",
    },
  },
  {
    $project: {
      _id: 0,
      title: 1,
      desc: 1,
      "author.name": 1,
    },
  },
]);

//////////

db.authors.aggregate([
  {
    $lookup: {
      from: "posts",
      localField: "_id",
      foreignField: "authorId",
      as: "posts",
    },
  },
  { $unwind: "$posts" },
]);

db.authors.aggregate([
  {
    $lookup: {
      from: "posts",
      localField: "_id",
      foreignField: "authorId",
      as: "posts",
    },
  },
  { $match: { "posts.title": "title 5" } },
]);

db.authors.aggregate([
  {
    $lookup: {
      from: "posts",
      localField: "_id",
      foreignField: "authorId",
      as: "posts",
    },
  },
  { $match: { "posts.title": "title 5" } },
  { $unwind: "$posts" },
]);

db.authors.aggregate([
  {
    $lookup: {
      from: "posts",
      let: { authorId: "$_id" },
      pipeline: [
        { $match: { $expr: { $eq: ["$authorId", "$$authorId"] } } },
        { $match: { $expr: { $eq: ["$title", "title 5"] } } },
      ],
      as:"posts"
    },
  },
  {$unwind:"$posts"}
]);

db.posts.insertOne({
  title: "title 75",
  desc: "desc 75",
  authorId: ObjectId("68075aff10180e78792f45df"),
});

db.authors.insertOne({
  name: "John",
  email: "john@email.com",
});
