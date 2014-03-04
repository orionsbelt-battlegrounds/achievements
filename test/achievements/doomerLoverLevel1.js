var assert = require('assert');
var doomerLoverLevel1 = require('./../../src/achievements/Turn/doomerLoverLevel1');
var initPlayer = require('./../../src/initPlayer');

describe("achievements.doomerLoverLevel1", function() {

  it("succeeds on making damage", function() {
    var player = initPlayer({});
    player.statistics.units.doomerDamage = 10000;
    var result = doomerLoverLevel1(player);
    assert(result.success);
    assert.equal(result.badge, "DoomerLoverLevel1")
  })

  it("More damage than required", function() {
    var player = initPlayer({});
    player.statistics.units.doomerDamage = 10002;
    var result = doomerLoverLevel1(player);
    assert(result.success);
  })

  it("fails if no damage", function() {
    var player = initPlayer({});
    var result = doomerLoverLevel1(player);
    assert(!result.success);
  })

  it("fails if not enought damage", function() {
    var player = initPlayer({});
    player.statistics.units.doomerDamage = 1002;
    var result = doomerLoverLevel1(player);
    assert(!result.success);
  })

})