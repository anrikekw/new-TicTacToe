let tiles = document.querySelectorAll("h1");
tiles = Array.from(tiles);
let counter = 0;
let playerwin = document.getElementById("afterwin");
let btn = document.getElementById("btn1");



btn1.addEventListener("click",() => {
        for(let i = 0;i < 9;i++){
            tiles[i].innerText = "";
        }
        playerwin.innerText = "";
        counter = 0;
        tiles.forEach(listen);
    }
)
function listen(e){
    e.addEventListener("click",write);
}
function chekforwin(){
    //// rows
    for(let i = 0;i < 3;i++){
        let tmp = tiles[0 + i*3].innerText;
        for(let k = 0;k < 2;k++){
            let move = tiles[1 + k + i*3].innerText;
            if(tmp == move && tmp != ""){
                if(k == 1){
                    playerwin.innerText = "Player:  " + move + "   WINS";
                    for(let i = 0;i < 9;i++){
                        tiles[i].removeEventListener("click",write);
                    }
                }
            }
            else{
                break;
            }
        }
        
    }
//// colums
    for(let i = 0;i < 3;i++){
        let tmp = tiles[0 + i].innerText;
        for(let k = 0;k < 2;k++){
            let move = tiles[3 + k*3 + i].innerText;
            if(tmp == move && tmp != ""){
                if(k == 1){
                    playerwin.innerText = "Player:  " + move + "   WINS";
                    playerwin.innerText = "Player:  " + move + "   WINS"
                    for(let i = 0;i < 9;i++){
                        tiles[i].removeEventListener("click",write);
                    }
                }
            }
            else{
                break;
            }
        }
        
    }
    
    
}
tiles.forEach(listen);

function write(e){
    if(e.target.innerText == ""){
        if(counter % 2 == 0){
            e.target.innerText = "X";
            counter++;
        }
        else {
            e.target.innerText = "O";
            counter++;
        };
    }
    chekforwin();
}
