const { Console } = require('@woowacourse/mission-utils');

const OutputView = {
  printBuyLotto(amount, lotto) {
    Console.print(`\n${amount}개를 구매했습니다.`)
   
    lotto.map((lotto) => {
      Console.print(`[${lotto}]`)
    })
  }
}

module.exports = OutputView;