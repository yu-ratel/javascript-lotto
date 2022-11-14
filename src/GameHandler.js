const Lotto = require("./Lotto");

class GameHandler {
  static randomNumberCount(buyLotto) {
    let count = 0;
    while(buyLotto !== 0) {
      buyLotto -= 1000;
      count += 1;
    }
    return count; 
  }
    
  static randomNumberSaveKit(lottoCount) {
    const save = [];
    while(lottoCount !== 0) {
      lottoCount -= 1;
      const randomNumber = Lotto.getRandomNumber();
      if(new Lotto(randomNumber)) {
        save.push(randomNumber);
      }
    }

    return save;
  }

  static jackpotCountRankMatching(count, bonus, matchList) {
    if(count === 6) return matchList[Ranklist.first] +=1;
    if(count === 5 && bonus) {
      return matchList[Ranklist.second] +=1;
    }
    if(count === 5) return matchList[Ranklist.third] +=1;
    if(count === 4) return matchList[Ranklist.fourth] +=1;
    if(count === 3) return matchList[Ranklist.fifth] +=1;
  
    return matchList;
  }
  
  static hasJackpotCount(buylottos, jackpotNumber, bonusNumber) {
    const matchList = new Array(5).fill(0);
    buylottos.map((buylotto) => {
      let count = 0;
      let bonus = 0;
      buylotto.map((lotto) => {
        jackpotNumber.includes((lotto.toString())) && count++;
        jackpotNumber.includes(bonusNumber) && bonus++; 
      });
      this.jackpotCountRankMatching(count, bonus, matchList);
    });
    
      return matchList;
  }
}

const Ranklist = {
  fifth:0,
  fourth:1,
  third:2,
  second:3,
  first:4,
} 

module.exports = GameHandler;