const { Console } = require('@woowacourse/mission-utils');
const OutputView = {
  
  matchingList(list) {
    Console.print('페어 매칭 결과입니다.\n');

    list[0].map((fair) => {
      Console.print(fair.join(' : '));
    })
    Console.print('');
  },

  reSet() {
    Console.print('초기화 되었습니다.\n');
  }
}

module.exports = OutputView;