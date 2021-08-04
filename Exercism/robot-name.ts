// note this one may take a long time to test because the test goes over EVERY Possibility which took me 18 seconds to generate
export default class Robot {
  // upcoming comment is for the formatter, please ignore
  // prettier-ignore
  private readonly letters: string[] = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z",];
  private _name: string;

  //  generate our random letter and number, the letter is generated from using the array above
  private randomLetter = (): string =>
    this.letters[Math.floor(Math.random() * 26)];
  private randomNumber = (): number => Math.floor(Math.random() * 10);
  /* 
  better way for random letter and number:
  randLetter(): string {return 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'[Math.floor(Math.random() * 26)];}
  randNumber(): string {return '0123456789'[Math.floor(Math.random() * 10)];}
  */

  //  create a set to store our names to store the unique values
  // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Set
  // sets are very useful to keep unique values, we can check if a value exists with has

  // The reason we're using static is because we want to have one instance throughout the different robots we make!
  static nameList: Set<string> = new Set<string>();

  constructor() {
    this._name = this.generateName();
  }

  public get name(): string {
    return this._name;
  }

  public resetName(): void {
    this._name = this.generateName();
  }

  public static releaseNames(): void {
    this.nameList.clear();
  }

  private generateName(): string {
    let result: string = "";
    do {
      // generating name
      result =
        this.randomLetter() +
        this.randomLetter() +
        this.randomNumber() +
        this.randomNumber() +
        this.randomNumber();
      // check if the name has already been generated
    } while (Robot.nameList.has(result));
    Robot.nameList.add(result);
    return result;
  }
}
