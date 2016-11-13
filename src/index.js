var express = require('express');
var cors = require('cors');
var app = express();
app.use(cors());
app.get('/', function(req, res) {
  var urls = req.query.username;
  console.log(urls);
  //const re = new RegExp('/(\/?(.*\..*)\/?)/');
  const re = new RegExp('@?(https?:)?(\/\/)?(([a-zA-Z0-9.]*)[^\/]*\/)?([a-zA-Z0-9.]*)', 'i');
  console.log(urls.match(re));
  const username = urls.match(re)[5];

  console.log(`@` + username);
  res.send(`@` + username);
});

app.listen(3000, function() {
  console.log('App listening on port 3000!');
});



// export default function canonize(url) {
//     // const re = new RegExp('@?(https?:)?(\/\/)?((telegram|vk|vkontakte|twitter)[^\/]*\/)?([a-zA-Z0-9.]*)', 'i');
//     const re = new RegExp('@?(https?:)?(\/\/)?(([a-zA-Z0-9.]*)[^\/]*\/)?([a-zA-Z0-9.]*)', 'i');
//     return '@' + url.match(re)[5];
// }
