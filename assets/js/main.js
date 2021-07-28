const formulario = document.querySelector('#formulario').addEventListener('submit',(evento)=>{
  evento.preventDefault()

  let inputPeso = evento.target.querySelector('#peso')
  let inputAltura = evento.target.querySelector('#altura')

  let peso = Number(inputPeso.value)
  let altura = Number(inputAltura.value)

  if(!peso){
    setResultado('Peso invalido !', false)
    return
  }

  if(!altura){
    setResultado('Altura invalida !', false)
    return
  }

  let getPeso = calculaImc(peso, altura)
  let getNivel = nivelImc(getPeso)

  let resultado = `Seu IMC é ${getPeso} (${getNivel})`

  setResultado(resultado, true)
})


function calculaImc(peso, altura) {
  const imc = peso / altura ** 2;
  return imc.toFixed(2)
}


function nivelImc(imc) {
  let nivel =  ['Abaixo do peso', 'Peso normal', 'Sobrepeso',
  'Obesidade grau 1', 'Obesidade grau 2', 'Obesidade grau 3'];

if (imc >= 39.9) return nivel[5];
if (imc >= 34.9) return nivel[4];
if (imc >= 29.9) return nivel[3];
if (imc >= 24.9) return nivel[2];
if (imc >= 18.5) return nivel[1];
if (imc < 18.5) return nivel[0];

}


function setResultado(msg, value){
  let div = document.querySelector('#resultado')
  div.innerHTML = ''
  let p = document.createElement('p')
  div.appendChild(p)
  p.innerHTML = msg

  
  if(value){
    p.classList.add('paragrafo-resultado')
  }else{
    p.classList.add('bad')
  }
  
}