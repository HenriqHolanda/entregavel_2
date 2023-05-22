const submit_login = document.querySelector('.full-btn')

let level1 = false;
let level2 = false;
let level3 = false;

function ckChange(){

    var opSelecionada = document.querySelector('input[name="ck"]:checked').value;

    if(opSelecionada == 'Membro'){
        level1 = true;
        level2 = false;
        level3 = false;
    }

    if(opSelecionada == 'Sócio'){
        level2 = true;
        level1 = false;
        level3 = false;
    }

    if(opSelecionada == 'Diretor'){
        level3 = true;
        level1 = false;
        level2 = false;
    }
    
}

submit_login.addEventListener("click", function(e){
    e.preventDefault()
    const user = document.getElementById('username');
    const password = document.getElementById('password');

    function possível_usuario(usuario, senha, nível){
        return{
            usuario,
            senha,
            nível,
        }
    }
 
let teste = possível_usuario(user.value, password.value, 'Membro') 

    if(level1 == true){
         teste = possível_usuario(user.value, password.value, 'Membro')
    }

    if(level2 == true){
         teste = possível_usuario(user.value, password.value, 'Sócio')
    }

    if(level3 == true){
         teste = possível_usuario(user.value, password.value, 'Diretor')
    }

    let array2 = JSON.parse(localStorage.getItem(user.value));
    console.log(array2)
    console.log(teste)

    if(!localStorage.getItem(user.value) ){
        alert('Não existe nenhum usuário cadastrado com esse nome')
    }
 
    else{
        if(teste.usuario == array2[0].usuario && teste.senha == array2[0].senha && teste.nível == array2[0].nível){
            alert('Login efetuado com sucesso')
            location.href='home.html'
        }

        else{
            alert('não existe essa combinação')
        }
    }


})