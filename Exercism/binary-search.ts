export default class BinarySearch {
  public array: number[] | undefined = [];

  constructor(inputArray: number[]) {
    this.array = this.checkSorted(inputArray) ? inputArray : undefined;
  }

  //   reason we're creating the check sorted ourself is because
  //   it will take a O(n) is better than O(nlogn)
  private checkSorted(arrayToCheck: number[]): boolean {
    for (let index = 0; index < arrayToCheck.length - 1; index++) {
      if (arrayToCheck[index] > arrayToCheck[index + 1]) return false;
    }
    return true;
  }

  public indexOf(target: number): number {
    if (this.array == undefined) return -1;
    let left = 0;
    let right = this.array?.length;

    while (left <= right!) {
      let middle = Math.floor((left + right) / 2);
      if (this.array[middle] < target) left = middle + 1;
      else if (this.array[middle] > target) right = middle - 1;
      else return this.array[middle] == target ? middle : -1;
    }
    return -1;
  }
}
