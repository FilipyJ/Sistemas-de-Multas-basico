// O aplicativo constituirá em uma simulação  dada uma velocidade máxima permitida na via de "60 km " p/hr na qual irá verificar a velocidade do carro e determinar se está apto a andar na pista ou não 

// A forma na qual ele vai ser verificiadco é recebendo a velocidade pelo "input" e se, "input " for maior que "60km/hr,irá aparecer uma mensagem dizendo a velocidade atual que ele está no momento e que não pode andar na via, se tiver próximo dos 60, avisar a velocidade atual e dizer que está próximo ao limite 

//futuramente vou fazer um upgrade desse sistema e deixar ele mais dinâmico, fazendo um botão para dar uma velocidade randomica para o veiculo e apartir da velocidade o script continuar normalmente o seu ciclo 






var velocidadeMax = 80






var nomeVia = Array('Via Urbana' , 'Via Arterial', 'Via Coletora','Via Local', 'Via Rodovia')







function sistema(){

var velocidade = window.document.getElementById('velocidade').value

var res = document.getElementById('res') 
   

   var res = document.getElementById('res') 




    if ( velocidade >= velocidadeMax ) {
        

        res.innerHTML += `Você está a <b>${velocidade}km/hr</b> em uma ${nomeVia[0]} <p>`
    }else if (velocidade >= 50 && velocidade < velocidadeMax ){
        
        res.innerHTML += `Você está  a ${velocidade} numa ${nomeVia[1]} permite até ${velocidadeMax}`
}

}
