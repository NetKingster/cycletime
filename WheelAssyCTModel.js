var db = require('../db'),
	moment = require('moment');

db.connect(function(err) {
	if (err) throw err;
	console.log('Connected to MySQL-WH cycle time database!');
});

//FORM PAGE
exports.insertWHSpokeAssy = function(_line, _model, _oprtid, _time, callback) {
	var sql = 
	`
	INSERT INTO
		wh_cycletime.spoke_assembly
		(
			line,
			model,
			oprt_id,
			time
		)
	VALUES
		(
			'${_line}',
			'${_model}',
			'${_oprtid}',
			'${_time}'
		)
	`
	db.get().query(sql,
		function (err, data) {
		    if (err){
		    	console.log(err);
		    	callback(err, null);
		    } else {
		    	callback(null, data);
		    }    
	  	}
	);
}

exports.insertWHRV2 = function(_line, _model, _oprtid, _time, callback) {
	var sql = 
	`
	INSERT INTO
		wh_cycletime.pre_tighten
		(
			line,
			model,
			oprt_id,
			time
		)
	VALUES
		(
			'${_line}',
			'${_model}',
			'${_oprtid}',
			'${_time}'
		)
	`
	db.get().query(sql,
		function (err, data) {
		    if (err){
		    	console.log(err);
		    	callback(err, null);
		    } else {
		    	callback(null, data);
		    }    
	  	}
	);
}

exports.insertWHNajimase = function(_line, _model, _oprtid, _time, callback) {
	var sql = 
	`
	INSERT INTO
		wh_cycletime.najimase
		(
			line,
			model,
			oprt_id,
			time
		)
	VALUES
		(
			'${_line}',
			'${_model}',
			'${_oprtid}',
			'${_time}'
		)
	`
	db.get().query(sql,
		function (err, data) {
		    if (err){
		    	console.log(err);
		    	callback(err, null);
		    } else {
		    	callback(null, data);
		    }    
	  	}
	);
}

exports.insertWHT3W = function(_line, _model, _oprtid, _time, callback) {
	var sql = 
	`
	INSERT INTO
		wh_cycletime.t3w
		(
			line,
			model,
			oprt_id,
			time
		)
	VALUES
		(
			'${_line}',
			'${_model}',
			'${_oprtid}',
			'${_time}'
		)
	`
	db.get().query(sql,
		function (err, data) {
		    if (err){
		    	console.log(err);
		    	callback(err, null);
		    } else {
		    	callback(null, data);
		    }    
	  	}
	);
}

exports.insertWHAdjusting = function(_line, _model, _oprtid, _time, callback) {
	var sql = 
	`
	INSERT INTO
		wh_cycletime.adjusting
		(
			line,
			model,
			oprt_id,
			time
		)
	VALUES
		(
			'${_line}',
			'${_model}',
			'${_oprtid}',
			'${_time}'
		)
	`
	db.get().query(sql,
		function (err, data) {
		    if (err){
		    	console.log(err);
		    	callback(err, null);
		    } else {
		    	callback(null, data);
		    }    
	  	}
	);
}

exports.insertWHFinalChecking = function(_line, _model, _oprtid, _time, callback) {
	var sql = 
	`
	INSERT INTO
		wh_cycletime.final_check
		(
			line,
			model,
			oprt_id,
			time
		)
	VALUES
		(
			'${_line}',
			'${_model}',
			'${_oprtid}',
			'${_time}'
		)
	`
	db.get().query(sql,
		function (err, data) {
		    if (err){
		    	console.log(err);
		    	callback(err, null);
		    } else {
		    	callback(null, data);
		    }    
	  	}
	);
}

exports.insertWHStickerPaste = function(_line, _model, _oprtid, _time, callback) {
	var sql = 
	`
	INSERT INTO
		wh_cycletime.sticker_paste
		(
			line,
			model,
			oprt_id,
			time
		)
	VALUES
		(
			'${_line}',
			'${_model}',
			'${_oprtid}',
			'${_time}'
		)
	`
	db.get().query(sql,
		function (err, data) {
		    if (err){
		    	console.log(err);
		    	callback(err, null);
		    } else {
		    	callback(null, data);
		    }    
	  	}
	);
}

exports.getWHSpokeAssy = function(callback) {
	var sql = 
	`
	SELECT * FROM wh_cycletime.spoke_assembly
	`
	db.get().query(sql,
		function (err, data) {
		    if (err){
		    	console.log(err);
		    	callback(err, null);
		    } else {
		    	callback(null, data);
		    }    
	  	}
	);
}

exports.getWHRV2 = function(callback) {
	var sql = 
	`
	SELECT * FROM wh_cycletime.pre_tighten
	`
	db.get().query(sql,
		function (err, data) {
		    if (err){
		    	console.log(err);
		    	callback(err, null);
		    } else {
		    	callback(null, data);
		    }    
	  	}
	);
}

exports.getWHNajimase = function(callback) {
	var sql = 
	`
	SELECT * FROM wh_cycletime.najimase
	`
	db.get().query(sql,
		function (err, data) {
		    if (err){
		    	console.log(err);
		    	callback(err, null);
		    } else {
		    	callback(null, data);
		    }    
	  	}
	);
}

exports.getWHT3W = function(callback) {
	var sql = 
	`
	SELECT * FROM wh_cycletime.t3w
	`
	db.get().query(sql,
		function (err, data) {
		    if (err){
		    	console.log(err);
		    	callback(err, null);
		    } else {
		    	callback(null, data);
		    }    
	  	}
	);
}

exports.getWHAdjusting = function(callback) {
	var sql = 
	`
	SELECT * FROM wh_cycletime.adjusting
	`
	db.get().query(sql,
		function (err, data) {
		    if (err){
		    	console.log(err);
		    	callback(err, null);
		    } else {
		    	callback(null, data);
		    }    
	  	}
	);
}

exports.getWHFinalChecking = function(callback) {
	var sql = 
	`
	SELECT * FROM wh_cycletime.final_check
	`
	db.get().query(sql,
		function (err, data) {
		    if (err){
		    	console.log(err);
		    	callback(err, null);
		    } else {
		    	callback(null, data);
		    }    
	  	}
	);
}

exports.getWHStickerPaste = function(callback) {
	var sql = 
	`
	SELECT * FROM wh_cycletime.sticker_paste
	`
	db.get().query(sql,
		function (err, data) {
		    if (err){
		    	console.log(err);
		    	callback(err, null);
		    } else {
		    	callback(null, data);
		    }    
	  	}
	);
}