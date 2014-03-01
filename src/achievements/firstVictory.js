
module.exports = function(player) {
  if( player.statistics.battles.victories == 1 ) {
    return { success : true, badge : 'FirstVictory' }
  }
  return { success : false };
}
