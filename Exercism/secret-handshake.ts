export default class HandShake {
  private binaryCode: string;
  private keys: string[] = [
    "wink",
    "double blink",
    "close your eyes",
    "jump",
    "reverse",
  ];
  constructor(private code: number) {
    this.binaryCode = code.toString(2); // converts number into base 2 (binary).
  }

  public commands(): string[] {
    let result: string[] = [];

    // rest parameters can be used on strings
    // reverse strings:
    let binArray: string[] = [...this.binaryCode].reverse();

    for (let i = 0; i < binArray.length; i++) {
      if (i === 4) result.reverse();
      else if (binArray[i] == "1") {
        result.push(this.keys[i]);
      }
    }
    return result;
  }
}
