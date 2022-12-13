const InputView = require('../View/InputView');
const OutputView = require('../View/OutputView');
const matchingState = require('../Model/matchingState');
const { Console } =require('@woowacourse/mission-utils');

class Controller {
  constructor() {
    this.state = new matchingState();
  }
  
  inputFuntion() {
    InputView.readFunction((input) => {
      if(input === '2') return this.inputLookup();
      if(input === '3') return this.reSet();
      if(input === 'Q') return Console.close();
      return this.inputMatching();
    });
  }

  inputMatching() {
    InputView.readMatching((input) => {
      const list = input.split(',');
      if(this.state.isOverlap(input))return this.isMatching(list)
      return this.matchingResult(this.state.updata(list));
    });
  }

  isMatching(input) {
    InputView.readReMatching((select) => {
      if(select === '네') return this.matchingResult(this.state.reUpdata(input));

      return this.isMatching()
    })
  }

  inputLookup() {
    InputView.readMatching((input) => {
        this.matchingResult(this.state.lookUpData(input));
    })
  }
  matchingResult(list) {
    OutputView.matchingList(list);
    
    return this.inputFuntion();
  }

  reSet() {
    this.state.reSetData();
    OutputView.reSet();
    this.inputFuntion();
  }
}

let a = new Controller;
a.inputFuntion();