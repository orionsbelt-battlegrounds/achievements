var obbAchievements = require("./../achievements");
var assert = require("assert");

describe("processBattleBadges", function testProcessBattles() {

  it("is available", function() {
    assert(obbAchievements.processBadges);
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
          FirstVictory : false,
          AnnihilationVictories10 : false
        }
      };

      obbAchievements.processBadges.processBattleBadges(player,function() {
        assert.equal(player.badges.FirstVictory, true)
        assert.equal(player.badges.AnnihilationVictories10, false)
      });
       
    })
})
