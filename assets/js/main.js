const state = {
    view: {
        time: document.querySelector("#time-id"),
    },

    values:{
        timeTotal: 30
    },

    actions:{
        countTime: setInterval(spendTime, 1000)
    }

}
const emojis = {
    easy:["🦧","🦧","🐸","🐸","🐦","🐦","🐭","🐭"],
    medium: ["🦧","🦧","🐸","🐸","🐦","🐦","🐭","🐭","🦓","🦓","🐺","🐺","🐢","🐢","🦈","🦈"],
    hard:["🦧","🦧","🐸","🐸","🐦","🐦","🐭","🐭","🦓","🦓","🐺","🐺","🐢","🐢","🦈","🦈", "🐠","🐠"]
};

let openCards = [];
let randomEmojis = emojis.medium.sort(() => (Math.random() > 0.5 ? 2 : -1));

for (let i = 0; i < emojis.medium.length; i++) {
    let box = document.createElement("div");
    box.className = "itens";
    box.innerHTML = randomEmojis[i];
    box.onclick = handleClick;
    document.querySelector(".game").appendChild(box);
}

function handleClick() {
    if (openCards.length < 2) {
        this.classList.add("boxOpen");
        openCards.push(this);
    }
    if (openCards.length === 2) {
        setTimeout(checkMatch, 500);
    }
}

function checkMatch() {
    if (openCards[0].innerHTML === openCards[1].innerHTML) {
        openCards[0].classList.add("boxMatch");
        openCards[1].classList.add("boxMatch");
    } else {
        openCards[0].classList.remove("boxOpen");
        openCards[1].classList.remove("boxOpen");
    }
    openCards = [];

    if(document.querySelectorAll(".boxMatch").length === emojis.length){
        alert("Voce Venceu");
    }
}

function spendTime(){
    state.values.timeTotal--;
    state.view.time.textContent = state.values.timeTotal;
    if(state.values.timeTotal === 0){

        clearInterval(state.actions.timerId);
        clearInterval(state.actions.countTime);
        alert("Game Over")
    }
}

 spendTime();

