let cell = document.querySelectorAll(".cell");
let popup = document.querySelector(".hide");
let msg = document.querySelector(".result");
let newgame = document.getElementById("newgame");
let restart = document.getElementById("restart");

let xturn = true;
let count = 0;

// Make list of winning patterns
let winningPattern = [ [0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6] ];

const disablebtn = () => {
    cell.forEach((element) => {
        element.disabled = true;
    })
    popup.classList.remove('hide');
}

const enablebtn = () => {
    cell.forEach((element) => {
        element.innerText = "";
        element.disabled = false;
    })
    popup.classList.add("hide");
}

const winFuction = (letter) => {
    disablebtn();
    if(letter === 'X') {
        msg.textContent = "X won";
    }
    else {
        msg.textContent = "O won";
    }
}

const drawFunction = () => {
    disablebtn();
    msg.textContent = "It's a draw.";
}

newgame.addEventListener('click',() => {
    enablebtn();
    count = 0;
})

restart.addEventListener('click',() => {
    enablebtn();
    count = 0;
})

const winchecker = () => {
    for(let i of winningPattern) {
        let [e1,e2,e3] = [cell[i[0]].innerText,cell[i[1]].innerText,cell[i[2]].innerText];
        if((e1 != "") && (e2 != "") && (e3 != "")) {
            if(e1 == e2 && e2 == e3) {
                if(e1 == "X") {
                    winFuction('X');
                }
                else {
                    winFuction('O')
                }
            }
        }
    }
}

cell.forEach((element) => {
    element.addEventListener('click',() => {
        if(xturn) {
            xturn = false;
            element.innerText = 'X';
            element.disabled;
        }
        else {
            xturn = true;
            element.innerText = 'O';
            element.disabled;
        }
        count += 1;
        if(count == 9) {
            drawFunction();
        }
        winchecker();
    })
})

window.addEventListener('load', () => {

    enablebtn();

})