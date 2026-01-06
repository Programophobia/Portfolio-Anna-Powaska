


var argButtonName, buttonTest, buttonScisor, buttonRock, buttonPaper;
var argMoveId, argPlayerMove, argComputerMove, computerMove, playerMove, randomNumber, playerInput;
var playerResult = 0;

var compResult = 0;
//buttonTest = document.getElementById('button-test');
buttonScisor = document.getElementById('button-nozyce');
buttonRock = document.getElementById('button-kamien')
buttonPaper = document.getElementById('button-papier')

buttonScisor.addEventListener('click', function(){ buttonClicked('nożyce')})

buttonRock.addEventListener('click', function(){buttonClicked('kamień')})
buttonPaper.addEventListener('click', function(){buttonClicked('papier')})
/**
 * Describe this function...
 */
function buttonClicked(argButtonName) {
  clearMessages();
  console.log(argButtonName + ' został kliknięty');



  /**
   * Describe this function...
   */
  function getMoveName(argMoveId) {
    console.log('wywołano funkcję getMoveName z argumentem: ' + argMoveId);
    if (argMoveId == 1) {
      return 'kamień';
    }
      else if(argMoveId == 2){
          return 'nożyce'
      }
  else if(argMoveId == 3){
      return 'papier'
  }
    else {
      printMessage('Nie znam ruchu o id ' + argMoveId + '. Zakładam, że chodziło o "kamień".');
      return 'kamień';
    }
  
  }
  /**
   * Describe this function...
   */
  function displayResult(argPlayerMove, argComputerMove) {
    console.log('wywołano funkcję displayResults z argumentami: ' + argPlayerMove + ', ' + argComputerMove);
    if (argPlayerMove == 'papier' && argComputerMove == 'kamień') {
      printMessage('Wygrywasz!');
      playerResult = playerResult +1;
      printMessage( 'player: ' + playerResult)
    }
      else if(argPlayerMove == 'nożyce' && argComputerMove == 'papier'){
          printMessage('Wygrywasz!');
          playerResult = playerResult + 1;
          printMessage( 'player: ' + playerResult)
      }
  
      else if(argPlayerMove == 'kamień' && argComputerMove == 'nożyce'){
          printMessage('Wygrywasz!');
          playerResult = playerResult + 1;
          printMessage( 'player: ' + playerResult)
      }
      else if (argComputerMove == argPlayerMove){
          printMessage('remis')
      }
     else {
      printMessage('Przegrywasz :(');
      compResult = compResult + 1;
      printMessage( 'comp: ' + compResult)
    }
    printMessage('Zagrałem ' + argComputerMove + ', a Ty ' + argPlayerMove + compResult + playerResult);
    printResult(playerResult + compResult)
  }
  
  playerMove = argButtonName;
  //playerInput = prompt('Wybierz swój ruch! 1: kamień, 2: papier, 3: nożyce.');
  //console.log('wybór ruchu gracza to: ' + playerInput);
  
  //playerMove = getMoveName(playerInput);
  //console.log('ruch gracza to: ' + playerMove);
  
  randomNumber = Math.floor(Math.random() * 3 + 1);
  //console.log('wylosowana liczba to: ' + randomNumber);
  
  computerMove = getMoveName(randomNumber);
  ///console.log('ruch komputera to: ' + computerMove);
  displayResult(playerMove, computerMove);
}

function count (a, b){
  let sum = a - b;

  if(sum < 0) {
    let neww = -1;
    return sum = sum * neww;
  }
  return sum;
}



printMessage(count(1, 6))





