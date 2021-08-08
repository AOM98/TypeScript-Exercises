export default class Luhn {
  constructor() {}
  static valid(inNumber: string): boolean {
    // Spaces must be stripped
    let strippedNumber = inNumber;
    if (inNumber.indexOf(" ") != -1)
      strippedNumber = inNumber.replace(/\s/g, "");

    // Strings of length 1 or less are not valid.
    if (strippedNumber.length < 2) return false;

    // a very compact solution offered by G-Rath (on exercism)
    //prettier-ignore
    return (
      Array.from(inNumber) // creates an array from the string
        .reverse() // reverses the string (since Luhn goes from right to left)
        .filter((char) => char !== " ") // checks for spaces
        .map(Number) // turn our elements from string into Number type
        .map((num, i) => (i % 2 !== 0 ? num * 2 : num)) 
        // with map implementation, using an arrow function we can have the element (num) and the index (i)
        // we use the index to determine whether we double the number or not
        
        .map((num) => (num > 9 ? num - 9 : num)) // we check if the number is bigger than 9 hence, 2 digits if so we subtract 9.
        .reduce((sum, num) => sum + num, 0) % 10 === 0 // this function reduces the array to a single value instead of an array.
    );
  }
}
