function TicTaoToe() {
    const gameBoard = [
        ["-", "-", "-"],
        ["-", "-", "-"],
        ["-", "-", "-"]
    ]

    const winPattern = [
        [[0, 0], [0, 1], [0, 2]],
        [[1, 0], [1, 1], [1, 2]],
        [[2, 0], [2, 1], [2, 2]],
        [[0, 0], [1, 0], [2, 0]],
        [[0, 1], [1, 1], [2, 1]],
        [[0, 2], [1, 2], [2, 2]],
        [[0, 0], [1, 1], [2, 2]],
        [[0, 2], [1, 1], [2, 0]]
    ]

    function showGameBoard(board) {
        for (let i = 0; i < board.length; i++) {
            console.log(board[i].join(" "));
        }
    }

    function possibleMoves(board) {
        let possiblemoves = [];
        for (let i = 0; i < board.length; i++) {
            for (let j = 0; j < board[i].length; j++) {
                if (board[i][j] === "-") {
                    possiblemoves.push([i, j]);
                }
            }
        }
        return possiblemoves;
    }

    function usrInp() {
        let Move = prompt("Enter your move here!").split(",").map(function (val) { return Number(val) });
        const movesToPlay = possibleMoves(gameBoard);
        let isValidMove = false;
        while (!isValidMove) {
            if (Move[0] >= 1 && Move[0] <= 3 && Move[1] >= 1 && Move[1] <= 3) {
                let row = Move[0] - 1;
                let col = Move[1] - 1;
                for (let i = 0; i < movesToPlay.length; i++) {
                    let [x, y] = movesToPlay[i];
                    if (row === x && col === y) {
                        isValidMove = true;
                        return [row, col]
                    };
                }
                if (!isValidMove) {
                    console.warn("Position already used!");
                    Move = prompt("Enter your move here!").split(",").map(function (val) { return Number(val) });
                }
            } else {
                console.error("Invalid Move!");
                Move = prompt("Enter your move here!").split(",").map(function (val) { return Number(val) });
            }
        }
    }

    function usrChance(usrMove, usrSymbol) {
        let [row, col] = usrMove;
        gameBoard[row][col] = usrSymbol;
        showGameBoard(gameBoard);
    }


    function minimax(board,isAITurn,compSymbol,userSymbol,winnningPatterns){
        let result = isGameOver(board,winnningPatterns);
        if(result !== null){
            if(result === compSymbol) return 10;
            else if(result === userSymbol) return -10;
            else return 0;
        }
        if(isAITurn){
            let bestScore = -Infinity;
            let move = possibleMoves(board);
            for(let i = 0;i<move.length;i++){
                let [row,col] = move[i];
                board[row][col] = compSymbol;
                let score = minimax(board,false,compSymbol,userSymbol,winnningPatterns);
                board[row][col] = "-"
                bestScore = Math.max(bestScore,score);
            }
            return bestScore;
        }else{
            let bestScore = Infinity;
            let move = possibleMoves(board);
            for(let i = 0;i<move.length;i++){
                let [row,col] = move[i];
                board[row][col] = userSymbol;
                let score = minimax(board,true,compSymbol,userSymbol,winnningPatterns);
                board[row][col] = "-";
                bestScore = Math.min(bestScore,score);
            }
            return bestScore;
        }
    }

    function bestMove(board,compSymbol,userSymbol){
        let bestScore = -Infinity;
        let BESTMOVE = null
        let moves = possibleMoves(board);
        for(let i = 0;i<moves.length;i++){
            let [row,col] = moves[i];
            board[row][col] = compSymbol;
            let score = minimax(board,false,compSymbol,userSymbol,winPattern);
            board[row][col] = "-";
            if(score > bestScore){
                bestScore = score;
                BESTMOVE =  moves[i];
            }
        }
        return BESTMOVE;
    }

    function compChance(compSymbol,userSymbol) {
        let compMove = null;
        if((Math.floor(Math.random() * 10)) + 1 <= 8){
            compMove = bestMove(gameBoard,compSymbol,userSymbol)
        }else{
            let moves = possibleMoves(gameBoard);
            let randomMove = moves[Math.floor(Math.random() * moves.length)];
            compMove = randomMove;
        }
        let [row, col] = compMove;
        gameBoard[row][col] = compSymbol;
        showGameBoard(gameBoard);
    }

    function winCheck(board, winnningPatterns) {
        for (let i = 0; i < winnningPatterns.length; i++) {
            let [a, b, c] = winnningPatterns[i];
            let first = board[a[0]][a[1]];
            let second = board[b[0]][b[1]];
            let third = board[c[0]][c[1]];
            if (first !== "-" && first === second && second === third) {
                return first;
            }
        }

    }

    function isGameOver(board, winnningPatterns) {
        let winner = winCheck(board, winnningPatterns);
        if (winner) return winner;
        else if (possibleMoves(board).length <= 0) return "tie";
        return null;// game is on-going
    }

    let userSymbol = prompt("Choose your symbol from X or O").toUpperCase();
    while (userSymbol !== "X" && userSymbol !== "O") {
        userSymbol = prompt("Choose Correct symbol from X or O").toUpperCase();
    }
    let compSymbol = userSymbol === "X" ? "O" : "X";

    showGameBoard(gameBoard);
    while (isGameOver(gameBoard, winPattern) === null) {
        let usrMove = usrInp();
        usrChance(usrMove, userSymbol);
        if (isGameOver(gameBoard, winPattern) === null) {
            compChance(compSymbol,userSymbol);
        } else {
            break;
        }
    }

    let finalResult = isGameOver(gameBoard,winPattern);
    if(finalResult === "tie"){
        console.log("Game is Tie");
    }else{
        console.log(`Game is Over and the Winner is ${finalResult}`);
    }


}
TicTaoToe();