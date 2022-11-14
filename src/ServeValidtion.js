class serveValidtion{
   static isValidLottoBuyPrice(price) {
    if (Number(price)%1000 !== 0 
    || Number.isNaN(price)) {
      throw new Error('[ERROR 1000원 단위의 숫자로 입력해 주세요.');
    }
    return true;
  }
}

module.exports = serveValidtion;