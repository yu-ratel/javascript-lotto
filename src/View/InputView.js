const { Console } = require('@woowacourse/mission-utils');

const InputView = {
  readLottoBuyAmount(callback) {
    return Console.readLine('구매금액을 입력해 주세요.\n', callback);
  }
}

module.exports = InputView;