// // O aplicativo constituirá em uma simulação  dada uma velocidade máxima permitida na via de "60 km " p/hr na qual irá verificar a velocidade do carro e determinar se está apto a andar na pista ou não 

// // A forma na qual ele vai ser verificiadco é recebendo a velocidade pelo "input" e se, "input " for maior que "60km/hr,irá aparecer uma mensagem dizendo a velocidade atual que ele está no momento e que não pode andar na via, se tiver próximo dos 60, avisar a velocidade atual e dizer que está próximo ao limite 

// //futuramente vou fazer um upgrade desse sistema e deixar ele mais dinâmico, fazendo um botão para dar uma velocidade randomica para o veiculo e apartir da velocidade o script continuar normalmente o seu ciclo 


// // Hoje dia 05/08/21 eu passei a manhã tentando entender o setInterval pra aplicar a função "Calculando" após clicar no botão "Verificar" a função consistirá em aparecer uma palavra escrito ' Calculando... ' e logo após irá aparecer a respectiva condição que o usuario escolheu. 

// Passar como parametro de tempo no setInterval a variavel do Math.random





// // var showText =  document.getElementById('showText')

 var velocidadeMax = 0

 var velocidadeMin = 0

 var nomeVia = Array('Via Urbana' , 'Via Arterial', 'Via Coletora','Via Local', 'Via Rodovia')

 var res = document.getElementById('res') 

 var velocidade = document.getElementById('velocidade').value

// var urbana = document.getElementById('Urbana').value

 var x = 6


function mostrarUrbana(){

showText.innerHTML = 'Urbana '

}

function mostrarArterial(){
  showText.innerHTML = 'Arteriais '
}







function Verificar(){

  
 

  var velocidade = document.getElementById('velocidade').value 

   if (showText.innerHTML == false){
    
    alert('Escolha uma Via')
  }
    else if (velocidade == '') {
    alert('Digite uma velocidade')
  } 
  //linha de codigo responsavel por verificar se a via urbana foi selecionada e se a velocidade é maior do que 40 Km/hr
  if(showText.innerHTML == 'Urbana ' && velocidade != ''){
    let velocidadeMax = 80

    let velocidadeMin = 40

    console.log('No bloco de Urbanas velocidade maxima vale: ' + velocidadeMax)
    setTimeout(function(){ res.innerHTML += 'Velocidade Atual: ' + velocidade  + '<br>' + 



     'Via que passou: '  + nomeVia[0] + '<p>'  + '<hr>' 

     showText.innerHTML = ''

     
     

    },700)

    setTimeout(function(){
      let velocidade = document.getElementById('velocidade').value = ''
    },600)
  
    
    if (velocidade <= velocidadeMin){
        res.innerHTML += ' Você está andando muito devagar em uma ' + nomeVia[0] + ', Você foi multado.' + '<br />'
    }else if (velocidade >= velocidadeMax){
      alert('ALTA VELOCIDADE, MULTADO! ')
      res.innerHTML += 'A ' + nomeVia[0] + ' tem como velocidade máxima ' + velocidadeMax + ' Km/hr' + '<p> '
    }
  }  //FIM DA FUNÇÃO URBANA
  if(showText.innerHTML == 'Arteriais ' && velocidade != ''){

 let velocidadeMax = 60

 let velocidadeMin = 40

   console.log('No bloco de Arteriais velocidade maxima vale: ' + velocidadeMax)

  setTimeout(function(){ res.innerHTML += 'Velocidade Atual: ' + velocidade  + '<br>' + 



   'Via que passou: '  + nomeVia[1] + '<p>'  + '<hr>' 

   showText.innerHTML = ''

    
   
  },700)

  setTimeout(function(){
    let velocidade = document.getElementById('velocidade').value = ''
  },600)
  if (velocidade <= velocidadeMin){
    res.innerHTML += ' Você está andando muito devagar em uma ' + nomeVia[1] + ', Você foi multado.' + '<br />'
  }else if (velocidade >= velocidadeMax){
  alert('ALTA VELOCIDADE, MULTADO! ')
  res.innerHTML += 'A ' + nomeVia[1] + ' tem como velocidade máxima ' + velocidadeMax + ' Km/hr' + '<p> '
  }
}//FIM DA FUNÇÃO ARTERIAIS







//   function verificar1(){
   
//   var verificar = document.getElementById('verificar')
    

//     velocidadeMin = 40 

//     velocidadeMax = 60

    

//     var velocidade = document.getElementById('velocidade').value 
    
  
//       if (showText.innerHTML == ''){
//       alert('escolha uma via')
      
//     } else if (velocidade == ''){
//       //alert('escolha uma velocidade')
//   }   //linha de codigo responsavel por verificar se a via urbana foi selecionada e se a velocidade é maior do que 40 Km/hr
//       else if(velocidade >= velocidadeMax){
            
//        setTimeout(function(){ res.innerHTML += 'Velocidade Atual: ' + velocidade  + '<br>' + 
  
  
  
//         'Via que passou: '  + nomeVia[1] + '<p>'
  
//         showText.innerHTML = ''
        
//        },700)
  
       
    
//     } 

    

  //   setTimeout(function(){
        
  //   },6000) 
  
  // }



//   else if (showText.innerHTML == false){
//     alert('escolha uma via')
    
//   } else if (velocidade == ''){
//     alert('escolha uma velocidade')
// } 

}
