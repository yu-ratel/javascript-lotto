const LottoDate = require("../src/Model");
const MissionUtils = require("@woowacourse/mission-utils");

const date = new LottoDate();

describe('작은 단위 테스트', () => {
  test('입력이 되는지' , () => {
    const input = 'hello world'

    date.inputDate = jest.fn();
    date.inputDate.mockImplementation((message, callback) => {
      callback(input);
    });
    
    date.inputDate('test', (result) => {
        expect(result).toBe(input)
    });
  })

  test('1000원 단위가 아니라면 오류를 던지는지', () => {
    expect(date.buyLottoErrorChekeu('3000')).toBeTruthy();
    expect(() => {
        date.buyLottoErrorChekeu('3200').toThrow();
    })
  })
});