const LottoGameTool = require("../src/LottoGameTool");
const MissionUtils = require("@woowacourse/mission-utils");

const date = new LottoGameTool();

describe('도메인 로직 작은 단위 테스트', () => {
  test('1000원 단위가 아니라면 오류를 던지는지', () => {
    expect(date.buyLottoErrorChekeu('3000')).toBeTruthy();
    expect(() => {
        date.buyLottoErrorChekeu('3200').toThrow();
    })
  })

  test('주어진 금액대로 1장당 1000원의 로또의 갯수가 잘 나오는지' , () => {
      expect(date.randomNumberCount('30000')).toBe(30);
  })
});

MissionUtils.Console.close();