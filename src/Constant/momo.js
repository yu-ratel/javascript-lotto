const { Random } = require('@woowacourse/mission-utils')
function jackpotState(list, bonus) {
    const numbera = [1,2,3,4,5,6];
    const answer = [];
    list.forEach((lotto) => {
      const count = lotto.filter(number => numbera.includes(number)).length
      console.log(count)
    })
    return answer;
  }
  
  const numbers = [[1,2,3,4,5,6], [1,3,5,6,7,8,9]]
  console.log(jackpotState(numbers, 8))
