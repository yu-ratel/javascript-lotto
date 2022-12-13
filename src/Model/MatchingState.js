const Matching = require('./Matching');
const { frontend, backend, randomCrew } = require('../Utils/Crew');

class matchingState {
  #totalstate = [];
  #reIndex = 0;
  #matchingList = [];

  constructor() {
    this. matching = new Matching();
  }

  isOverlap(input) {
    for(let index = 0; index < this.#totalstate.length; index += 1) {
      if(this.#totalstate[index].join() === input) {
        this.#reIndex = index;
        return true;
      }
    }
    
    return false;
  }

  updata(input) {
    this.#totalstate.push(input);
    this.#matchingList.push(this.matching.fairMatching(randomCrew(frontend)));
    this.#reIndex += 1; 

    return this.#matchingList[this.#reIndex-1];
  }

 
  reUpdata(input) {
    this.#totalstate[this.#reIndex] = input;
    this.#matchingList[this.#reIndex] = this.matching.fairMatching(randomCrew(frontend));

    return this.#matchingList[this.#reIndex];
  }

  lookUpData(input) {
    for(let index = 0; index < this.#totalstate.length; index += 1) {
      if(this.#totalstate[index].join() === input) {
        return this.#matchingList[index];
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

module.exports = matchingState;