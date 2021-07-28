

function checarIdade() {
    let anoNascimento = document.getElementById("dataNascimento").value; 

    let civil = document.getElementById("estadoCivil").value;

    if (anoNascimento > "2006-12-31"  && civil == 'solteiro') {
       alert('Você deve ter pelo menos 15 anos para se cadastrar como SOLTEIRO(A) na opção Estado Civil.');
       document.getElementById("form").action = "";
    } else {
    document.getElementById("form").action = "login.html";
    }
}

