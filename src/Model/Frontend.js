const Matching = require('./Matching');
const { frontend, randomCrew } = require('../Utils/Crew');

class Frontend {
  #totalstate = [];
  #reIndex = 0;
  #matchingList = [];

  constructor() {
    this. matching = new Matching();
  }

  isOverlap(input) {
    if(this.#totalstate) {
      for(let index = 0; index < this.#totalstate.length; index += 1) {
        if(this.#totalstate[index].join() === input) {
          this.#reIndex = index;
          return true;
        }
      }
    }

    return false;
  }

  updata(input) {
    this.#totalstate.push(input.split(','));
    this.#matchingList.push(this.matching.fairMatching(randomCrew(frontend)));

    return this.#matchingList;
  }

  reUpdata(input) {
    this.#totalstate[this.#reIndex] = input.split(',');
    this.#matchingList[this.#reIndex] = this.matching.fairMatching(randomCrew(frontend));

    return this.#matchingList[this.#reIndex];
  }

  lookUpData(input) {
    if(this.#totalstate) {
      for(let index = 0; index < this.#totalstate.length; index += 1) {
        if(this.#totalstate[index].join() === input) {
          return this.#matchingList[index];
        }
      }
    }

    return false;
  }

  reSetData() {
    this.#totalstate = [];
    this.#reIndex = 0;
    this.#matchingList = [];
  }
}

module.exports = Frontend;