var xhr = require('xhr')
var example = require('./views/example.hbs')

xhr.get('https://api.wheretheiss.at/v1/satellites/25544', function(err, data) {
  if (err) console.log(err) // do something
  var usefulData = JSON.parse(data.body)
  console.log('this is data.body: ', data.body)
  console.log('this is usefulData.name: ', usefulData.name)
  console.log('this is usefulData.latitude: ', usefulData.latitude)
  document.body.innerHTML = example({ name: usefulData.name, latitude: usefulData.latitude });
})

