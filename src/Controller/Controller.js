const InputView = require('../View/InputView');

class Controller {
  
  inputFuntion() {
    InputView.readFunction((input) => {
      console.log(input)
    });
  }
}

let a = new Controller;
a.inputFuntion();