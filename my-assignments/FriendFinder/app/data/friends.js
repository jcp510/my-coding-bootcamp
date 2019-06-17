var friends = [

  {
    "name": "Tyrion Lannister",
    "photo": "https://www.hbo.com/content/dam/hbodata/series/game-of-thrones/character/s5/tyrion-lannister-512x512.jpg/_jcr_content/renditions/cq5dam.web.260.260.jpeg",
    "scores": [

    ]
  },

  {
    "name": "Sansa Stark",
    "photo": "https://www.hbo.com/content/dam/hbodata/series/game-of-thrones/character/s5/sansa-stark-512x512.jpg/_jcr_content/renditions/cq5dam.web.260.260.jpeg",
    "scores": []
  },

  {
    "name": "Sandor Clegane",
    "photo": "https://www.hbo.com/content/dam/hbodata/series/game-of-thrones/character/s5/sandor-clegane-512x512.jpg/_jcr_content/renditions/cq5dam.web.260.260.jpeg",
    "scores": []
  },

  {
    "name": "Daenerys Targaryen",
    "photo": "https://www.hbo.com/content/dam/hbodata/series/game-of-thrones/character/s5/daenarys-512x512.jpg/_jcr_content/renditions/cq5dam.web.260.260.jpeg",
    "scores": []
  },

  {
    "name": "Ser Bronn",
    "photo": "https://www.hbo.com/content/dam/hbodata/series/game-of-thrones/character/s5/bronn-512x512.jpg/_jcr_content/renditions/cq5dam.web.260.260.jpeg",
    "scores": []
  },

  {
    "name": "Missandei",
    "photo": "https://www.hbo.com/content/dam/hbodata/series/game-of-thrones/character/s5/missandei-512x512.jpg/_jcr_content/renditions/cq5dam.web.260.260.jpeg",
    "scores": []
  },

  {
    "name": "Jon Snow",
    "photo": "https://www.hbo.com/content/dam/hbodata/series/game-of-thrones/character/s5/john-snow-512x512.jpg/_jcr_content/renditions/cq5dam.web.260.260.jpeg",
    "scores": []
  },

  {
    "name": "Cersei Lannister",
    "photo": "https://www.hbo.com/content/dam/hbodata/series/game-of-thrones/character/s5/cersei-lannister-512x512.jpg/_jcr_content/renditions/cq5dam.web.260.260.jpeg",
    "scores": []
  },

  {
    "name": "The Night King",
    "photo": "https://vignette.wikia.nocookie.net/gameofthrones/images/1/1f/Night_King_BTW.jpg/revision/latest?cb=20171013162809",
    "scores": []
  },

  {
    "name": "Aria Stark",
    "photo": "https://www.hbo.com/content/dam/hbodata/series/game-of-thrones/character/s5/arya-stark-512x512.jpg/_jcr_content/renditions/cq5dam.web.260.260.jpeg",
    "scores": []
  },

  {
    "name": "Gregor Clegane",
    "photo": "https://vignette.wikia.nocookie.net/gameofthrones/images/5/5d/Gregor_closeup_ep7.png/revision/latest/scale-to-width-down/688?cb=20170903033840",
    "scores": []
  },

  {
    "name": "Brienne of Tarth",
    "photo": "https://www.hbo.com/content/dam/hbodata/series/game-of-thrones/character/s5/brienne-of-tarth-512x512.jpg/_jcr_content/renditions/cq5dam.web.260.260.jpeg",
    "scores": []
  },

  {
    "name": "Jaime Lannister",
    "photo": "https://www.hbo.com/content/dam/hbodata/series/game-of-thrones/character/s5/jamie-lannister-512x512.jpg/_jcr_content/renditions/cq5dam.web.260.260.jpeg",
    "scores": []
  },

  {
    "name": "Yara Greyjoy",
    "photo": "https://www.hbo.com/content/dam/hbodata/series/game-of-thrones/character/s5/yara-greyjoy-512x512.jpg/_jcr_content/renditions/cq5dam.web.260.260.jpeg",
    "scores": []
  },

  {
    "name": "Beric Dondarrion",
    "photo": "https://www.hbo.com/content/dam/hbodata/series/game-of-thrones/character/s5/beric-dondarron-512x512.jpg/_jcr_content/renditions/cq5dam.web.260.260.jpeg",
    "scores": []
  },

  {
    "name": "Melisandre",
    "photo": "https://www.hbo.com/content/dam/hbodata/series/game-of-thrones/character/s5/melisandre-512x512.jpg/_jcr_content/renditions/cq5dam.web.260.260.jpeg",
    "scores": []
  },

];

function getRandomScore(min,max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min;
}

for (var i = 0; i < friends.length; i++) {
  for (var j = 0; j < 10; j++) {
    friends[i].scores.push(getRandomScore(1, 6));
  }
}

console.log(friends);