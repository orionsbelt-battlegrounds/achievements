var initPlayer = require('./../src/initPlayer.js');
var processBadges = require('./../src/processBadges.js');

module.exports = function(battleStats, player) {
  initPlayer(player);

  player.statistics.battles.total += 1;
  player.statistics.battles.totalDamage += battleStats.totalDamage;
  if(battleStats.won) {
    player.statistics.battles.victories += 1;
  } else {
    player.statistics.battles.defeats += 1;
  }

  processBadges(player)


}
