const LOTTO = {
  MIN_NUMBER: 1, 
  MAX_NUMBER: 45,
  LENGTH: 6,
  PRICE: 1000,
  JACKPOT_MONEY_LIST: [5000,50000,1500000,30000000,2000000000],
}

const PROCESS_MESSAGE = {
  BUY_START: '구입금액을 입력해 주세요.',
  BUY_LIST: '개를 구매했습니다.',
  JACKPOT_START: '당첨 번호를 입력해 주세요.',
  BONUS_START: '보너스 번호를 입력해 주세요.',
}

const RESULT_MESSAGE = {
  TOP_TEXT: '당첨 통계',
  MIDDLE_TEXT: '---',
  WON_LOTTE_FIVE: '3개 일치 (5,000원) - ',
  WON_LOTTE_FOUR: '4개 일치 (50,000원) - ',
  WON_LOTTE_THREE: '5개 일치 (1,500,000원) - ',
  WON_LOTTE_TWO: '5개 일치, 보너스 볼 일치 (30,000,000원) - ',
  WON_LOTTE_ONE: '6개 일치 (2,000,000,000원) - ',
  END: '개'
}

const LOTTERY_RANK = {
  FIVE: 5,
  FOUR: 4,
  THREE: 3,
  TWO: 2,
  ONE: 1,
}

const RATE_OF_RETURN = {
  HEADER_TEXT: '총 수익률은 ',
  FOOTER_TEXT: '%입니다.', 
  MULTIPLY_VALUE: 100,
}

const NUMBER = {
  ZERO: 0,
  ONE: 1,
  TWO: 2,
  THREE: 3,
  FOUR: 4,
  FIVE: 5,
  SIX: 6,
}