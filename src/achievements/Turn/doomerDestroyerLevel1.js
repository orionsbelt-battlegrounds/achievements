
module.exports = function(player) {
	//console.log("running FirstVictory");
  if( player.statistics.units.doomerDestroyed >= 100 ) {
    return { success : true, badge : 'DoomerDestroyerLevel1' }
  }
  return { success : false };
}
