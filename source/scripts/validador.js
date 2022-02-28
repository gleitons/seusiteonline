var number1 = aleatorio();
var number2 = aleatorio();
var somaV = parseInt(number1+number2)

document.getElementById('validadorConta').innerHTML = `${number1} + ${number2} = Coloque o resultado abaixo:`

console.log(somaV)

function enviarForm() {
    const nome = document.getElementById('nome').value;
    const email = document.getElementById('email').value;
    const telefone = document.getElementById('tel').value;
    const entradaV = document.getElementById('resValidador').value;
    
    // let emaill = "test@email.com";
    console.log(email)
    let regex_validation = /^([a-z]){1,}([a-z0-9._-]){1,}([@]){1}([a-z]){2,}([.]){1}([a-z]){2,}([.]?){1}([a-z]?){2,}$/i;
    console.log("É email válido? Resposta: " + regex_validation.test(email));

    console.log(nome)
    if (nome.length > 0 && email.length > 0 && telefone.length > 0 && entradaV > 0) {
        
        if (regex_validation.test(email) == true) {
            if(somaV == entradaV) {
                document.getElementById('formContactar').submit();
                window.open(`https://api.whatsapp.com/send?phone=5538999533296&text=olá, meu nome é ${nome}, meu telefone é ${telefone}, gostaria de mais informações sobre vocês`, '_blank');
            } else {
                alert(`O RESULTADO ESTÁ INCORRETO, CALCULE ${number1} + ${number2} = ??`)
            }
        } else {
            document.getElementById('preenchaEmail').innerHTML = `Email inválido`
        }
        
        
    } else {
        alert('PREENCHA TODOS OS DADOS ANTES DE ENVIAR');
    }

    
}






function aleatorio() {
    return Math.floor(Math.random(2) * 9);
}
