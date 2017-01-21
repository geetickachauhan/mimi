var Clarifai = require('clarifai');

// instantiate a new Clarifai app passing in your clientId and clientSecret
var app = new Clarifai.App(
  'D50zcyzo_CSjVCqGJnB1QovwYVLmWGgxP8laxvil',
  '5XPyfLDAEx7DTXWPS5LD4AjWOPG7rEMdPN62waYu'
);

// predict the contents of an image by passing in a url
app.models.predict(Clarifai.GENERAL_MODEL, 'https://samples.clarifai.com/metro-north.jpg').then(
  function(response) {
    console.log(response);
  },
  function(err) {
    console.error(err);
  }
);
