const seeder = require('mongoose-seed');
const config = require('config');

const Question = require('../models/Question');

seeder.connect(config.DATABASE_URL, () => {
  seeder.clearModels(['Question'], async () => {
    const data = [
      {
        model: 'Question',
        documents: [
          {
            "category": "Management",
            "question": "My direct manager gives me necessary support and clear objectives.",
          },
          {
            "category": "Workplace",
            "question": "I like my work environment, and I believe it helps me perform at my best.",
          },
          {
            "category": "Roles and Responsibilities",
            "question": "I am satisfied with my roles and responsibilities",
          },
          {
            "category": "Teamwork",
            "question": "I feel comfortable working and interacting with the colleagues on my team.",
          },
          {
            "category": "Work/Life Balance",
            "question": "I feel like I have a healthy work/life balance.",
          },
        ],
      },
    ];
    seeder.populateModels(data, () => {
      seeder.disconnect();
    });
  });
});
