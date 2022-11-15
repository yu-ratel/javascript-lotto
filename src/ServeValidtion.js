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

  static validateJackpotNumber(number) {
    const limits = /^[1-9]+$/;
    number.split(',').map((type) => {
      if(!limits.test(type)) {
        throw new Error('[ERROR] 당첨 번호는 쉼표를 기준으로 숫자로만 입력해야합니다.');
      }
    })
  }

  static validateLottoBonusNumber(number , jackpotNumber) {
    Lotto.validateScope(number);
    const limit = /^[1-9]+$/;
    if(!limit.test(number)) {
      throw new Error('[ERROR] 보너스 번호는 하나의 숫자로 입력해야 합니다.')
    }
    if(jackpotNumber.includes(number)) {
      throw new Error('[ERROR] 보너스 번호는 당첨번호와 중복될 수 없습니다.')
    }
  }
}

module.exports = ServeValidtion;