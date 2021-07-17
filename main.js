var myModal = document.getElementById('myModal')
var myInput = document.getElementById('myInput')
const form = document.querySelector('#addF')
let allertN = document.querySelector('#alertName')
let allertL = document.querySelector('#alertLastName')
let allertP = document.querySelector('#alertPIva')
let allertD = document.querySelector('#alertData')


if(myModal){
    myModal.addEventListener('shown.bs.modal', function () {
      myInput.focus()
    })
}

form.addEventListener('submit',(e)=>{
    e.preventDefault();
    
    let name = e.target.name.value.trim().toUpperCase();
    let lastName = e.target.lastName.value.trim().toUpperCase();
    let email = e.target.emailf.value.trim().toUpperCase();
    let pIva = e.target.pIva.value;
    let data = e.target.data.value;
    let address = e.target.address.value.trim().toUpperCase();
    let comune = e.target.comune.value.trim().toUpperCase();
    let gender = e.target.gender.value;

    let now = new Date();
    let choise = new Date(data)
    allertN.classList.add('d-none')
    e.target.name.classList.remove('bg-danger')

    allertL.classList.add('d-none')
    e.target.lastName.classList.remove('bg-danger')

    allertP.classList.add('d-none')
    e.target.pIva.classList.remove('bg-danger')

    allertD.classList.add('d-none')
    e.target.data.classList.remove('bg-danger')


    if(validation(/[0-9]/,name,3,30)){
      e.target.name.classList.add('bg-danger')
      allertN.classList.remove('d-none')
      return;
    }

    if(validation(/[0-9]/,lastName,3,30)){
      e.target.lastName.classList.add('bg-danger')
      allertL.classList.remove('d-none')
      return;
    }

    if(pIva.length != 11){
      e.target.pIva.classList.add('bg-danger')
      allertP.classList.remove('d-none')
      return;
    }

    if(now < choise){
      e.target.data.classList.add('bg-danger')
      allertD.classList.remove('d-none')
      return;
    }
  
})

function validation(regex,value,min,max){
  let rulesOne = regex.test(value);
  let rulesTwo = value.length <= min;
  let rulesThree = value.length >= max;
  return rulesOne || rulesTwo || rulesThree;
}


