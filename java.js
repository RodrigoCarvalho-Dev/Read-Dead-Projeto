

    function entrar(){
        const email = document.getElementById("email").value
const senha = document.getElementById("senha").value


const url = "https://www.rockstargames.com/br/reddeadredemption2"
if(email == "" && senha == ""){
    Swal.fire({
        title: "Erro",
        
        text: "Sem nada no conteúdo",
        footer: '<a href="https://support.rockstargames.com/br/" target="_blank" rel="noopener noreferrer">Rockstar Games</a>',
        icon: "error",
        timer:8000,
      });
}else if(email === "rodrigosms103042r6@gmail.com" && senha === "senha123" ){
    Swal.fire({
        title: "Você está sendo redirecionado para o site da Rockstar",
        text: "Aguarde",
        icon: "success",
        timer:4000,

      });

      setTimeout(function(){
       window.open(url,"_blank")
      },2000)
}else if(senha.length < 8){

        Swal.fire({
            title: "Good job!",
            text: "You clicked the button!",
            icon: "success"
          });
    

}else{
    Swal.fire({
        title: "tente novamente",
        text: "Contate a Rockstar",
        icon: "error",
        footer: '<a href="https://support.rockstargames.com/br/" target="_blank" rel="noopener noreferrer"></a>',
        timer:4000,
    })
}
    }

