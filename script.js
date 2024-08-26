const textArea = document.querySelector(".container__conteudo__input");
let verificacao = 0; 
function btnCriptar() {
    processText(encriptar);
}
function btnDescriptar() {
    processText(descriptar);
}
function processText(operacao) {
    const string = operacao(textArea.value)
    verificacao == 0 ? TrocaOutPut(string) : AddOutPut(string);
}

function encriptar(string) {
    let criptografia = { "e": "enter", "i": "imes", "a": "ai", "o": "ober", "u": "ufat" }
    string = string.toLowerCase();
    for (let letra in criptografia) {       
        string = string.split(letra).join(criptografia[letra]); 
    }
    return string
} 
function descriptar (string) {
    let criptografia = { "e": "enter", "i": "imes", "a": "ai", "o": "ober", "u": "ufat" }
    string = string.toLowerCase();

    for (let letra in criptografia) {             
        string = string.split(criptografia[letra]).join(letra); 
    }
    return string
}

function TrocaOutPut(string) {
    if (verificacao == 0) {
        verificacao = 1;
        const outputSection = document.querySelector('.container__output'); 
        const outputImage = outputSection.querySelector('.container__output__imagem');
        const outputMensagens = outputSection.querySelector('.container__output__mensagens'); 

        outputImage.classList.add('hidden');
        outputMensagens.classList.add('hidden');
    
        const textAreaOutput = document.createElement('textarea')
        textAreaOutput.innerText = string;
        textAreaOutput.classList.add('container__output__textAreaOutput');
        outputSection.appendChild(textAreaOutput); 
    

        const copyButton = document.createElement('button');
        copyButton.innerText = "Copiar";
        copyButton.classList.add('container__output__btnCopiar');
        
        copyButton.addEventListener('click', function() {
            textAreaOutput.select()
            document.execCommand('copy');
        });
        outputSection.appendChild(copyButton);
    }
    else{
        textAreaOutput.innerText = string;
    }
    
}
function AddOutPut(string) {
    const textAreaOutput = document.querySelector(".container__output__textAreaOutput");
    textAreaOutput.innerText = string;
}
