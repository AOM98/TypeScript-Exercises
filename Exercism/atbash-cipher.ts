export default class AtbashCipher {
  private readonly alphabet: string = "abcdefghijklmnopqrstuvwxyz";

  public encode(inputString: string): string {
    let filteredString = inputString
      .toLowerCase()
      .replace(/[^A-Za-z0-9]+/g, "");
    let result = "";

    let counter = -4;
    for (let i = 0; i < filteredString.length; i++) {
      if (parseInt(filteredString.charAt(i)) < 10) {
        result += filteredString.charAt(i);
      } else {
        let encoderIndex = Math.abs(filteredString.charCodeAt(i) - 97 - 25);
        result += this.alphabet.charAt(encoderIndex);
      }
      if (counter++ % 5 == 0) result += " ";
    }

    return result.trim();
  }

  public decode(inputString: string): string {
    let filteredString = inputString
      .toLowerCase()
      .replace(/[^A-Za-z0-9]+/g, "");
    let result = "";

    for (let i = 0; i < filteredString.length; i++) {
      if (parseInt(filteredString.charAt(i)) < 10) {
        result += filteredString.charAt(i);
      } else {
        let decoderIndex = Math.abs(filteredString.charCodeAt(i) - 97 - 25);
        result += this.alphabet.charAt(decoderIndex);
      }
    }

    return result;
  }
}
