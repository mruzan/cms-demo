const seeder = require('mongoose-seed');
const config = require('config');

const Mood = require('../models/Mood');

seeder.connect(config.DATABASE_URL, () => {
  seeder.clearModels(['Mood'], async () => {
    const data = [
      {
        model: 'Mood',
        documents: [
          {
            "mood_id": 1,
            "content": "Oops, something needs to change. Thank you for your Feedback.",
            "smiley": "VeryUnhappy",
          },
          {
            "mood_id": 2,
            "content": "Mmmmh, things should improve. Thank you for your Feedback.",
            "smiley": "Unhappy",
          },
          {
            "mood_id": 3,
            "content": "OK… things could be better. Thank you for your Feedback.",
            "smiley": "Neutral",
          },
          {
            "mood_id": 4,
            "content": "Great! Thank you for your Feedback.",
            "smiley": "Happy",
          },
          {
            "mood_id": 5,
            "content": "Awesome! Thank you for your Feedback.",
            "smiley": "VeryHappy",
          },
        ],
      },
    ];
    seeder.populateModels(data, () => {
      seeder.disconnect();
    });
  });
});
