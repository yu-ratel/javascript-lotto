const InputView = require('../View/InputView');
const OutputView = require('../View/OutputView');
const Frontend = require('../Model/Frontend');
const { Console } =require('@woowacourse/mission-utils');

class Controller {
  constructor() {
    this.frontend = new Frontend();
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
        if(this.frontend.isOverlap(input))return this.isMatching(input)
        return this.matchingResult(this.frontend.updata(input));
    });
  }

  isMatching(input) {
    InputView.readReMatching((select) => {
      if(select === '네') return this.matchingResult(this.frontend.reUpdata(input));

      return this.isMatching()
    })
  }

  inputLookup() {
    InputView.readMatching((input) => {
        this.matchingResult(this.frontend.lookUpData(input));
    })
  }
  matchingResult(list) {
    OutputView.matchingList(list);
    
    return this.inputFuntion();
  }

  reSet() {
    this.frontend.reSetData();
    OutputView.reSet();
    this.inputFuntion();
  }
}

let a = new Controller;
a.inputFuntion();