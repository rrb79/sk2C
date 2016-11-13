var express = require('express');
var cors = require('cors');
var app = express();
app.use(cors());
app.get('/', function(req, res) {
  //  var fio='',fiom='',i='',o='',all='';stlength=4;
  var fio = req.query.fullname;
  console.log(fio);
  //  var fio=replaceAll("[0-9]+", "");
  var fiom = fio.split(" ");
  var stlength = fiom.length;
  console.log(fio.match('[0-9]+'));
  //  console.log(fio.length);

  if (fio.match('[0-9]+')) {
    res.send('Invalid fullname');
  } else {



    if (fio.length < 1) {
      res.send('Invalid fullname');
    } else {
      if (stlength > 3) {
        res.send('Invalid fullname');
      } else if (stlength > 2) {
        var i = fiom[0].charAt(0).toUpperCase() + '. ';
        var o = fiom[1].charAt(0).toUpperCase() + '.';
        var f = fiom[2] + ' ';
        var all = f + i + o;
        console.log(3 + all);
        res.send(all);
      } else if (stlength > 1) {
        var i = i = fiom[0].charAt(0).toUpperCase() + '.';
        var f = fiom[1] + ' ';
        var all = f + i;
        console.log(2 + all);
        res.send(all);
      } else if (stlength > 0) {
        var all = fiom[0];
        console.log(1 + all);
        res.send(all);
        if (all = null) {
          res.send('Invalid fullname');
        }
      }
    }
  }

});
app.listen(3000, function() {
  console.log('App listening on port 3000!');
});
