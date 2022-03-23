function Calcular() {
    var valorElemento = document.getElementById("valor");
  
    var valor = valorElemento.value;
    var valorNumerico = parseFloat(valor);
    
    var descontoElemento = document.getElementById("desconto");
    
    var desconto = descontoElemento.value;
    var descontoNumerico = parseFloat(desconto);
    
    var descontoCalculo = 1 -(descontoNumerico / 100);
    
    var valorDesconto = valorNumerico * descontoCalculo;

    var elementoValorFinal = document.getElementById("valorComDesconto")
    var valorFinal = "R$" + valorDesconto.toFixed(2);
    elementoValorFinal.innerHTML = valorFinal;
    
  }