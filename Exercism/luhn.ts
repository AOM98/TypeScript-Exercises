export default class Luhn {
  constructor() {}
  static valid(inNumber: string): boolean {
    // Spaces must be stripped
    let strippedNumber = inNumber;
    if (inNumber.indexOf(" ") != -1)
      strippedNumber = inNumber.replace(/\s/g, "");

    // Strings of length 1 or less are not valid.
    if (strippedNumber.length < 2) return false;

    let doubledSum: number = 0,
      originalSum: number = 0;
    // checking if number is valid
    // replace every second number with _

    let counter: number = 0;

    for (let i = strippedNumber.length - 1; i >= 0; i--) {
      counter++;
      let convertedNumber = parseInt(strippedNumber.charAt(i));
      // our numbers to double
      if (counter % 2 == 0) {
        let doubledConv = convertedNumber * 2;

        // check if it's double digits or not
        doubledSum += doubledConv > 9 ? doubledConv - 9 : doubledConv;
      } else {
        originalSum += convertedNumber;
      }
    }
    return (originalSum + doubledSum) % 10 == 0 ? true : false;
  }
}
