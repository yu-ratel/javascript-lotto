const InputView = require('../View/InputView');

class Controller {
  
  inputFuntion() {
    InputView.readFunction((input) => {
      if(input === '1') return this.inputMatching();
    });
  }
  
  inputMatching() {
    InputView.readMatching((input) => {
      console.log(input)
    });
  }
}

let a = new Controller;
a.inputFuntion();