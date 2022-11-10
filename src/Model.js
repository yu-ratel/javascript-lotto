const MissionUtils = require("@woowacourse/mission-utils");
const Lotto = require("../src/Lotto");


class LottoDate { 
  constructor() {
  }

  inputDate(messge, callback) {
    MissionUtils.Console.readLine(messge, callback);
  }

  lottoBuyStart() {
    this.inputDate('구입금액을 입력해 주세요.\n', this.buyLottoDisplay.bind(this));
  }
  
  buyLottoErrorChekeu(buyLotto) {
    if (Number(buyLotto)%1000 === 0) {
      return true;
    }
    
    throw new Error('[ERROR] 1000원 단위로 입력되게 해주세요.')
  }

  getRandomNumber() {
    const randomNumber = MissionUtils.Random.pickUniqueNumbersInRange(1, 45, 6);
    if(new Lotto (randomNumber)) {
      return randomNumber;
    }
  }

  randomNumberCount(buyLotto) {
    let count = 0;
    while(buyLotto !== 0) {
      buyLotto -= 1000;
      count += 1;
    }

    return count; 
  }

  randomNumberkeep(buyLotto) {
    let count = this.randomNumberCount(buyLotto);
    let keepKit = [];
    while(count !== 0) {
      count -= 1;
      keepKit.push(this.getRandomNumber());
    }

    return keepKit;
  }

  buyLottoDisplay(buyLotto) {
    const buyLottos = this.randomNumberCount(buyLotto);
    let buyLottoKit = this.randomNumberkeep(buyLotto);
    MissionUtils.Console.print(`\n${buyLottos}개를 구매했습니다.`);
    buyLottoKit.map((lotto) => {
      MissionUtils.Console.print(lotto)
    });
  }
}