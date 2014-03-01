var assert = require('assert');
var obbAchievements = require('./../achievements.js')

describe("processBattle", function() {

  it("is available", function() {
    assert(obbAchievements.processBattle)
  })

  describe("basic stats", function() {

    it("increments victories", function() {
      var battleStats = { won : true };
      var player = {};

      obbAchievements.processBattle(battleStats, player);

      assert.equal(player.statistics.battles.total, 1)
      assert.equal(player.statistics.battles.victories, 1)
    })

    it("increments defeats", function() {
      var battleStats = { won : false };
      var player = {};

      obbAchievements.processBattle(battleStats, player);

      assert.equal(player.statistics.battles.total, 1)
      assert.equal(player.statistics.battles.defeats, 1)
    })
    it("processes a finished battle", function() {
      var player = { 
        statistics : {
          battles : {
            total : 1,
            victories: 1,
            defeats : 0,
            totalDamage : 0
          }
        }
      };
      var battleStats = {
        type: 'TotalAnnihilation',
        won : true,
        totalDamage : 100
      };

      obbAchievements.processBattle(battleStats, player);

      assert.equal(player.statistics.battles.total, 2)
      assert.equal(player.statistics.battles.victories, 2)
      assert.equal(player.statistics.battles.defeats, 0)
      assert.equal(player.statistics.battles.totalDamage, 100)
    })

  })

})
