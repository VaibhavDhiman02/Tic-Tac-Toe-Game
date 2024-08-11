

let boxes = document.querySelectorAll(".box");
let reset = document.querySelector(".reset-btn");
let win = document.querySelector(".winner");
let count = 0;
let playerO = true;
const winningPattern = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
];

const checkWinner = () => {
    for (let pattern of winningPattern){
        
        let pos1 = boxes[pattern[0]].innerText;
        let pos2 = boxes[pattern[1]].innerText;
        let pos3 = boxes[pattern[2]].innerText;
        
        if (pos1 != "" && pos2 != "" && pos3 != ""){
            if (pos1 === pos2 && pos2 === pos3){
                showWinner(pos1);
            }
        }
    }
}

const disabledBtns = () => {
    for (let box of boxes){
        box.disabled = true;
    }
}

const enableBtns = () => {
    for (let box of boxes){
        box.disabled = false;
        box.innerText = "";
    }
}

const showWinner = (winner) => {
    win.innerText = "Congratullations.. You Won!!";
    win.classList.remove("hide");
    disabledBtns();
}

boxes.forEach((box) => {
    box.addEventListener("click", () => {
        count++;
        if(playerO){
            box.innerText = "O";
            playerO = false;
        } else {
            box.innerText = "X";
            playerO = true; 
        }
        box.disabled = true;
        checkWinner();

        if(count === 9){
            win.innerText = "OOPS!! Match Draw..";
            win.classList.remove("hide");
        }
    });
});

const resetBtn = () => {
    playerO = true;
    count = 0;
    enableBtns();
    win.classList.add("hide");
}

reset.addEventListener("click" , resetBtn);