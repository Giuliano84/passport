var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var StrategySchema = new Schema({	appId:String,
												strategies: [Schema.Types.Mixed],
											},{strict:false, collection:'authStrategies'});


var StrategySettings = mongoose.model('StrategySettings', StrategySchema);

exports.findSettings = function (appId, provider, callback){
	StrategySettings.findOne({appId: appId, "strategies.provider":provider}, function(err,doc){
		if (err) console.log(err);
		if (doc) {
			var settings;
			doc.strategies.forEach(function(strategy) {
    			if (strategy.provider === provider)
    				settings = strategy;
			});
			callback(settings);
		};
	})
};

/* INSTANCE OF DEMO STRATEGY */

// var p = mongoose.model('StrategySettings', StrategySchema);
// var s = new p({
// 			appId:'1',
// 			strategies :[
// 				{
// 					provider: 'facebook',
// 					params : {
// 						clientId: '151428268377841',
// 						clientSecret: '59b347cf4b0b402e68688da203f5941d',
// 						callbackUrl: 'http://tdemo.stamplay.com/auth/1/facebook/callback',
// 						scope: ['email', 'user_status','user_checkins','read_mailbox','publish_actions']
// 					},
// 				},
// 				{
// 					provider: 'google',
//  					params:{
//  						clientId:'640762404112.apps.googleusercontent.com',
//  						clientSecret:'Wg__gNgAEeeiCt-0uJ_sHUNM',
//  						callbackUrl:'http://tdemo.stamplay.com/auth/1/google/callback',
// 					 	scope : ['https://www.google.com/m8/feeds' , 'https://www.googleapis.com/auth/userinfo.email' , 'https://www.googleapis.com/auth/userinfo.profile', 'https://www.googleapis.com/auth/drive']
// 					 },
// 				},
// 					{
// 					provider: 'twitter',
//  					params:{
//  						consumerKey:'GfNCLbYG1IdBLUSL8eMjSQ',
//  						consumerSecret:'JPPIt0xxSNMZpMKdDgbk3v4iLYYDEjcYPjgdRTuG5k',
//  						callbackUrl:'http://tdemo.stamplay.com/auth/1/twitter/callback',
// 					 },
// 				}
//  			]
// 		});
// s.save();