class Matrix {
  // declare our instance variables (class variables)
  public rows:number[][];
  public columns: number[][];

  
  constructor(private matrixString: string) {
    // To achieve the rows, we simply split the input string by the new lines (to generate the rows)
    // and then for each generated element, we split by the space
    this.rows = matrixString.split('\n').map(row => row.split(' ').map(element => Number(element)));

    this.columns = this.rowsToColumns(this.rows);
  }

  // a function to flip the rows to columns
  private rowsToColumns(inputRows: number[][]): number[][]{
    let columnResult: number[][] = [];
    // loop through each row (the outer loop)
    for (let i = 0; i < inputRows.length; i++) {
      // append every i'th element of a row to the column list
      columnResult.push(inputRows.map(row => row[i]));
    }
    return columnResult;
  }
}

export default Matrix