var xhr = require('xhr')
var example = require('./views/example.hbs')


var button = document.getElementById("displayButton");
button.addEventListener("click", function(){
    xhr.get('http://localhost:3000/cats/', function(err, data) {
    if (err) console.log(err) // do something
    var usefulData = JSON.parse(data.body)
    console.log('this is usefulData.cats[0].name: ', usefulData.cats[0].name);
    console.log('this is usefulData: ', usefulData);
    document.body.innerHTML = example({ name: usefulData.cats[0].name});
  })
})

