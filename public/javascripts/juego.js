const selectBox = document.querySelector('.select-box'),
selectXBtn = selectBox.querySelector('.playerX'),
selectOBtn = selectBox.querySelector('.playerO'),
playBoard=document.querySelector('.play-board' ),
allBox = document.querySelectorAll('section span'),
players = document.querySelector('.players');
resultBox = document.querySelector('.result-box'),
wonText = resultBox.querySelector('.won-text'),
replayBtn = resultBox.querySelector('button')
fotou = resultBox.querySelector('.fotou')
const options = document.querySelector('.options')






 /*    let musicaFondo = new Audio
 musicaFondo.src = `/win.mp3` 
musicaFondo.play() */
let musicaFondo
function musica(pausar){
    
if(pausar === "hola"){
    musicaFondo = new Audio
    musicaFondo.src = `/sound/musica_de_fondo.mp3`
    musicaFondo.play()  
    musicaFondo.loop=true
}else{
    
    musicaFondo.pause() 

    /*  win = new Audio
        win.src = `win-cachetazo.mp3` 
        win.play() */
        
    
   
}
}


console.log(selectXBtn)

window.onload = () =>{

/* musicaFondo.loop = true */

                    
                }

 

for (let i = 0; i < allBox.length; i++) {
    allBox[i].setAttribute('onclick','clickedBox(this)')   
}
    selectXBtn.onclick = ()=>{
selectBox.classList.add('hide')
playBoard.classList.add('show')



/* musicaFondo = new Audio
musicaFondo.src = `musica_de_fondo.mp3` 
musicaFondo.play()
musicaFondo.loop=true */
musica("hola")



}
 selectOBtn.onclick = ()=>{
    selectBox.classList.add('hide')
    playBoard.classList.add('show')
    players.setAttribute('class','players active player')


musica("hola")
}



let playerXIcon = "fas fa-times";
let playerOIcon = "far fa-circle";
let playerSign = 'X';
let runBot = true

// user click function

function clickedBox(element){
    console.log(element)
    
    if(players.classList.contains('player')){
        

       /*  element.innerHTML = `<i class="${playerOIcon}">O</i>` */
       playerSign = 'O';
       element.innerHTML = `<img class="imagen"src="/images/perrito.png" alt="">`
       /* players.classList.add('active'); */
       players.classList.remove('active')
       
       element.setAttribute('id',playerSign)

       let apretarBoton = new Audio
       apretarBoton.src = `/sound/apretar.mp3`
       apretarBoton.play()

    }else{
        element.innerHTML = `<img class="imagen"src="/images/gatito.png" alt="">`;
        players.classList.add('active');
        element.setAttribute('id',playerSign)
        let apretarBoton = new Audio
       apretarBoton.src = `/sound/apretar.mp3`
       apretarBoton.play()
    }
    selectWinner();

    playBoard.style.pointerEvents = 'none' ;
 element.style.pointerEvents = 'none' ;
 let randomDelaytime=((Math.random()* 1000 ) +20).toFixed()
 
 setTimeout(()=>{
bot(runBot)

 },randomDelaytime)

}


//bot click function


function bot(runBot){
    
    let array =[];
    
    if(runBot){



        playerSign = 'O'
       /*  let array =[]; */
        for (let i = 0; i < allBox.length; i++) {
           
            if(allBox[i].childElementCount == 0){
        array.push(i);
            }
          
        }
        let randomBox = array[Math.floor(Math.random() * array.length)]
        
        
        
        
        
        if(array.length >0){
        
            if(players.classList.contains('player')){
        
                /*  element.innerHTML = `<i class="${playerOIcon}">O</i>` */
                playerSign = 'X';
                allBox[randomBox].innerHTML = `<img class="imagen"src="/images/gatito.png" alt="">`
                allBox[randomBox].setAttribute('id',playerSign)
                players.classList.add('active');
        
                
                
                
         
             }else{
                allBox[randomBox].innerHTML = `<img class="imagen"src="/images/perrito.png" alt="">`;
                 players.classList.remove('active');
                 allBox[randomBox].setAttribute('id',playerSign)
             }
             selectWinner();
        }
        allBox[randomBox].style.pointerEvents = "none";
        playBoard.style.pointerEvents = 'auto' ;
        playerSign = 'X'














    }


}

function getClass(idname){
return document.querySelector('.box' + idname).id;
}

function checkClass(val1,val2,val3,sign){
    
    if(getClass(val1)== sign && getClass(val2)== sign && getClass(val3)== sign){
        return true
    }

}

function selectWinner(){
    
    /* apretarBoton.pause()
        musicaFondo.pause()

       */
    
    if(checkClass(1,2,3,playerSign) || checkClass(4,5,6,playerSign) || checkClass(7,8,9,playerSign)|| checkClass(1,4,7,playerSign)|| checkClass(2,5,8,playerSign)|| checkClass(3,6,9,playerSign)|| checkClass(1,5,9,playerSign)|| checkClass(3,5,7,playerSign)){
        console.log(playerSign + ' ' + 'is the winner');
        runBot = false;
        bot(runBot);
 
        setTimeout(()=>{

playBoard.classList.remove('show');
resultBox.classList.add('show')



        },700)

        

        if(  playerSign === "X"){

         
            fotou.innerHTML = `<video src="/videos/victoria-gato.mp4" autoplay></video>`
            wonText.innerHTML = ` Gatito gano el juego!` 
        }else{
            fotou.innerHTML = `<video src="/videos/victoria-perro.mp4" autoplay></video>`
            wonText.innerHTML = ` Perrito gano el juego!`

        }
        
        
        
        
        musica("chau")
       /*  */
    }else{

        
            if(getClass(1) != "" && getClass(2) != "" && getClass(3) != "" && getClass(4) != "" && getClass(5) != "" && getClass(6) != "" && getClass(7) != "" && getClass(8) != "" && getClass(9) != ""){
                runBot = false;
                bot(runBot);
                setTimeout(()=>{
                    resultBox.classList.add("show");
                    playBoard.classList.remove("show");
                }, 700);

                fotou.innerHTML = `<img src="finaljuego.jpg" alt=""></img>`
                wonText.textContent = "Empate!";
            }
        




    }

   




}




replayBtn.onclick = ()=>{
    window.location.reload()
}