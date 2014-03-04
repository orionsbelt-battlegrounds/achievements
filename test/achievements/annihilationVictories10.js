var assert = require('assert');
var annihilationVictories10 = require('./../../src/achievements/Battle/annihilationVictories10');
var initPlayer = require('./../../src/initPlayer');

describe("achievements.annihilationVictories10", function() {

  it("succeeds on annihilation victory 10", function() {
    var player = initPlayer({});
    player.statistics.battles.annihilationVictories = 10;
    var result = annihilationVictories10(player);
    assert(result.success);
    assert.equal(result.badge, "AnnihilationVictories10")
  })

  it("doesn't match on more than 10 victories", function() {
    var player = initPlayer({});
    player.statistics.battles.annihilationVictories = 2;
    var result = annihilationVictories10(player);
    assert(!result.success);

    player.statistics.battles.annihilationVictories = 12;
    result = annihilationVictories10(player);
    assert(!result.success);
  })

  it("fails if no victories", function() {
    var player = initPlayer({});
    var result = annihilationVictories10(player);
    assert(!result.success);
  })

})
