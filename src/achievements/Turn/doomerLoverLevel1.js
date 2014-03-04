
module.exports = function(player) {
	//console.log("running FirstVictory");
  if( player.statistics.units.doomerDamage >= 10000 ) {
    return { success : true, badge : 'DoomerLoverLevel1' }
  }
  return { success : false };
}
