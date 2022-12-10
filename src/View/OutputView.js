const { Console } = require('@woowacourse/mission-utils');

const OutputView = {
  printBuyLotto(amount, lotto) {
    Console.print(`\n${amount}개를 구매했습니다.`)
   
    lotto.map((lotto) => {
      Console.print(`[${lotto}]`)
    })
  },
  
  printResult(rank, rateOfReturn) {
    Console.print(
`\n당첨통계
---
3개 일치 (5,000원) - ${rank[0]}개
4개 일치 (50,000원) - ${rank[1]}개
5개 일치 (1,500,000원) - ${rank[2]}개
5개 일치, 보너스 볼 일치 (30,000,000원) - ${rank[3]}개
6개 일치 (2,000,000,000원) - ${rank[4]}개
총 수익률은 ${rateOfReturn}%입니다.`
    )
  }
}

module.exports = OutputView;