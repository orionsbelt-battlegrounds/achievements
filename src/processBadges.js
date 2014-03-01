
var _ = require('underscore');
var firstVictory = require("./../src/achievements/firstVictory.js");

module.exports = function processBadges(player) {

  var badgeProcessors = [firstVictory];
  var badges = [];

  _.each(badgeProcessors, function invokeProcessor(processor) {
    var result = processor(player);
    if(result.success) {
      badges << result.badge;
    }
  });

  addNewBadgesToPlayer(player, badges);
}

function addNewBadgesToPlayer(player, badges) {
}
