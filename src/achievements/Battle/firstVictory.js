
module.exports = function(player) {
	//console.log("running FirstVictory");
  if( player.statistics.battles.victories == 1 ) {
    return { success : true, badge : 'FirstVictory' }
  }
  return { success : false };
}
