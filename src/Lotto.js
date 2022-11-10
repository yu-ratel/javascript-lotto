class Lotto {
  #numbers;

  constructor(numbers) {
    this.validateLength(numbers);
    this.validateOverlap(numbers);
    this.#numbers = numbers;
  }

  validateLength(numbers) {
    if (numbers.length !== 6) {
      throw new Error("[ERROR] 로또 번호는 6개여야 합니다.");
    }
  }

  // TODO: 추가 기능 구현

  validateOverlap(numbers) {
    if(new Set(numbers).size !== 6) {
      throw new Error("[ERROR] 로또 번호는 중복이 없어야 합니다.");
    }
  }
}

module.exports = Lotto;
