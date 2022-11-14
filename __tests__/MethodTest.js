const LottoGameTool = require("../src/LottoGameTool");
const MissionUtils = require("@woowacourse/mission-utils");
const GameHandler = require("../src/GameHandler");
const ServeValidtion = require("../src/ServeValidtion");


describe('도메인 로직 작은 단위 테스트', () => {
  test('1000원 단위가 아니라면 오류를 던지는지', () => {
    expect(ServeValidtion.isValidLottoBuyPrice('3000')).toBeTruthy();
    expect(() => {
        ServeValidtion.isValidLottoBuyPrice('3200').toThrow();
    })
  })

  test('주어진 금액대로 1장당 1000원의 로또의 갯수가 잘 나오는지' , () => {
    expect(GameHandler.randomNumberCount('30000')).toBe(30);
  })

  test('구매한 로또 갯수대로 저장을 하는지', () => {
    expect(GameHandler.randomNumberSaveKit(7).length).toBe(7);
  })
});

MissionUtils.Console.close();