https://www.mongodb.com/try/download/database-tools

after installation

create a folder example bck

open the folder and goto cmd

mongodump -d mydb -o d:\bck

db.dropDatabase("mydb")

mongorestore -d mydb d:/bck/mydb



mongorestore