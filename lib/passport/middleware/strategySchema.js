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
											clientId:String,
											clientSecret:String,
											callbackUrl:String,
										},{strict:false, collection:'google'});

exports.GoogleStrategySettings = mongoose.model('StrategyGoogle', GoogleStrategySchema);


var GoogleOpenIDStrategySchema = new Schema({
											appId:String,
											provider:String,
											returnUrl:String,
											realm: String,
										},{strict:false, collection:'googleOpenID'});

exports.GoogleOpenIDStrategySettings = mongoose.model('StrategyGoogleOpenID', GoogleOpenIDStrategySchema);


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


// var fbS = mongoose.model('StrategyFacebook', FacebookStrategySchema);
// var n = new fbS({appId:'1',
// 						provider: 'facebook',
// 						clientId: '151428268377841',
// 						clientSecret: '59b347cf4b0b402e68688da203f5941d',
// 						callbackUrl: 'http://tdemo.stamplay.com/auth/1/facebook/callback'
// 				});
// n.save();
// var gooOpenIDS = mongoose.model('StrategyGoogle', GoogleStrategySchema);
// var n = new gooOpenID({appId:'1',
// 						provider: 'google',
// 						returnUrl: 'http://tdemo.stamplay.com/auth/1/googleOpenID/callback',
// 						realm: 'http://tdemo.stamplay.com/'
// 				});
// n.save();
// var gooS = mongoose.model('StrategyGoogle', GoogleStrategySchema);
// var n = new gooS({appId:'1',
// 					provider: 'google',
// 					clientId:'640762404112.apps.googleusercontent.com',
// 					clientSecret:'Wg__gNgAEeeiCt-0uJ_sHUNM',
// 					callbackUrl:'http://tdemo.stamplay.com/auth/1/google/callback',
// 				});
// n.save();

