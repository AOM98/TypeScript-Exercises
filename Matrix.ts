class Matrix {
  // declare our instance variables (class variables)
  public rows:number[][];
  public columns: number[][];

  
  constructor(private matrixString: string) {
    // Your code here
    // our rows is simply splitting the input string by the new lines (to generate the rows)
    // and then for each generated element, we split by the space
    this.rows = matrixString.split('\n').map(row => row.split(' ').map(x => +x));

    this.columns = this.rowsToColumns(this.rows);
  }

  // a function to flip the rows to columns
  private rowsToColumns(inputRows: number[][]): number[][]{
    let columnResult: number[][] = [[]];
    // outer loop (outer array of rows)
    for(let x = 0; x<inputRows.length; x++){
      let currentRow = inputRows[x];
      
      // inner array (inner array of rows)
      for(let y = 0; y < currentRow.length; y++){
        // lazy initialization.
        if (!columnResult[y]) columnResult[y] = []
          columnResult[y][x] = currentRow[y];
      }
    } 
    console.log(columnResult)
    return columnResult;
  }
}

export default Matrix