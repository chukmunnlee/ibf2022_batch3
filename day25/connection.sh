
#Windows
set SPRING_DATASOURCE_URL=jdbc:mysql://__USERNAME__:__YOUR_PASSWORD__@containers-us-west-192.railway.app:7872/railway
set SPRING_DATA_MONGODB_URI=mongodb://__USERNAME__:__YOUR_PASSWORD__@containers-us-west-121.railway.app:7269/?authSource=admin

#OSX
export SPRING_DATASOURCE_URL="jdbc:mysql://containers-us-west-192.railway.app:7872/railway"
export SPRING_DATASOURCE_USERNAME="__USERNAME__"
export SPRING_DATASOURCE_PASSWORD="__YOUR_PASSWORD__"
export SPRING_DATA_MONGODB_URI="mongodb://mongo:__YOUR_PASSWORD__@containers-us-west-121.railway.app:7269/mydb?authSource=admin"
