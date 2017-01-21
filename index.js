var Clarifai = require('clarifai');

var app = new Clarifai.App(
    'D50zcyzo_CSjVCqGJnB1QovwYVLmWGgxP8laxvil',
    '5XPyfLDAEx7DTXWPS5LD4AjWOPG7rEMdPN62waYu'
);

app.inputs.create([{
    url: "./images/train/cuban1.jpg",
    concepts: [{
        id: "Cuban",
        value: true
    }, {
        id: "Russian",
        value: false
    }, {
        id: "Indian",
        value: false
    }, {
        id: "Filipino",
        value: false
    }, {
        id: "Hatian",
        value: false
    }, {
        id: "Colombian",
        value: false
    }, {
        id: "Spaniard",
        value: false
    }]
}, {
    url: "./images/train/cuban2.jpg",
    concepts: [{
        id: "Cuban",
        value: true
    }, {
        id: "Russian",
        value: false
    }, {
        id: "Indian",
        value: false
    }, {
        id: "Filipino",
        value: false
    }, {
        id: "Hatian",
        value: false
    }, {
        id: "Colombian",
        value: false
    }, {
        id: "Spaniard",
        value: true
    }]
}, {
    url: "./images/train/filipino1.jpg",
    concepts: [{
        id: "Cuban",
        value: false
    }, {
        id: "Russian",
        value: false
    }, {
        id: "Indian",
        value: false
    }, {
        id: "Filipino",
        value: true
    }, {
        id: "Hatian",
        value: false
    }, {
        id: "Colombian",
        value: false
    }, {
        id: "Spaniard",
        value: false
    }]
}]

{
//     url: "./images/train/haitian1.jpg",
//     concepts: [{
//         id: "Cuban",
//         value: false
//     }, {
//         id: "Russian",
//         value: false
//     }, {
//         id: "Indian",
//         value: false
//     }, {
//         id: "Filipino",
//         value: false
//     }, {
//         id: "Hatian",
//         value: true
//     }, {
//         id: "Colombian",
//         value: false
//     }, {
//         id: "Spaniard",
//         value: false
//     }]
// }, {
//     url: "./images/train/indian1.jpg",
//     concepts: [{
//         id: "Cuban",
//         value: false
//     }, {
//         id: "Russian",
//         value: false
//     }, {
//         id: "Indian",
//         value: true
//     }, {
//         id: "Filipino",
//         value: false
//     }, {
//         id: "Hatian",
//         value: false
//     }, {
//         id: "Colombian",
//         value: false
//     }, {
//         id: "Spaniard",
//         value: false
//     }]
// }, {
//     url: "./images/train/russian1.jpg",
//     concepts: [{
//         id: "Cuban",
//         value: false
//     }, {
//         id: "Russian",
//         value: true
//     }, {
//         id: "Indian",
//         value: false
//     }, {
//         id: "Filipino",
//         value: false
//     }, {
//         id: "Hatian",
//         value: false
//     }, {
//         id: "Colombian",
//         value: false
//     }, {
//         id: "Spaniard",
//         value: false
//     }]
// }])
).then(
    createModel,
    errorHandler
);

function createModel(inputs) {
    app.models.create('nationalities', ['Cuban', 'Russian', 'Indian', 'Filipino', 'Hatian', 'Colombian', 'Spaniard'])
        .then(
            trainModel,
            errorHandler
        );
}

function trainModel(model) {
    model.train().then(
        predictModel,
        errorHandler
    );
}

function predictModel(model) {
    model.predict(['./images/predict/cuban2.jpg', './images/predict/hatian1.jpg'])
      .then(
        function (response) {
          console.log(response);
        }, errorHandler
      );
}

function errorHandler(err) {
  console.error(err);
}
