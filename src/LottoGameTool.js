const {Console} = require("@woowacourse/mission-utils");
const ServeValidtion = require("./ServeValidtion");
const GameHandler = require("./GameHandler");
const Lotto = require("./Lotto");


class LottoGameTool { 
  constructor() {
    this.buyLottoprice;
    this.buyLottoSave;
    this.jackpotNumber;
    this.bonusNumber;
    this.matchList;
  }

  lottoBuyStart() {
    Console.readLine('구입금액을 입력해 주세요.\n', (price) => this.butLottoInput(price));
  }
  
  butLottoInput(price) {
    this.buyLottoprice = price;
    ServeValidtion.validateLottoBuyPrice(price)
    this.buyLottoDisplay();
  }

  buyLottoDisplay() {
    const buyLottoCount = GameHandler.randomNumberCount(this.buyLottoprice);
    this.buyLottoSave = GameHandler.randomNumberSaveKit(buyLottoCount);
    Console.print(`\n${buyLottoCount}`+'개를 구매했습니다.');
    this.buyLottoSave.map((buyLotto) => {
      Console.print(`[${buyLotto.join(', ')}]`)
    });
    
    this.getJackpotNumberStart();
  }

  getJackpotNumberStart() {
    Console.readLine('\n당첨 번호를 입력해 주세요.\n', (number) => this.jackpotInput(number));
  }

  jackpotInput(number) {
    this.jackpotNumber = number;
    new Lotto(this.jackpotNumber.split(','));
    this.getBonusNumberStart();
  }

  getBonusNumberStart() {
    Console.readLine('\n보너스 번호를 입력해 주세요.\n', (number) => this.bonusInput(number));
  }

  bonusInput(number) {
    this.bonusNumber = number;
    ServeValidtion.validateLottoBonusNumber(this.bonusNumber);
    this.jackpotResultDisplay();
  }

  jackpotResultDisplay() {
    this.matchList = GameHandler.hasJackpotCount(this.buyLottoSave, this.jackpotNumber, this.bonusNumber);
    Console.print(`
당첨 통계
---
3개 일치 (5,000원) - ${this.matchList[0]}개
4개 일치 (50,000원) - ${this.matchList[1]}개
5개 일치 (1,500,000원) - ${this.matchList[2]}개
5개 일치, 보너스 볼 일치 (30,000,000원) - ${this.matchList[3]}개
6개 일치 (2,000,000,000원) - ${this.matchList[4]}개`)
  
  this.rateOfReturnResultDisplay();
  }

  rateOfReturnResultDisplay() {
  const jackpotMoneyList = GameHandler.jackpotMoneyList();
  const totalMoney = GameHandler.totalJackpotMoney(this.matchList,jackpotMoneyList);
  const rateOfReturn= GameHandler.rateOfReturnCalculator(totalMoney, this.buyLottoprice);
  Console.print(`총 수익률은 ${rateOfReturn}%입니다.`)

  Console.close();
  }
}

 

const a = new LottoGameTool()
a.lottoBuyStart()


module.exports = LottoGameTool;
//당첨번호와 보너스 받는 기능
