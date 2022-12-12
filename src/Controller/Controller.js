const InputView = require('../View/InputView');
const OutputView = require('../View/OutputView');
const { frontend, backend } = require('../Utils/Crew');
const Matching = require('../Model/Matching');

class Controller {
  constructor() {
    this.list = new Matching()
  }
  
  inputFuntion() {
    InputView.readFunction((input) => {
      if(input === '1') return this.inputMatching();
    });
  }
  
  inputMatching() {
    InputView.readMatching((input) => {
      this.matchingResult();
    });
  }

  matchingResult() {
    OutputView.matchingList(this.list.fairMatching(frontend))
  }
}

let a = new Controller;
a.inputFuntion();