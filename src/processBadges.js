
var _ = require('underscore');
var fs = require('fs');

module.exports.processBattleBadges = function processBattleBadges(player) {

	var badgeProcessors = [];
	fs.readdir('./src/achievements/Battle/', function (err, files) { 
	  if (err) {
	  	throw err;
	  }
		files.forEach( function (file) {
			badgeProcessors.push(require("./../src/achievements/Battle/"+file));
		});

		var badges = [];

	  _.each(badgeProcessors, function invokeProcessor(processor) {
	    var result = processor(player);
	    
	    if(result.success) {
    		//console.log(result.badge);
	      badges.push(result.badge);
	    }
	  });

	  addNewBadgesToPlayer(player, badges);
	});
	
  
}

function addNewBadgesToPlayer(player, badges) {
	_.each(badges, function invokeProcessor(badge) {
		player.badges[badge] = true;
  });
}


