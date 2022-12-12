const { Console } = require('@woowacourse/mission-utils');
const { message } = require('../constant/Constant');

const InputView = {

  readFunction(callback) {
    Console.readLine(message.FUNCTION, callback);
  },

  readMatching(callback) {
    Console.readLine(`${message.EXAMPLE}\n${message.MATCHING}\n`, callback);
  },

  readReMatching(callback) {
    Console.readLine(message.RE_MATCHING, callback);
  },

  readSelect(callback) {
    Console.readLine(message.MATCHING, callback);
  }
}

module.exports = InputView;