const {} = require('../Utils/Crew');
class Matching {
  #matchingList = [];

  fairMatching(field) {
    for(let index = 0; index < field.length; index += 2) {
      this.#matchingList.push(field.slice(index, index + 2));
    }
    if(field.length % 2 === 1) {
      this.#matchingList[this.#matchingList.length - 2].push(this.#matchingList.pop().join());
    }

    return this.#matchingList;
  }
}

module.exports = Matching;
