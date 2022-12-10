const InputView = require('../View/InputView');
const OutputView = require('../View/OutputView');


class Controller {
  #buyAmount

  inputLottoBuyAmount() {
    InputView.readLottoBuyAmount((input) => {
      if(input % 1000 !== 0 ) {
        throw new Error('로또금액은 1,000원 단위로만 입력하셔야 합니다.')
      }
      
      this.#buyAmount = input/1000; 
    })
  }
}

module.exports = Controller;

let a = new Controller();
a.inputLottoBuyAmount()