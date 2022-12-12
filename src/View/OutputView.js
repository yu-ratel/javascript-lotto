const { Console } = require('@woowacourse/mission-utils');
const OutputView = {
  
  matchingList(list) {
    Console.print('페어 매칭 결과입니다.\n');
    
    list[0].map((fair) => {
      Console.print(fair.join(' : '));
    })
    Console.print('');
  }
}

module.exports = OutputView;