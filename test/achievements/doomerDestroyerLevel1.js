var assert = require('assert');
var doomerDestroyerLevel1 = require('./../../src/achievements/Turn/doomerDestroyerLevel1');
var initPlayer = require('./../../src/initPlayer');

describe("achievements.doomerDestroyerLevel1", function() {

  it("succeeds on destroying", function() {
    var player = initPlayer({});
    player.statistics.units.doomerDestroyed = 100;
    var result = doomerDestroyerLevel1(player);
    assert(result.success);
    assert.equal(result.badge, "DoomerDestroyerLevel1")
  })

  it("More destruction than required", function() {
    var player = initPlayer({});
    player.statistics.units.doomerDestroyed = 102;
    var result = doomerDestroyerLevel1(player);
    assert(result.success);
  })

  it("fails if no destruction", function() {
    var player = initPlayer({});
    var result = doomerDestroyerLevel1(player);
    assert(!result.success);
  })

  it("fails if not enought destruction", function() {
    var player = initPlayer({});
    player.statistics.units.doomerDestroyed = 12;
    var result = doomerDestroyerLevel1(player);
    assert(!result.success);
  })

})