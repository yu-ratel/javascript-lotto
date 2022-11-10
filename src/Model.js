const MissionUtils = require("@woowacourse/mission-utils");
const Lotto = require("../src/Lotto");


class LottoDate { 
  constructor() {
  }

  inputDate(messge, callback) {
    MissionUtils.Console.readLine(messge, callback);
  }

  lottoBuyStart() {
    this.inputDate('구입금액을 입력해 주세요.\n', this.buyLottoErrorChekeu.bind(this));
  }
  
  buyLottoErrorChekeu(buyLotto) {
    if (Number(buyLotto)%1000 === 0) {
        return true;
    }
    
    throw new Error('[ERROR] 1000원 단위로 입력되게 해주세요.')
  }

  getRandomNumber() {
    return MissionUtils.Random.pickUniqueNumbersInRange(1, 45, 6);
  }
}

module.exports = LottoDate; 

const a = new LottoDate();
a.lottoBuyStart();


//bind
//bind 메서드는 매개변수로 전달받은 오브젝트로 this가 바인딩된 함수를 반환한다. 
//이것을 하드 바인딩이라고 하는데 하드 바인딩된 함수는 이후 호출될 때마다 처음 정해진 this 바인딩을 가지고 호출된다.