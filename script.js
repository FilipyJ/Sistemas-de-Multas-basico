// O aplicativo constituirá em uma simulação  dada uma velocidade máxima permitida na via de "60 km " p/hr na qual irá verificar a velocidade do carro e determinar se está apto a andar na pista ou não 

// A forma na qual ele vai ser verificiadco é recebendo a velocidade pelo "input" e se, "input " for maior que "60km/hr,irá aparecer uma mensagem dizendo a velocidade atual que ele está no momento e que não pode andar na via, se tiver próximo dos 60, avisar a velocidade atual e dizer que está próximo ao limite 

//futuramente vou fazer um upgrade desse sistema e deixar ele mais dinâmico, fazendo um botão para dar uma velocidade randomica para o veiculo e apartir da velocidade o script continuar normalmente o seu ciclo 


// Hoje dia 05/08/21 eu passei a manhã tentando entender o setInterval pra aplicar a função "Calculando" após clicar no botão "Verificar" a função consistirá em aparecer uma palavra escrito ' Calculando... ' e logo após irá aparecer a respectiva condição que o usuario escolheu. 




// var nomeVia = Array('Via Urbana' , 'Via Arterial', 'Via Coletora','Via Local', 'Via Rodovia')

// var showText =  document.getElementById('showText')

var velocidadeMax = 80

var velocidadeMin = 40

var velocidade = document.getElementById('velocidade').value


 function acao1 
// var res = document.getElementById('res') 
   
// var res = document.getElementById('res') 



function mostrarUrbana(){

  showText.innerHTML = 'Urbana '

} 

function sistema2(){



  
    // if (velocidade <= velocidadeMin){
    
    // }

}





function sistema3(){
  var showText = document.querySelector('#showText')

  showText.textContent = ' de Transito Rápido '
}

function sistema4(){
  var showText = document.getElementById('showText')

  showText.textContent = 'Arterial '
}

function sistema5(){
  var showText = document.getElementById('showText')

  showText.textContent = 'Coletora '
}

function sistema6(){
  var showText = document.getElementById('showText')

  showText.textContent = 'Locais '
}

