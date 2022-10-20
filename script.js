const box1 = document.querySelector(".item-1");
const box2 = document.querySelector(".item-2");
const box3 = document.querySelector(".item-3");
const box4 = document.querySelector(".item-4");
const box5 = document.querySelector(".item-5");
const box6 = document.querySelector(".item-6");
const box7 = document.querySelector(".item-7");
const box8 = document.querySelector(".item-8");
const box9 = document.querySelector(".item-9");
const resetButton = document.querySelector(".reset");
let turn = document.querySelector(".turn");
let holder = {
    box1: "",
    box2: "",
    box3: "",
    box4: "",
    box5: "",
    box6: "",
    box7: "",
    box8: "",
    box9: "",
};
// console.log(container.length)
// for(let i=1; i<=container.length; i++){
//     holder.
// }


box1.addEventListener("click", e => {
    e.preventDefault();
    console.log("It worked1!")
    if (holder.box1 == ""){
        box1.innerHTML = turn.innerHTML;
        holder.box1 = turn.innerHTML;
        console.log(holder, turn.innerHTML)
        whosTurn();
        checkWin();
    }else{
        alert("That box is already selected")
    }
    
});
box2.addEventListener("click", e => {
    e.preventDefault();
    console.log("It worked2!")
    if (holder.box2 == ""){
        box2.innerHTML = turn.innerHTML;
        holder.box2 = turn.innerHTML;
        console.log(holder, turn.innerHTML)
        whosTurn();
        checkWin(); 
    }else{
        alert("That box is already selected")
    }
});
box3.addEventListener("click", e => {
    e.preventDefault();
    console.log("It worked3!")
    if (holder.box3 == ""){
        box3.innerHTML = turn.innerHTML;
        holder.box3 = turn.innerHTML;
        console.log(holder, turn.innerHTML)
        whosTurn();
        checkWin(); 
    }else{
        alert("That box is already selected")
    }
});
box4.addEventListener("click", e => {
    e.preventDefault();
    console.log("It worked4!")
    if (holder.box4 == ""){
        box4.innerHTML = turn.innerHTML;
        holder.box4 = turn.innerHTML;
        console.log(holder, turn.innerHTML)
        whosTurn();
        checkWin(); 
    }else{
        alert("That box is already selected")
    }
});
box5.addEventListener("click", e => {
    e.preventDefault();
    console.log("It worked5!")
    if (holder.box5 == ""){
        box5.innerHTML = turn.innerHTML;
        holder.box5 = turn.innerHTML;
        console.log(holder, turn.innerHTML)
        whosTurn();
        checkWin();
    }else{
        alert("That box is already selected")
    }
});
box6.addEventListener("click", e => {
    e.preventDefault();
    console.log("It worked6!")
    if (holder.box6 == ""){
        box6.innerHTML = turn.innerHTML;
        holder.box6 = turn.innerHTML;
        console.log(holder, turn.innerHTML)
        whosTurn();
        checkWin();
    }else{
        alert("That box is already selected")
    }
});
box7.addEventListener("click", e => {
    e.preventDefault();
    console.log("It worked7!")
    if (holder.box7 == ""){
        box7.innerHTML = turn.innerHTML;
        holder.box7 = turn.innerHTML;
        console.log(holder, turn.innerHTML)
        whosTurn();
        checkWin();
    }else{
        alert("That box is already selected")
    }
});
box8.addEventListener("click", e => {
    e.preventDefault();
    console.log("It worked8!")
    if (holder.box8 == ""){
        box8.innerHTML = turn.innerHTML;
        holder.box8 = turn.innerHTML;
        console.log(holder, turn.innerHTML)
        whosTurn();
        checkWin();
    }else{
        alert("That box is already selected")
    }
});
box9.addEventListener("click", e => {
    e.preventDefault();
    console.log("It worked9!")
    if (holder.box9 == ""){
        box9.innerHTML = turn.innerHTML;
        holder.box9 = turn.innerHTML;
        console.log(holder, turn.innerHTML)
        whosTurn();
        checkWin();
    }else{
        alert("That box is already selected")
    }
});

resetButton.addEventListener("click", event => {
    reset()
})

function whosTurn(){
    if (turn.innerHTML == "O"){
        turn.innerHTML = "X";
    }else{
        turn.innerHTML = "O";
    }
}

function checkWin(){
    if (holder.box1 == "X" && holder.box2 == "X" && holder.box3 == "X"){
        alert("X Wins!");
    }else if(holder.box1 == "O" && holder.box2 == "O" && holder.box3 == "O"){
        alert("O Wins!");
    }else if(holder.box1 == "X" && holder.box5 == "X" && holder.box9 == "X"){
        alert("X Wins!");
    }else if(holder.box1 == "O" && holder.box5 == "O" && holder.box9 == "O"){
        alert("O Wins!");
    }else if(holder.box1 == "X" && holder.box4 == "X" && holder.box7 == "X"){
        alert("X Wins!");
    }else if(holder.box1 == "O" && holder.box4 == "O" && holder.box7 == "O"){
        alert("O Wins!");
    }else if(holder.box2 == "X" && holder.box5 == "X" && holder.box8 == "X"){
        alert("X Wins!");
    }else if(holder.box2 == "O" && holder.box5 == "O" && holder.box8 == "O"){
        alert("O Wins!");
    }else if(holder.box3 == "X" && holder.box6 == "X" && holder.box9 == "X"){
        alert("X Wins!");
    }else if(holder.box3 == "O" && holder.box6 == "O" && holder.box9 == "O"){
        alert("O Wins!");
    }else if(holder.box4 == "X" && holder.box5 == "X" && holder.box6 == "X"){
        alert("X Wins!");
    }else if(holder.box4 == "O" && holder.box5 == "O" && holder.box6 == "O"){
        alert("O Wins!");
    }else if(holder.box7 == "X" && holder.box8 == "X" && holder.box9 == "X"){
        alert("X Wins!");
    }else if(holder.box7 == "O" && holder.box8 == "O" && holder.box9 == "O"){
        alert("O Wins!");
    }else if(holder.box7 == "X" && holder.box5 == "X" && holder.box3 == "X"){
        alert("X Wins!");
    }else if(holder.box7 == "O" && holder.box5 == "O" && holder.box3 == "O"){
        alert("O Wins!");
    }else if(holder.box1 != "" && holder.box2 != "" && holder.box3 != "" && holder.box4 != "" && holder.box5 != "" && holder.box6 != "" && holder.box7 != "" && holder.box8 != "" && holder.box9 != ""){
        alert("Its a tie")
    }
}

function reset(){
    box1.innerHTML = 1;
    holder.box1 = "";
    box2.innerHTML = 2;
    holder.box2 = "";
    box3.innerHTML = 3;
    holder.box3 = "";
    box4.innerHTML = 4;
    holder.box4 = "";
    box5.innerHTML = 5;
    holder.box5 = "";
    box6.innerHTML = 6;
    holder.box6 = "";
    box7.innerHTML = 7;
    holder.box7 = "";
    box8.innerHTML = 8;
    holder.box8 = "";
    box9.innerHTML = 9;
    holder.box9 = "";
};

//sorry for such a long code window