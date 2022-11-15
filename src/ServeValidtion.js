const Lotto = require("./Lotto");
const {LOTTO, NUMBER} = require("./Constant");

class ServeValidtion{
   static validateLottoBuyPrice(price) {
    const priceLimit = /^[1-9][0-9]+$/;
    if (Number(price)%LOTTO.PRICE !== NUMBER.ZERO 
    || !priceLimit.test(price)
    || Number(price) < LOTTO.PRICE) {
      throw new Error('[ERROR] 1000원 단위의 숫자로 입력해 주세요.');
    }

    return true;
  }

  static validateLottoBonusNumber(number) {
    Lotto.validateScope(number);
    const limit = /^[1-9]+$/;
    if(!limit.test(number)) {
      throw new Error('[ERROR] 보너스 번호는 하나의 숫자로 입력해야 합니다.')
    }
  }
}

module.exports = ServeValidtion;