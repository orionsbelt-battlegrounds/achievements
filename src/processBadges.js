
var _ = require('underscore');
var fs = require('fs');

module.exports.processBattleBadges = function processBattleBadges(path, player, callback) {

  var badges = [];

  fs.readdir('./'+ path, function (err, files) { 
    if(err) { callback(err); return; }
    processBadges(files, path, player, badges);
    addNewBattleBadgesToPlayer(player, badges);
  });

}

module.exports.processTurnBadges = function processTurnBadges(path, player, callback) {

  var badges = [];

  fs.readdir('./'+ path, function (err, files) { 
    if(err) { callback(err); return; }
    processBadges(files, path, player, badges);
    addNewTurnBadgesToPlayer(player, badges);
    callback(null);
  });

}

function processBadges(files, path, player, badges, callback){
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

function addNewTurnBadgesToPlayer(player, badges) {
  _.each(badges, function invokeProcessor(badge) {
    if(player.badges.turn !== undefined){
      player.badges.turn[badge] = true;
    }
  });
}


