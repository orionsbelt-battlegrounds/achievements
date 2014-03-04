
var _ = require('underscore');
var fs = require('fs');

module.exports.processBattleBadges = function processBattleBadges(path, player) {

	var badges = [];

	fs.readdir('./'+ path, function (err, files) { 

		processBadges(err, files, path, player, badges);
	  addNewBattleBadgesToPlayer(player, badges);
	});
	  
}

function processBadges(err, files, path, player, badges){
	  if (err) {
  	throw new Error("Invalid path.");
  }
	var badgeProcessors = [];
	files.forEach( function (file) {
		badgeProcessors.push(require("./../"+path+file));
	});

  _.each(badgeProcessors, function invokeProcessor(processor) {
    var result = processor(player);
    
    if(result.success) {
  		//console.log(result.badge);
      badges.push(result.badge);
    }
  });
}

function addNewBattleBadgesToPlayer(player, badges) {
	_.each(badges, function invokeProcessor(badge) {
		if(player.badges.battle !== undefined){
			player.badges.battle[badge] = true;
		}
  });
}


