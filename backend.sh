docker-compose run --service-ports backend npm install
docker-compose run --service-ports backend node seeders/moodSeeder.js
docker-compose run --service-ports backend node seeders/questionSeeder.js
docker-compose run -d --service-ports backend npm start