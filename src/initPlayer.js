
module.exports = function initPlayer(player) {
  player.statistics = player.statistics || {};
  player.statistics.battles = player.statistics.battles || {};
  player.statistics.battles.total = player.statistics.battles.total || 0;
  player.statistics.battles.victories = player.statistics.battles.victories || 0;
  player.statistics.battles.defeats = player.statistics.battles.defeats || 0;
	player.statistics.battles.annihilationVictories = player.statistics.battles.annihilationVictories || 0;

  player.badges = {};
  player.badges.FirstVictory = player.badges.FirstVictory || false;
  player.badges.AnnihilationVictories10 = player.badges.AnnihilationVictories10 || false;
  

  return player;
}

