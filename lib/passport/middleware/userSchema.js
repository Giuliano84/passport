var mongoose = require('mongoose');

var Schema = mongoose.Schema;
var UserSchema = new Schema({

			app_id :  String,
			displayName: String,
			name: {
	          familyName: String,
	          givenName: String
	       	},
			picture : Schema.Types.Mixed,
			email : String,
			identities : Schema.Types.Mixed
		},{strict:false});


var User = mongoose.model('User', UserSchema);

exports.User = User;

exports.createUser = function(appId, providerName, profile, accessToken){
	var picture = undefined;

	switch(providerName){
		case 'facebook':
			picture = {'facebook' : 'http://graph.facebook.com/'+profile.username+'/picture'};
			break;
		case 'google':
			if(profile._json.picture)
				picture = profile._json.picture;
			break;

		default:
			break;
	}


	var user = new User(
		{
			appId :  appId,
			displayName: profile.displayName,
			name: profile.name,
			picture : picture,
			email : profile.emails[0].value,
			identities : createIdentity(providerName, profile, accessToken)
		}
	);
	return user;
}

function createIdentity(providerName, profile, accessToken){
	var identity;

	switch(providerName){
		case 'facebook':
			identity = {
							'facebook' :
								{
									accessToken : accessToken,
									emails : profile.emails,
									facebookUid : profile._json.id,
									_json : profile._json
								}
							};break;
		case 'google':
			identity = {
							'google' :
								{
									accessToken : accessToken,
									emails : profile.emails,
									googleUid : profile._json.id,
									_json : profile._json
								}
							};break;

		default:
			break;
	}
	return identity;
}
