const inputCpf = document.querySelector('#cpf');
const inputTel = document.querySelector('#number');


inputCpf.addEventListener('keypress', () => {
    let inputlength = inputCpf.value.length
    if (inputlength == 3 || inputlength == 7){
        inputCpf.value += '.'
    }else if (inputlength == 11){
        inputCpf.value += '-'
    }
})

inputTel.addEventListener('keypress', () => {
    let inputLen = inputTel.value.length
    if (inputLen == 2){
        inputTel.value += " "
    }else if(inputLen == 8){
        inputTel.value += "-"
    }
})

