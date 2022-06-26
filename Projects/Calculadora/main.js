
//para fazer: o botão do ponto ainda não funciona. 

const calculadora = document.querySelector('#calculadora__principal');
const exibeValor = document.querySelector('#calculadora__principal--mostrador');


//variavéis para operação
let valorAtual = 0;
let valorAntigo = 0;
let ponto = false
var somar = false;
var subtrair = false;
var multiplicar = false;
var dividir = false;

calculadora.addEventListener('click', (evento) =>{
    const valorSelecionado = evento.target.textContent;
    

    //não deixa clicar na div de resultado
    if(evento.target.id == 'calculadora__principal--mostrador'){ 
        return
    }
    //conferi qual operacao deseja fazer
    if(valorSelecionado == '+' || valorSelecionado == '-' || valorSelecionado == '*' || valorSelecionado == '/'){
        //verifica se foi clicado em algum botão de operador
        switch(valorSelecionado){
            case "+":
                valorAntigo = parseFloat(exibeValor.value);
                exibeValor.value = '';
                somar = true;
                break;
            case "-":
                valorAntigo = parseFloat(exibeValor.value);
                exibeValor.value = '';
                subtrair = true;
                break;
            case "*":
                valorAntigo = parseFloat(exibeValor.value);
                exibeValor.value = '';
                multiplicar = true;
                break;
            case "/":
                valorAntigo = parseFloat(exibeValor.value);
                exibeValor.value = '';
                dividir = true;
                break;
        } 
        return
        
    }else if(valorSelecionado == 'C'){ //para zerar o calculadora
        valorAntigo = 0;
        valorAtual = 0;
        exibeValor.value = '';
        ponto = false;
        return;

    }else if(valorSelecionado == '='){ //concluir operação da calculadora
        if(somar){
            exibeValor.textContent = valorAntigo + valorAtual;
            console.log(`valor atual ${valorAtual} \nvalor antigo ${valorAntigo} \nResultado ${exibeValor.textContent + parseInt('.')}`);
            somar = false;
            return
        }else if(multiplicar){
            exibeValor.textContent = valorAntigo * valorAtual;
            multiplicar = false;
            return 
        }else if(dividir){
            exibeValor.textContent = valorAntigo / valorAtual;
            dividir = false;
            return
        }else if(subtrair){
            exibeValor.textContent = valorAntigo - valorAtual;
            subtrair = false;
            return
        }
    
        //adiciona o ponto
    }else if(valorSelecionado == '.'){ 
        console.log(ponto);
        if(ponto) {
            return
        }
            exibeValor.value += '.';
        ponto = true;
        return

    }
    if(!parseInt(valorSelecionado)){ //apenas números são clicavéis
        if(!parseInt(valorSelecionado) && parseInt(valorSelecionado) == 0 ){ //regra para o 0 funcionar corretamente
            valorAtual = parseInt(valorSelecionado);
            exibeValor.value += valorAtual; 
            valorAtual = parseFloat(exibeValor.textContent)
            return
        }
        console.error('Clique em um número')
        return
    }
    valorAtual = parseFloat(valorSelecionado);
    exibeValor.value += valorAtual; 
    valorAtual = parseFloat(exibeValor.innerHTML);

   
   console.log(`valor atual ${valorAtual} \nvalor antigo ${valorAntigo} \nResultado ${exibeValor.textContent}`);
    

})

