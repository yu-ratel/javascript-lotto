const { Console } = require('@woowacourse/mission-utils');
const { message } = require('../constant/Constant');

const InputView = {

  readFunction(callback) {
    Console.readLine(message.FUNCTION_INPUT, callback);
  }

}

module.exports = InputView;