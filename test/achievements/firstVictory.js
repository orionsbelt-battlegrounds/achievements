var assert = require('assert');
var firstVictory = require('./../../src/achievements/Battle/firstVictory');
var initPlayer = require('./../../src/initPlayer');

describe("achievements.firstVictory", function() {

  it("succeeds on first victory", function() {
    var player = initPlayer({});
    player.statistics.battles.victories = 1;
    var result = firstVictory(player);
    assert(result.success);
    assert.equal(result.badge, "FirstVictory")
  })

  it("doesn't match on more than 1 victories", function() {
    var player = initPlayer({});
    player.statistics.battles.victories = 2;
    var result = firstVictory(player);
    assert(!result.success);
  })

  it("fails if no victories", function() {
    var player = initPlayer({});
    var result = firstVictory(player);
    assert(!result.success);
  })

})
