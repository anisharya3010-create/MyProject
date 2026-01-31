let boxes = document.querySelectorAll(".player");
let resetbtn = document.querySelector("#resetbtn");
let newbtn = document.querySelector("#newbtn");
let msgContainer = document.querySelector(".msg-container");
let msg = document.querySelector("#msg")
let turn0 = true;
let count = 0;
const winPatterns = [
    [0, 1, 2],
    [0, 3, 6],
    [0, 4, 8],
    [1, 4, 7],
    [2, 5, 8],
    [2, 4, 6],
    [3, 4, 5],
    [6, 7, 8],
];

const resetGame = () => {
    turn0 = true;
    enableBoxes();
    msgContainer.classList.add("hide");
    count = 0;
};


boxes.forEach((box) => {
    box.addEventListener("click", () => {
        count++;
        if (turn0) {
            box.innerText = "O";
            turn0 = false;
        }
        else {
            box.innerText = "X";
            turn0 = true;
        }

        box.disabled = true;
        checkWinner();

    });


});

const disableBoxes = () => {
    for (let box of boxes) {
        box.disabled = true;
    }
};

const enableBoxes = () => {
    for (let box of boxes) {
        box.disabled = false;
        box.innerText = "";
    }
};

const showWinner = (winner) => {
    msg.innerText = "Congratulations, Winner is " + winner;
    console.log(count);
    msgContainer.classList.remove("hide");
    disableBoxes();

};

const checkWinner = () => {
    for (pattern of winPatterns) {

        let pos1Val = boxes[pattern[0]].innerText;
        let pos2Val = boxes[pattern[1]].innerText;
        let pos3Val = boxes[pattern[2]].innerText;

        if (pos1Val != "" && pos2Val != "" && pos3Val != "") {
            if ((pos1Val === pos2Val) && (pos2Val === pos3Val)) {
                console.log("winner", pos1Val);
                console.log("winner", pos2Val);
                console.log("winner", pos3Val);
                showWinner(pos1Val);

            }

        }
    }

    if (count === 9) {
        draw();

    }

};

const draw = () => {
    msg.innerText = "It's a draw!";
    msgContainer.classList.remove("hide");
};

newbtn.addEventListener("click", resetGame);
resetbtn.addEventListener("click", resetGame);