const MissionUtils = require("@woowacourse/mission-utils");

class Lotto {
  #numbers;

  constructor(numbers) {
    this.validateLotto(numbers);
    this.#numbers = numbers;
  }
  
  validateLotto(numbers) {
    if (numbers.length !== 6) {
      throw new Error("[ERROR] 로또 번호는 6개여야 합니다.");
    }
    if(new Set(numbers).size !== 6) {
      throw new Error("[ERROR] 로또 번호는 중복이 없어야 합니다.");
    }
    numbers.map((number) => {
      this.constructor.validateScope(number);
    });
  }

  static validateScope(number) {
    if(number < 1 || number > 45) {
      throw new Error("[ERROR] 로또 번호는 1~45까지의 숫자여야 합니다.");
    }
  }

  static getRandomNumber() {
    const randomNumber = MissionUtils.Random.pickUniqueNumbersInRange(1, 45, 6).sort((a,b)=>a-b);
    return randomNumber;
  }
}

module.exports = Lotto;
