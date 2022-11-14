const MissionUtils = require("@woowacourse/mission-utils");
const ServeValidtion = require("./ServeValidtion");
const GameHandler = require("./GameHandler");


class LottoGameTool { 
  constructor() {
    this.buyLottoprice;
    this.buyLottoSave;
  }

  inputDate(messge, callback) {
    MissionUtils.Console.readLine(messge, callback);
  }

  lottoBuyStart() {
    this.inputDate('구입금액을 입력해 주세요.\n', (price) => this.butLottoInput(price));
  }
  
  butLottoInput(price) {
    this.buyLottoprice = price;
    ServeValidtion.isValidLottoBuyPrice(price)
    this.buyLottoDisplay();
  }

  buyLottoDisplay() {
    const buyLottoCount = GameHandler.randomNumberCount(this.buyLottoprice);
    this.buyLottoSave = GameHandler.randomNumberSaveKit(buyLottoCount);
    MissionUtils.Console.print(`\n${buyLottoCount}`+'개를 구매했습니다.');
    this.buyLottoSave.map((buyLotto) => {
      MissionUtils.Console.print(`[${buyLotto}]`)
    });

  }
}

 

const a = new LottoGameTool()
a.lottoBuyStart()


module.exports = LottoGameTool;
//당첨번호와 보너스 받는 기능
