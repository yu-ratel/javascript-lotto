class Lotto {
  #numbers;

  constructor(numbers) {
    this.validate(numbers);
    this.#numbers = numbers;
  }

  validate(numbers) {
    if (numbers.length !== 6) {
      throw new Error("[ERROR] 로또 번호는 6개여야 합니다.");
    }
  }
  
  lottoSort() {
    this.#numbers.sort((a,b) => a-b );
    return this.#numbers;
  }

  jackpotState(list, bonus) {
    const answer = [];
    list.forEach((lotto) => {
      const count = lotto.filter(number => this.#numbers.includes(number)).length
      if(count === 5 && lotto.includes(bonus)) return answer.push(7);
      return answer.push(count)
    })
    return answer;
  }

}

module.exports = Lotto;
