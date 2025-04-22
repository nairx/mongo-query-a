db.students.insertOne({
  studentName: "John",
});

db.subjects.insertOne({
  subjectName: "Science",
});

db.marks.insertOne({
  studentId: ObjectId("680762c710180e78792f45e2"),
  subjectId: ObjectId("680762db10180e78792f45e3"),
  score: 95,
});

db.marks.aggregate([
  {
    $lookup: {
      from: "subjects",
      localField: "subjectId",
      foreignField: "_id",
      as: "subjects",
    },
  },
  {$unwind:"$subjects"},
  {
    $lookup:{
        from:"students",
        localField:"studentId",
        foreignField:"_id",
        as:"students"
    }
  },
  {$unwind:"$students"},
  {$project:{_id:0,"students.studentName":1,"subjects.subjectName":1,score:1}}
]);
