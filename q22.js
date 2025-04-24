//use admin

db.createUser({
  user: "admin",
  pwd: "admin",
  roles: [{ role: "root", db: "admin" }],
});

add following settings in mongod.conf available in program files / mongodb
security:
  authorization: enabled

restart mongodb server

mongosh -username admin -password admin

mongosh --username admin --authenticationDatabase admin

//use mydb

db.createUser({
    user:"user1",
    pwd:"1234",
    roles:[{role:"read",db:"mydb"}]
})