let SQ1 = document.getElementById('SQ1')
let SQ2 = document.getElementById('SQ2')
let SQ3 = document.getElementById('SQ3')
let SQ4 = document.getElementById('SQ4')
let SQ5 = document.getElementById('SQ5')
let SQ6 = document.getElementById('SQ6')
let SQ7 = document.getElementById('SQ7')
let SQ8 = document.getElementById('SQ8')
let SQ9 = document.getElementById('SQ9')

let body = document.getElementById('body')
let grid = document.getElementById('grid')
let btnReset = document.getElementById('btnReset');

let victoryFactor = 0;
let drawVar = 0;

let e = 0;
let counter = 0;

let SQlist = [0,0,0,0,0,0,0,0,0]

let playerScore = document.getElementById('playerScore');
let enemyScore = document.getElementById('enemyScore');

let Xpick = document.getElementById('Xpick');
let Opick = document.getElementById('Opick');
let pickbox = document.getElementById('pickbox');

Xpick.classList.add('chosen')

let pick = 'X'
let enemyPick = 'O'

/* localStorage.clear() */

const pickX = () => {pick = 'X';enemyPick='O'; 
Xpick.classList.add('chosen'); Opick.classList.remove('chosen');checkIfHide();updateStorage()}
const pickO = () => {pick = 'O';enemyPick='X'; 
Opick.classList.add('chosen'); Xpick.classList.remove('chosen');checkIfHide();updateStorage()}

const checkIfHide = () => {for(i=0;i<SQlist.length;i++){if(SQlist[i]==1){counter++}}
if(counter>0){pickbox.classList.add('hide')}}

const updateStorage = () =>{
localStorage.setItem('pickStore', pick)
localStorage.setItem('enemyPickStore', enemyPick)
}

let pScore = document.getElementById('pScore')
let aScore = document.getElementById('aScore')

onload = function () {
    let getPickStore = localStorage.getItem('pickStore')
    let getEnemyPickStore = localStorage.getItem('getEnemyPickStore')
    pick = getPickStore;
    enemyPick = getEnemyPickStore;

    if(localStorage.length == 0){pickX();}
    if(pick=='X'){pickX()}
    if(pick=='O'){pickO()}

    let errorAlertcheck = localStorage.getItem('loopErrorReloadCheck')
    if (errorAlertcheck>0){window.alert("An error has ocurred"); localStorage.setItem('loopErrorReloadCheck',loopErrorCheck)}
   
    pScore.innerHTML = localStorage.getItem('pScoreStorage'); 
    aScore.innerHTML = localStorage.getItem('aScoreStorage');

   if(pScore.innerHTML==''){pScore.innerHTML=0}
   if(aScore.innerHTML==''){aScore.innerHTML=0}
}

const SQRclick = (x,y) =>{
    if(SQlist[x]==0){
        SQlist[x]=1
        y.innerHTML = pick;
        clickFunction()}
}

const clickFunction = () => {if(victoryFactor!=1 && drawVar!=1){Adversary()}checkIfHide();}

SQ1.onclick = function(){SQRclick(0, SQ1)}

SQ2.onclick = function(){SQRclick(1, SQ2)}

SQ3.onclick = function(){SQRclick(2, SQ3)}

SQ4.onclick = function(){SQRclick(3, SQ4)}

SQ5.onclick = function(){SQRclick(4, SQ5)}

SQ6.onclick = function(){SQRclick(5, SQ6)}

SQ7.onclick = function(){SQRclick(6, SQ7)}

SQ8.onclick = function(){SQRclick(7, SQ8)}

SQ9.onclick = function(){SQRclick(8, SQ9)}

let n = 0;

const checkVictorys = () => victoryFactor!=1

const Adversary = () =>{ checkVictory();
    if(checkVictorys){
            checkDraw();
    n = Math.floor(Math.random()*100)
    adversaryPlay();}
}

let iN = 0

let loopErrorCheck = 0

const checkForFreeSpace = () => {n = Math.floor(Math.random()*100);
    if(victoryFactor==0){
    for(i=0;i<SQlist.length;i++){ loopErrorCheck++; if(loopErrorCheck >=75) {errorProcedure(); break}
     iN = (i*10)+11
    if(SQlist[i]==0){n=iN;adversaryPlay();break}}}
}

const adversaryPlay = () => {
    if(n >= 11 && n <= 20) {adversaryCheck(0,0,SQ1); return}
    if(n >= 21 && n <= 30) {adversaryCheck(1,1,SQ2); return}
    if(n >= 31 && n <= 40) {adversaryCheck(2,2,SQ3); return}
    if(n >= 41 && n <= 50) {adversaryCheck(3,3,SQ4); return}
    if(n >= 51 && n <= 60) {adversaryCheck(4,4,SQ5); return}
    if(n >= 61 && n <= 70) {adversaryCheck(5,5,SQ6); return}
    if(n >= 71 && n <= 90) {adversaryCheck(6,6,SQ7); return}
    if(n >= 91 && n <= 100){adversaryCheck(7,7,SQ8); return}
    if(n >= 0 && n <= 10)  {adversaryCheck(8,8,SQ9); return}
}

const adversaryCheck = (x,y,z) => {if(SQlist[x]==0){adversaryMark(y,z)}else{checkForFreeSpace();}}

const adversaryMark = (x,y) => {SQlist[x]=1;y.innerHTML=enemyPick;checkVictory();}

 const checkVictory = () =>{
      
     if(SQ1.innerHTML != ''){
        checkMatch(SQ1,SQ2,SQ3,1)
        checkMatch(SQ1,SQ4,SQ7,2)}
     if(SQ9.innerHTML != '' ){
        checkMatch(SQ9,SQ6,SQ3,3)
        checkMatch(SQ9,SQ8,SQ7,4)}

        if(SQ5.innerHTML != ''){
            checkMatch(SQ5,SQ2,SQ8,5)
            checkMatch(SQ5,SQ4,SQ6,6)
            checkMatch(SQ5,SQ1,SQ9,7)
            checkMatch(SQ5,SQ3,SQ7,8)
            } 
            checkDraw();
 }  

 const checkMatch = (x,y,z,n) =>{if(x.innerHTML == y.innerHTML){if(x.innerHTML == z.innerHTML){victory(x.innerHTML, n)}}}
 

 const checkDraw = () =>{ 
     if(checkVictorys){
     if(victoryFactor!=1){
         for(i=0;i<SQlist.length;i++){if(SQlist[i]==1){e++}}
    if(e==9){grid.style.backgroundColor = "#FFFA00"; btnReset.classList.add('rainbow1');drawVar = 1} else {e=0}}}
 }

const victory = (x,y) => {
 if (y==1){paintRainbow(SQ1,SQ2,SQ3);}
 if (y==2){paintRainbow(SQ1,SQ4,SQ7);}
 if (y==3){paintRainbow(SQ9,SQ6,SQ3);}
 if (y==4){paintRainbow(SQ9,SQ8,SQ7);}
 if (y==5){paintRainbow(SQ5,SQ2,SQ8);}
 if (y==6){paintRainbow(SQ5,SQ4,SQ6);}
 if (y==7){paintRainbow(SQ5,SQ1,SQ9);}
 if (y==8){paintRainbow(SQ5,SQ3,SQ7);}

 btnReset.classList.add('rainbow1');

 if(x == pick){pScore.innerHTML++;localStorage.setItem('pScoreStorage', pScore.innerHTML);
 grid.style.backgroundColor = "#31FF4E"; playerScore.style.color = "#31FF4E"}

 if(x == enemyPick){aScore.innerHTML++;localStorage.setItem('aScoreStorage', aScore.innerHTML)
 grid.style.backgroundColor = "#FF0F0F"; enemyScore.style.color = "#FF0F0F"}

 updateStorage();

 victoryFactor = 1;
 for(i=0;i<SQlist.length;i++){SQlist[i]=1}
}

const paintRainbow = (x,y,z) => {x.classList.add('rainbow');y.classList.add('rainbow');z.classList.add('rainbow')}

const Reload = () => {location.reload()}

const resetScore = () => {localStorage.clear();location.reload()}

 const errorProcedure = () =>{
     loopErrorCheck = 1
     localStorage.setItem('loopErrorReloadCheck', loopErrorCheck)
     Reload();
 }





 

