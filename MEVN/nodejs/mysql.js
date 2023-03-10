var mysql = require('mysql');

var con = mysql.createConnection({
  host: "GANESH-3046KING",
  user: "root@localhost",
  password: "Bullet@0635",
  database: "ganeshdb"
});

con.connect(function(err) {
  if (err) throw err;
  var sql = "SELECT * from student";


  con.query(sql, function (err, result) {
if (err) throw err;
    console.log(result);
  });
});