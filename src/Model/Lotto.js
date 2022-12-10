class Lotto {
  #numbers;
  #jackpotMoney = 0;
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
    const state = [];
    list.forEach((lotto) => {
      const count = lotto.filter(number => this.#numbers.includes(number)).length
      if(count === 5 && lotto.includes(bonus)) return state.push(7);
      return state.push(count)
    })
    return this.jackpotResult(state)
  }

  jackpotResult(state) {
    const answer = [0,0,0,0,0];
    state.forEach((count) => {
      if(count === 3) answer[0] += 1 , this.#jackpotMoney += 5000;
      if(count === 4) answer[1] += 1 , this.#jackpotMoney += 50000;
      if(count === 5) answer[2] += 1 , this.#jackpotMoney += 1500000;
      if(count === 7) answer[3] += 1 , this.#jackpotMoney += 30000000;
      if(count === 6) answer[4] += 1 , this.#jackpotMoney += 2000000000;
    })
    return [answer, this.#jackpotMoney];
  }
}

module.exports = Lotto;
