//var pacientes = document.querySelectorAll(".paciente");

//var tabela = document.querySelector("table");

//tabela.addEventListener("dblclick", function(event){
   // var alvoEvento = event.target;
   // var paiDoAlvo = alvoEvento.parentNode; //TR = paciente = remover
   // paiDoAlvo.remove();  

//})

//pacientes.forEach(function(paciente){
    //paciente.addEventListener("dblclick", function(){
  //      console.log("Fui clicado com um duplo clique");
      //  this.remove();

  // });
//});

var tabela = document.querySelector("table");

tabela.addEventListener("dblclick", function(event) {
    event.target.parentNode.classList.add("fadeOut"); //faz o elemento sumir da tabela após o duplo click
    setTimeout(function(){                   //funcao que faz esperar um pouco a funcao anterior
        event.target.parentNode.remove();
    },500)

   
});