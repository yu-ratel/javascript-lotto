const { Console } = require('@woowacourse/mission-utils');
const OutputView = {
  
  matchingList(list) {
    Console.print('페어 매칭 결과입니다.\n');
    if(list.length === 1) Console.print(fair.join(' : '));

    list.map((fair) => {
      Console.print(fair.join(' : '));
    })
    Console.print('');
  },

  reSet() {
    Console.print('\n초기화 되었습니다.\n');
  }
}

module.exports = OutputView;