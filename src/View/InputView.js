const { Console } = require('@woowacourse/mission-utils');

const InputView = {
  readLottoBuyAmount(callback) {
    return Console.readLine('구매금액을 입력해 주세요.\n', callback);
  },

  readJackpot(callback) {
    return Console.readLine('\n당첨 번호를 입력해 주세요.\n', callback);
  },

  readBonus(callback) {
    return Console.readLine('\n보너스 번호를 입력해 주세요.\n', callback);
  }
}

module.exports = InputView;