const InputView = require('../View/InputView');
const OutputView = require('../View/OutputView');
const { Random } =require('@woowacourse/mission-utils');
const Lotto = require('../Model/Lotto');


class Controller {
  #buyAmount
  #lotto = [];

  inputLottoBuyAmount() {
    InputView.readLottoBuyAmount((input) => {
      if(input % 1000 !== 0 ) {
        throw new Error('로또금액은 1,000원 단위로만 입력하셔야 합니다.')
      }
      
      this.#buyAmount = input/1000; 
      this.lottoGeneration(this.#buyAmount);
    })
  }
  
  lottoGeneration(amount) {
      while(amount > 0) {
      const numbers = Random.pickUniqueNumbersInRange(1, 45, 6);
      this.#lotto.push(new Lotto(numbers).lottoSort());
      amount -=1;
    }
    OutputView.printBuyLotto(this.#buyAmount, this.#lotto);
    this.inputJackpot();
  }
  
  inputJackpot() {
    InputView.readJackpot((input) => {
      const jackpotNumbers = input.split(',');
      if(jackpotNumbers.length !== 6 || jackpotNumbers.some((number) => isNaN(number))) {
        throw new Error('당첨번호는 쉼표를 기준으로 6자리의 숫자를 입력해야 합니다.')
      }
    })
  }
  
}

module.exports = Controller;

let a = new Controller();
a.inputLottoBuyAmount()