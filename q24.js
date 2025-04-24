create a  folder mongoreplica

inside create 3 new folders
data1, data2, and data3

start mongod -replSet rs1 -logpath d:\mongo-replica\data1\1.log --dbpath d:\mongo-replica\data1\ --port 27018

start mongod -replSet rs1 -logpath d:\mongo-replica\data2\2.log --dbpath d:\mongo-replica\data2\ --port 27019

start mongod -replSet rs1 -logpath d:\mongo-replica\data3\3.log --dbpath d:\mongo-replica\data3\ --port 27020

mongosh --port 27018
config={_id:"rs1",members:[{_id:0,host:"127.0.0.1:27018"},{_id:1,host:"127.0.0.1:27019"},{_id:2,host:"127.0.0.1:27020"}]}
rs.initiate(config)
rs.config()
rs.status()
