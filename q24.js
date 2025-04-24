create a  folder mongoreplica

inside create 3 new folders
data1, data2, and data3

start mongod -replSet rs1 -logpath d:\mongo-replica\data1\1.log --dbpath d:\mongo-replica\data1\ --port 27018

start mongod -replSet rs1 -logpath d:\mongo-replica\data2\2.log --dbpath d:\mongo-replica\data2\ --port 27019

start mongod -replSet rs1 -logpath d:\mongo-replica\data3\3.log --dbpath d:\mongo-replica\data3\ --port 27020