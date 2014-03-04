
module.exports = function initPlayer(player) {
  player.statistics = player.statistics || {};
  player.statistics.battles = player.statistics.battles || {};
  player.statistics.battles.total = player.statistics.battles.total || 0;
  player.statistics.battles.victories = player.statistics.battles.victories || 0;
  player.statistics.battles.defeats = player.statistics.battles.defeats || 0;
	player.statistics.battles.annihilationVictories = player.statistics.battles.annihilationVictories || 0;

  player.statistics.units = player.statistics.units || {};  
  player.statistics.units.doomerDamage = player.statistics.units.doomerDamage || 0;
  player.statistics.units.doomerDestroyed = player.statistics.units.doomerDestroyed || 0;
  

  player.badges = {};
  

  return player;
}

