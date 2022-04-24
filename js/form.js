var botaoAdicionar = document.querySelector("#adicionar-paciente");
    botaoAdicionar.addEventListener("click", function(event) {
        event.preventDefault();

    var form = document.querySelector("#form-adiciona");
    
    var paciente = obtemPacienteDoFormulario(form);

    var pacienteTr = montaTr(paciente);

    //adiciona o paciente na tabela
    var tabela = document.querySelector("#tabela-pacientes");

    tabela.appendChild(pacienteTr);

    form.reset(); //limpa o campo

});

    //  var botaoAdicionar = document.querySelector("#adicionar-paciente");
    //botaoAdicionar.addEventListener("click", function(){//
    //  console.log("Oi, cliquei no botão");

   // })//

   // var botaoAdicionar = document.querySelector("#adicionar-paciente");
   // botaoAdicionar.addEventListener("click", function(event) {
    //  event.preventDefault();
    //  console.log("Oi eu sou o botao e fui clicado");
   // });
   
    //titulo.addEventListener("click", mostraMensagem); //add um escutador de evento//
    // function mostraMensagem(){
        //console.log("Olá eu fui clicado!");//

    //titulo.addEventListener("click", function (){
    //console.log("Olha só posso chamar uma função anônima.")
    //});//

    
    
  function obtemPacienteDoFormulario(form){

    var paciente = {
        nome: form.nome.value,
        peso: form.peso.value,
        altura: form.altura.value,
        gordura: form.gordura.value,
        imc: calculaImc(form.peso.value, form.altura.value)
    }
    return paciente;
    
  }  

  function montaTr(paciente){
      var pacienteTr = document.createElement("tr");
      pacienteTr.classList.add("paciente");
        
        pacienteTr.appendChild(montaTd(paciente.nome, "info-nome"));
        pacienteTr.appendChild(montaTd(paciente.peso, "info-peso"));
        pacienteTr.appendChild(montaTd(paciente.altura, "info-altura"));
        pacienteTr.appendChild(montaTd(paciente.gordura, "info-gordura"));
        pacienteTr.appendChild(montaTd(paciente.imc, "info-imc"));
        return pacienteTr;

  }

  function montaTd(dado, classe){
      var td = document.createElement("td");
      td.textContent = dado;
      td.classList.add(classe);

      return td;
  }