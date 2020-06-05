
const element=document.querySelectorAll('.grid-item')
var playerSign=""
var compSign=""
var playerTurn=true
var compTurn=false
const turnMessage=document.getElementById('turn-message')
var currTurn=''
document.getElementById('play').addEventListener('click',()=>{
    currTurn='X'
    turnMessage.innerText=`${currTurn}'s turn`
    playerSign='X'
    compSign='O'
    for(const elem of element){
        elem.addEventListener('click',placeMove)
    }
})


var board=new Array(9);
//declaring the board
board=[{visited:false,pos:document.getElementById('0'),value:"0"},{visited:false,pos:document.getElementById('1'),value:"1"},{visited:false,pos:document.getElementById('2'),value:"2"},
      {visited:false,pos:document.getElementById('3'),value:"3"},{visited:false,pos:document.getElementById('4'),value:"4"},{visited:false,pos:document.getElementById('5'),value:"5"},
      {visited:false,pos:document.getElementById('6'),value:"6"},{visited:false,pos:document.getElementById('7'),value:"7"},{visited:false,pos:document.getElementById('8'),value:"8"}]

      //adding event liteners



var noTimesOpen=0
const clear=document.getElementById('clear')
clear.addEventListener('click',clearResponse)
var putSign='';
function placeMove(e){
       var no=e.target.id
       noTimesOpen++;
       if(noTimesOpen>0){
                clear.style.display='block'
                clear.innerText='Clear'
       }
       if(playerTurn){
                turnMessage.innerText=`${currTurn}'s turn`
                putSign=playerSign
                currTurn='O'
                turnMessage.innerText=`${currTurn}'s turn`
                move(no)
               
        }
       else if(compTurn){
                turnMessage.innerText=`${currTurn}'s turn`
                putSign=compSign
                currTurn='X'
                turnMessage.innerText=`${currTurn}'s turn`
                move(no)

       
        if(!won()){
                if(ismoveLeft()){
                        if(currTurn=='X') currTurn='O'
                        else currTurn='X'
                        }
                 }
       }
       

       else if(won()) {       
        turnMessage.innerText=`${currTurn} Won`}
       
      if(checkDraw()==true){
              turnMessage.innerText=`Match Draw`
      }
       playerTurn=!playerTurn
       compTurn=!compTurn
}

function move(id){
    if(!won()){
        

                if(!board[id].visited){
                board[id].pos.innerText=putSign
                board[id].visited=true
                board[id].value=putSign
                console.log(board[id].value)
                }
                

        }
        if(won()){
                  
                clear.innerText='Replay' 

                if(currTurn=='X') currTurn='O'
                else currTurn='X'
                turnMessage.innerText=`${currTurn} Won` 
                stopListening()
                 
        }
    }
    


// funtion for determining winning
function won(){
    if(
        ((board[0].value===board[1].value)&&(board[1].value===board[2].value))){
            board[0].pos.style.backgroundColor='#ffb380'
            board[1].pos.style.backgroundColor='#ffb380'
            board[2].pos.style.backgroundColor='#ffb380'
            return true}
    else if ((board[3].value===board[4].value)&&(board[4].value===board[5].value)){
            board[3].pos.style.backgroundColor='#ffb380'
            board[4].pos.style.backgroundColor='#ffb380'
            board[5].pos.style.backgroundColor='#ffb380'
            return true}
    else if((board[6].value===board[7].value)&&(board[7].value===board[8].value)){
            board[6].pos.style.backgroundColor='#ffb380'
            board[7].pos.style.backgroundColor='#ffb380'
            board[8].pos.style.backgroundColor='#ffb380'
            return true}
    else if((board[0].value===board[4].value)&&(board[4].value===board[8].value)){
            board[0].pos.style.backgroundColor='#ffb380'
            board[4].pos.style.backgroundColor='#ffb380'
            board[8].pos.style.backgroundColor='#ffb380'
            return true}
    else if((board[2].value===board[4].value)&&(board[4].value===board[6].value)){
            board[2].pos.style.backgroundColor='#ffb380'
            board[4].pos.style.backgroundColor='#ffb380'
            board[6].pos.style.backgroundColor='#ffb380'
            return true}
    else if((board[0].value===board[3].value)&&(board[3].value===board[6].value)){
            board[0].pos.style.backgroundColor='#ffb380'
            board[3].pos.style.backgroundColor='#ffb380'
            board[6].pos.style.backgroundColor='#ffb380'
            return true}
    else if((board[1].value===board[4].value)&&(board[4].value===board[7].value)){
            board[1].pos.style.backgroundColor='#ffb380'
            board[4].pos.style.backgroundColor='#ffb380'
            board[7].pos.style.backgroundColor='#ffb380'
            return true}
    else if((board[2].value===board[5].value)&&(board[5].value===board[8].value)){
            board[2].pos.style.backgroundColor='#ffb380'
            board[5].pos.style.backgroundColor='#ffb380'
            board[8].pos.style.backgroundColor='#ffb380'
            return true}
    
    return false;    

}
function ismoveLeft(){
        
        for(var i=0;i<board.length;i++){
                if(board[i].value!=='X'&&board[i].value!=='O'){
                        return true
                }      
        }
         return false
    
}
function checkDraw(){
        if(won()===false&&ismoveLeft()===false){
                return true
        }
   return false     
}

function stopListening(){
        for(var i=0;i<board.length;i++){
                document.getElementById(`${i}`).removeEventListener("click",placeMove)
        }
}

function clearResponse(){
        for(var i=0;i<board.length;i++){
                board[i].visited=false;
                board[i].pos=document.getElementById(`${i}`)
                board[i].pos.innerText=""
                board[i].value=`${i}`
                board[i].pos.style.backgroundColor='transparent'
        }
        if(clear.innerText=='Replay'){
                for(const elem of element){
                        elem.addEventListener('click',placeMove)
                    }    
        }
        if(currTurn=='O') currTurn='X'
        turnMessage.innerText=`${currTurn}'s turn`
         playerTurn=true
         compTurn=false
}