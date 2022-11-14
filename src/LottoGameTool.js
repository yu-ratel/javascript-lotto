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
    this.jackpotNumber = number.split(',');
    new Lotto().validateLotto(this.jackpotNumber);
    this.getBonusNumberStart();
  }

  getBonusNumberStart() {
    Console.readLine('\n보너스 번호를 입력해 주세요.\n', (number) => this.bonusInput(number));
  }

  bonusInput(number) {
    this.bonusNumber = number;
    ServeValidtion.validateLottoBonusNumber(this.bonusNumber);
  }
}

 

const a = new LottoGameTool()
a.lottoBuyStart()


module.exports = LottoGameTool;
//당첨번호와 보너스 받는 기능
