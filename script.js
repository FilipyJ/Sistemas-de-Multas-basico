// O aplicativo constituirá em uma simulação  dada uma velocidade máxima permitida na via de "60 km " p/hr na qual irá verificar a velocidade do carro e determinar se está apto a andar na pista ou não 

// A forma na qual ele vai ser verificiadco é recebendo a velocidade pelo "input" e se, "input " for maior que "60km/hr,irá aparecer uma mensagem dizendo a velocidade atual que ele está no momento e que não pode andar na via, se tiver próximo dos 60, avisar a velocidade atual e dizer que está próximo ao limite 

//futuramente vou fazer um upgrade desse sistema e deixar ele mais dinâmico, fazendo um botão para dar uma velocidade randomica para o veiculo e apartir da velocidade o script continuar normalmente o seu ciclo 


// Hoje dia 05/08/21 eu passei a manhã tentando entender o setInterval pra aplicar a função "Calculando" após clicar no botão "Verificar" a função consistirá em aparecer uma palavra escrito ' Calculando... ' e logo após irá aparecer a respectiva condição que o usuario escolheu. 





var velocidadeMax = 80

var velocidadeMin = 40






var nomeVia = Array('Via Urbana' , 'Via Arterial', 'Via Coletora','Via Local', 'Via Rodovia')







function sistema1(){

var velocidade = window.document.getElementById('velocidade').value

var res = document.getElementById('res') 
   

   var res = document.getElementById('res') 




    if ( velocidade >= velocidadeMax ) {
      alert('MULTADO!!')  
     res.innerHTML += `Você estava a <b>${velocidade}km/hr</b> em uma ${nomeVia[0]} e foi MULTADO!. <p>`

     res.innerHTML += ``
   }else if (velocidade >= 70 && velocidade < velocidadeMax){
   
   res.innerHTML +=  ` <b>ATENÇÃO!!</b> Você está  a <b>${velocidade}km/hr</b> numa ${nomeVia[0]} que permite até <b>${velocidadeMax} km/hr</b> <p> <hr>`
} else if ( velocidade < velocidadeMin) {
    res.innerHTML += ` <p> Você está andando muito devagar em uma <b>${nomeVia[0]}</b> que tem como velocidade mínima <b>${velocidadeMin}km/hr</b>. <hr> `
} else {
    res.innerHTML += `Velocidade Atual: <b>${velocidade}km/hr</b><p> <mark> Você está na velocidade permitida da via.</p> </mark>  <mark>Lembre-se de usar o cinto de segurança! </mark> <hr>`
}

    

} 
