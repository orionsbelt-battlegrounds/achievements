var obbAchievements = require("./../achievements");
var assert = require("assert");
var domain = require("domain");

var BATTLE_PATH = "src/achievements/Battle/";
var TURN_PATH = "src/achievements/Turn/";

/*
var d = domain.create();
d.on('error', function(er) {
  assert.equal(er.message, "Invalid path.");
});
*/

describe("processBadges", function testProcessBattles() {

  it("is available", function() {
    assert(obbAchievements.processBadges);
  })

  it("throws exception on path error", function() {
    obbAchievements.processBadges.processBattleBadges("benfica",null, function(err) {
      assert(err);
    });
  })

  it("process 1 victory badge", function() {
      var battleStats = { won : true };
      var player = { 
        statistics : {
          battles : {
            total : 1,
            victories: 1,
            defeats : 0,
            totalDamage : 0
          }
        },
        badges :{
          battle : [],
          turn : []
        }
      };

      obbAchievements.processBadges.processBattleBadges(BATTLE_PATH,player,function() {
        assert.equal(player.badges.battle['FirstVictory'], true);
        assert.equal(player.badges.battle['AnnihilationVictories10'], undefined);
      });
    })

  it("process doomer lover level 1 badge", function() {
      var player = { 
        statistics : {
          units : {
            doomerDestroyed : 10,
            doomerDamage: 10000
          }
        },
        badges :{
          battle : [],
          turn : []
        }
      };

      obbAchievements.processBadges.processTurnBadges(TURN_PATH,player,function() {
        assert.equal(player.badges.turn['DoomerLoverLevel1'], true);
        assert.equal(player.badges.turn['DoomerDestroyerLevel1'], undefined);
      });
    })
})



