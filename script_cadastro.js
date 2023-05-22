const submit_cadastro = document.querySelector(".full-btn")

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

submit_cadastro.addEventListener("click", function(e){
    const user = document.getElementById("username");
    const password = document.getElementById("password");
    const password_confirm = document.getElementById("password_confirm");
    let c = 0;

    e.preventDefault();
    if(password.value != password_confirm.value){
        alert('Preencha os dois campos de senha corretamente');
        c = c + 1;
    }

    const size_user = user.value.length;
    const size_password = password.value.length;
    

    if(size_password < 8 || size_password > 31){
        alert('A senha deve entre 8 e 30 caracteres');
        c = c + 1;
    }

    if(size_user === 0){
        alert('Preencha o campo do nome ');
        c = c + 1;
    }
    if( level1 == false && level2 == false && level3 == false){
        alert('Preencha o campo de cargo');
        c = c + 1
    }
    
  if(c == 0 ){
    //cadastrar de fato
    let array = [];
    function cadastro(usuario, senha, nível){
        return{
            usuario,
            senha,
            nível,
        }
    }
    if(level1 == true){
    array.push(cadastro(user.value, password.value, 'Membro'))
    }

    if(level2 == true){
    array.push(cadastro(user.value, password.value, 'Sócio'))
    }

    if(level3 == true){
    array.push(cadastro(user.value, password.value, 'Diretor'))
    }

    localStorage.setItem(user.value, JSON.stringify(array));
    
    alert('Cadastrado com sucesso')
    location.href='login.html'
}
});


