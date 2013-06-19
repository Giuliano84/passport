var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var FacebookStrategySchema = new Schema({	appId:String,
												provider:String,
												clientId:String,
												clientSecret:String,
												callbackUrl:String,
											},{strict:false, collection:'facebook'});

exports.FacebookStrategySettings = mongoose.model('StrategyFacebook', FacebookStrategySchema);

var GoogleStrategySchema = new Schema({	appId:String,
											provider:String,
											callbackUrl:String,
											realm: String,
										},{strict:false, collection:'google'});

exports.GoogleStrategySettings = mongoose.model('StrategyGoogle', GoogleStrategySchema);

var TwitterStrategySchema = new Schema({appId:String,
										provider:String,
										consumerKey:String,
										consumerSecret:String,
										callbackUrl:String,
									},{strict:false, collection:'twitter'});

exports.TwitterStrategySettings = mongoose.model('StrategyTwitter', TwitterStrategySchema);

exports.findSettings = function (schema, appId, callback){
	schema.findOne({appId: appId}, function(err,doc){
		if (err) console.log(err);
		if (doc) callback(doc);
	})
};


// var n = new fbS({appId:'1',
// 									provider: 'facebook',
// 									clientId: '151428268377841',
// 									clientSecret: '59b347cf4b0b402e68688da203f5941d',
// 									callbackUrl: 'http://tdemo.stamplay.com/auth/facebook/callback'});
// n.save();

