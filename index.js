var xhr = require('xhr')
var example = require('./views/example.hbs')

xhr.get('https://api.wheretheiss.at/v1/satellites/25544', function(err, data) {
  if (err) console.log(err) // do something
  var usefulData = JSON.parse(data.body)
  console.log(data.body)

  //console.log(usefulData[0].name)
  document.body.innerHTML = example({ name: usefulData.name });
  document.body.innerHTML = example({ latitude: usefulData.latitude });
})

