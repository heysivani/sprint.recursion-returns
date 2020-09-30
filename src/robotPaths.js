class Board {
  constructor(size) {
    this.board = [];
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
}

class RobotPaths {
  // initialize all your options
  // you may want to change this code later on, too
  constructor(size) {
    this.board = new Board(size);
    this.row = 0;
    this.col = 0;
    this.currentCoordinate = [0, 0];
    this.goalCoordinate = [size - 1, size - 1];
    this.pathCount;
  }

  solve() {
    console.log("I'm SOLVING");
    let down = (currentCoordinate) => {
      return currentCoordinate[1]++;
    };
    let top = (currentCoordinate) => {
      return currentCoordinate[1]--;
    };
    let left = (currentCoordinate) => {
      return currentCoordinate[0]--;
    };
    let right = (currentCoordinate) => {
      return currentCoordinate[0]++;
    };
    let moves = [top, down, left, right];

    function moveRobot() {
      console.log("CURRENT COORDINATE " + this.currentCoordinate);
      // looping through moves
      for (let i = 0; i < moves.length; i++) {
        let testCoordinate = moves[i](this.currentCoordinate);
        // check wether we're still on the board if we move
        if (testCoordinate[1] < 0 || testCoordinate[1] > n - 1) {
          // check if we've not visited the tile and if we're not at the goal yet
          if (
            !this.hasBeenVisited(testCoordinate[0], testCoordinate[1]) &&
            testCoordinate !== this.goalCoordinate
          ) {
            currentCoordinate = testCoordinate;
            this.togglePiece(currentCoordinate[0], currentCoordinate[1]);
            moveRobot();
          } else if (
            !this.hasBeenVisited(testCoordinate[0], testCoordinate[1]) &&
            testCoordinate === this.goalCoordinate
          ) {
            // check if we've not visited the tile and we're at the goal!
            this.pathCount++;
            return;
          } else if (
            this.hasBeenVisited(testCoordinate[0], testCoordinate[1])
          ) {
            // in case we have visited the tile
            return;
          }
        } else {
          return;
        }
      }
      return;
    }

    moveRobot();
    console.log("PATH COUNT " + this.pathCount);
    return this.pathCount;
  }
}

module.exports = { RobotPaths };
