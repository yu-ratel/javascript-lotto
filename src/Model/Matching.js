class Matching {
  #size = 2; 

  fairMatching(field) {
    const matchingList = [];
    for(let index = 0; index < field.length; index += this.#size) {
      matchingList.push(field.slice(index, index + this.#size));
    }
    if(field.length % 2 === 1) {
      matchingList[matchingList.length - this.#size].push(matchingList.pop().join());
    }

    return matchingList;
  }
}

module.exports = Matching;
