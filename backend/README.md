# **API Document**


#### **List all the schools with search & filter options**
  ~~~~
Method : GET

Endpoint: /v1/mode/{id}/questions

request params

`{
 	"id":"2"
 }`
 
 `
 {   
    "statusCode": 200,
    "message": "success",
    "data": {
        "questions": [
            {
                "category": "Management",
                "question": "My direct manager gives me necessary support and clear objectives.",
                "status": 1,
                "_id": "60aa2502b1f09a10f1c1c626",
                "createdAt": "2021-05-23T09:48:50.679Z",
                "updatedAt": "2021-05-23T09:48:50.679Z",
                "__v": 0
            },
            {
                "category": "Workplace",
                "question": "I like my work environment, and I believe it helps me perform at my best.",
                "status": 1,
                "_id": "60aa2502b1f09a59b1c1c627",
                "createdAt": "2021-05-23T09:48:50.680Z",
                "updatedAt": "2021-05-23T09:48:50.680Z",
                "__v": 0
            },
            {
                "category": "Roles and Responsibilities",
                "question": "I am satisfied with my roles and responsibilities",
                "status": 1,
                "_id": "60aa2502b1f09aeaa1c1c628",
                "createdAt": "2021-05-23T09:48:50.680Z",
                "updatedAt": "2021-05-23T09:48:50.680Z",
                "__v": 0
            },
            {
                "category": "Work/Life Balance",
                "question": "I feel like I have a healthy work/life balance.",
                "status": 1,
                "_id": "60aa2502b1f09ab020c1c62a",
                "createdAt": "2021-05-23T09:48:50.680Z",
                "updatedAt": "2021-05-23T09:48:50.680Z",
                "__v": 0
            },
            {
                "category": "Teamwork",
                "question": "I feel comfortable working and interacting with the colleagues on my team.",
                "status": 1,
                "_id": "60aa2502b1f09a246bc1c629",
                "createdAt": "2021-05-23T09:48:50.680Z",
                "updatedAt": "2021-05-23T09:48:50.680Z",
                "__v": 0
            }
        ],
        "mood": {
            "mood_id": "4",
            "content": "Great! Thank you for your Feedback.",
            "smiley": "Happy",
            "_id": "60aa24fe325de109e8a76526"
        }
    },
    "error": null,
    "errorMessage": null
}
 `
   ~~~~
## **To run the project**
 ~~~~
To install dependencies and start the app
========================================
npm install && npm start
It will start the server with port 8001 


Run the seeders
========================================
node seeders/questionSeeder.js
node seeders/moodSeeder.js
 