const LottoGameTool = require("./LottoGameTool");
class App {
  constructor() {
  this.lottoGame = new LottoGameTool;
  }
  play() {
    this.lottoGame.lottoBuyStart();
  }
}

module.exports = App;


//내일 해야되는 것 
// 값 -> 상수화 
// 리팩토링 (어떻게 해야 더 예쁘게?)
// 소감문 작성 