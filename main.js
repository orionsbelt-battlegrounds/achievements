var annihilationVictories10 = require('./src/achievements/Battle/annihilationVictories10');
var initPlayer = require('./src/initPlayer');

var player = initPlayer({});
player.statistics.battles.victories = 1;
var result = firstVictory(player);