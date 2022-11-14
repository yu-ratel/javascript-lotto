const Lotto = require("./Lotto");
const LottoGameTool = require("./LottoGameTool");

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
    let save = [];
    while(lottoCount !== 0) {
      lottoCount -= 1;
      save.push(new Lotto().getRandomNumber());
    }

    return save;
  }
}

module.exports = GameHandler;