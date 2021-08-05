export default class GradeSchool {
  private nameList: { [key: string]: string } = {};
  private _classList: Map<string, string[]> = new Map();

  // create nameList to  keep the students so we avoid duplication

  constructor() {}

  // Add student
  public addStudent(name: string, grade: number): void {
    let gradeStr: string = grade.toString();
    if (!(name in this.nameList)) {
      this.nameList[name] = gradeStr;
      //   push the name into the array which has the grade as key]
      if (this._classList.has(gradeStr)) {
        // ! is a Non-null assertion operator, which means that we're sure
        // that the value is not null or undefined

        // we can also use ? Optional Chaining:
        //https://www.freecodecamp.org/news/how-the-question-mark-works-in-javascript/
        this._classList.get(gradeStr)?.push(name);
      } else this._classList.set(gradeStr, [name]);
    } else {
      // delete old grade
      let oldGradeStr = this.nameList[name];
      this._classList.set(
        oldGradeStr,
        this._classList.get(oldGradeStr)!.filter((element) => element != name)
      );
      // add new grade
      if (this._classList.has(gradeStr)) {
        this._classList.get(gradeStr)?.push(name);
      } else this._classList.set(gradeStr, [name]);
    }
  }

  // List students in grade
  public studentsInGrade(grade: number): string[] | undefined {
    let gradeStr: string = grade.toString();
    let result = this._classList.get(gradeStr)?.sort();
    result == undefined ? (result = []) : (result = result);
    let cloneResult = result;
    return [...cloneResult];
  }

  // list all students (sorted)
  public studentRoster(): Map<string, string[]> {
    //   we must clone here and sort and send the new map back
    const copy = new Map<string, string[]>();
    this._classList.forEach((names: string[], grade: string) => {
      copy.set(grade, [...names].sort());
    });

    // create map copy to avoid modification from outside sources
    return copy;
  }
}
