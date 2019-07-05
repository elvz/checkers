// for hide global variables
(function () {
    const boardState = new BoardState(32);

    const whiteCheck = document.getElementById("white-check");
    const blackCheck = document.getElementById("black-check");
    const whiteQueenCheck = document.getElementById("white-queen-check");
    const blackQueenCheck = document.getElementById("black-queen-check");

    function getCell() {
        if (whiteCheck.checked) {
            return WHITE_CELL;
        }

        if (blackCheck.checked) {
            return BLACK_CELL;
        }

        if (whiteQueenCheck.checked) {
            return WHITE_QUEEN_CELL;
        }

        if (blackQueenCheck.checked) {
            return BLACK_QUEEN_CELL;
        }

        return NONE_CELL;
    }

    const board = document.getElementById("board");

    renderEmptyBoard(board);

    const blacks = document.querySelectorAll(".black-cell");

    for (let i = 0; i < blacks.length; i++) {
        const blackCell = blacks[i];

        (function (index) {
            blackCell.addEventListener("click", function fill(e) {
                const cell = getCell();

                e.target.setAttribute("style", cell.style);

                boardState.set(index, cell.value);
            })
        })(i);
    }

    document.getElementById("js-goto-view").addEventListener("click", function () {
        window.location.href = "./view.html?" + boardState.toQueryParams().join("&");
    });

})();
