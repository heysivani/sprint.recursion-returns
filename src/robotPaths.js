class Board {
  constructor(size) {
    this.board = [];
    this.target = size - 1;
    for (let row = 0; row < size; row += 1) {
      this.board.push([]);
      for (let col = 0; col < size; col += 1) {
        this.board[row].push(false);
      }
    }
  }

  togglePiece(row, col) {
    this.board[row][col] = !this.board[row][col];
    return this.board;
  }

  hasBeenVisited(row, col) {
    return this.board[row][col];
  }

  resetBoard() {
    for (let r = 0; r <= this.target; r++) {
      for (let c = 0; c <= this.target; c++) {
        if (this.hasBeenVisited(r, c)) {
          this.togglePiece(r, c);
        }
      }
    }
  }
}

class RobotPaths {
  // initialize all your options
  // you may want to change this code later on, too
  constructor(size) {
    this.board = new Board(size);
    this.row = 0;
    this.col = 0;
    this.goal = size - 1;
    this.pathCount = 0;
    this.size = size;
  }

  counter() {
    this.pathCount += 1;
    console.log(`counter updated to ${this.pathCount}`);
  }

  solve() {
    console.log(`STARTING goal ${this.goal}`);

    const moveRobot = (row, column) => {
      console.log(`CURRENT ROW  ${row} CURRENT COLUMN  ${column}`);

      // WIN and toggle
      if (row === this.goal && column === this.goal) {
        console.log(
          `GOAL OF ${this.goal} REACHED at row ${row} column ${column}`
        );
        console.log("WE WON");
        this.counter();
        //this.board.resetBoard();
        return;
      }
      // DOWN A ROW
      if (row + 1 <= this.goal && row + 1 >= 0) {
        console.log("TRY GOING DOWN?");
        // has been visited?
        if (!this.board.hasBeenVisited(row + 1, column)) {
          console.log("down OK!");
          this.board.togglePiece(row, column);
          moveRobot(row + 1, column);
        }
      }

      // UP A ROW
      if (row - 1 <= this.goal && row - 1 >= 0) {
        console.log("TRY GOING UP?");
        // has been visited?
        if (!this.board.hasBeenVisited(row - 1, column)) {
          console.log("up OK!");
          this.board.togglePiece(row, column);
          moveRobot(row - 1, column);
        }
      }

      // LEFT
      if (column - 1 <= this.goal && column - 1 >= 0) {
        console.log("TRY GOING LEFT?");
        // has been visited?
        if (!this.board.hasBeenVisited(row, column - 1)) {
          console.log("left OK!");
          this.board.togglePiece(row, column);
          moveRobot(row, column - 1);
        }
      }

      // RIGHT
      if (column + 1 <= this.goal && column + 1 >= 0) {
        console.log("TRY GOING RIGHT");
        // has been visited?
        if (!this.board.hasBeenVisited(row, column + 1)) {
          console.log("right OK!");
          this.board.togglePiece(row, column);
          moveRobot(row, column + 1);
        }
      }

      //return;
    };

    moveRobot(0, 0);
    const result = this.pathCount;
    console.log(`RESULT ${result}`);
    return result;
  }
}

module.exports = { RobotPaths };
