
module.exports = function(player) {
	//console.log("running AnnihilationVictories10");
  if( player.statistics.battles.annihilationVictories === 10 ) {
    return { success : true, badge : 'AnnihilationVictories10' }
  }
  return { success : false };
}
