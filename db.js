var mysql = require ('mysql');

var state = {
	pool: null
}

exports.connect = function(done) {
  state.pool = mysql.createPool({
    host: 'localhost',
    port: '3306',
	user: 'root',
	password: 'root',
	database: 'wh_cycletime'
  });
  done();
}

exports.get = function() {
	return state.pool;
}
