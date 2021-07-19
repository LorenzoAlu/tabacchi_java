var myModal = document.getElementById('myModal')
var myInput = document.getElementById('myInput')
const form = document.querySelector('#addF')
let allertN = document.querySelector('#alertName')
let allertL = document.querySelector('#alertLastName')
let allertP = document.querySelector('#alertPIva')
let allertD = document.querySelector('#alertData')
let SigaretteTable = document.querySelector('#SigaretteTable')
let fornitoreTable = document.querySelector('#fornitoreTable')

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


let sigarette = [
  {
    id_sigaretta: 12,      
    marca: 'DIANA',        
    modello: "ROSSA 100's",
    quantita: 0,
    prezzo: 0
  },
  {
    id_sigaretta: 11,
    marca: 'DIANA',
    modello: 'SSL BLU',
    quantita: 0,
    prezzo: 0
  },
  {
    id_sigaretta: 2,
    marca: 'CAMEL',
    modello: 'BLU 100S',
    quantita: 0,
    prezzo: 0
  },
  {
    id_sigaretta: 1,
    marca: 'CAMEL',
    modello: 'BLU',
    quantita: 0,
    prezzo: 0
  },
  {
    id_sigaretta: 4,
    marca: 'CAMEL',
    modello: 'ORANGE',
    quantita: 0,
    prezzo: 0
  },
  {
    id_sigaretta: 3,
    marca: 'CAMEL',
    modello: 'COMPACT FILTERS',
    quantita: 0,
    prezzo: 0
  },
  {
    id_sigaretta: 6,
    marca: 'CHESTERFIELD',
    modello: 'KS',
    quantita: 0,
    prezzo: 0
  },
  {
    id_sigaretta: 5,
    marca: 'CHESTERFIELD',
    modello: "BLU 100'S",
    quantita: 0,
    prezzo: 0
  },
  {
    id_sigaretta: 8,
    marca: 'CHESTERFIELD',
    modello: "RED 100'S",
    quantita: 0,
    prezzo: 0
  },
  {
    id_sigaretta: 7,
    marca: 'CHESTERFIELD',
    modello: 'CAPS TWICE',
    quantita: 0,
    prezzo: 0
  },
  {
    id_sigaretta: 10,
    marca: 'DIANA',
    modello: 'BIANCA',
    quantita: 0,
    prezzo: 0
  },
  {
    id_sigaretta: 9,
    marca: 'DIANA',
    modello: 'AZZURRA KS',
    quantita: 100,
    prezzo: 1300
  }
]

let sSort = sigarette.sort((a,b)=>a.id_sigaretta - b.id_sigaretta );


sSort.forEach(el=> {
    let tr = document.createElement('tr');
    tr.innerHTML = `
                <th scope="row">${el.id_sigaretta}</th>
                <td>${el.modello}</td>
                <td>${el.quantita}</td>
                <td>${el.prezzo}</td>
                <td>${el.marca}</td>
    `
    SigaretteTable.appendChild(tr);
})

let fornitore = [
  {
    partitaiva: '11111111111',
    nome: 'cicicicic',
    cognome: 'hduhuvhuh',
    email: 'dijediejdij@gmail.com',
    indirizzo: 'jdjdjdjd dj djd djd dj',
    comune: 'napoli',
    gender: 'M',
    data: '2021-07-07T22:00:00.000Z'
  },
  {
    partitaiva: '10101010101',
    nome: 'cicicic',
    cognome: 'jfhrufrufhrufhr',
    email: 'cijcijci@gmail.com',
    indirizzo: 'ufhrufhruhfr fuhruhf fuhruufr',
    comune: 'NAPOLI',
    gender: 'M',
    data: '2021-07-07T22:00:00.000Z'
  },
  {
    partitaiva: '12365236985',
    nome: 'ccccccc',
    cognome: 'tttttttt',
    email: 'llovo@gmail.com',
    indirizzo: 'dedededeed de ed e',
    comune: 'NAPOLI',
    gender: 'M',
    data: '2021-07-07T22:00:00.000Z'
  },
  {
    partitaiva: '14587452589',
    nome: 'CICICCIC',
    cognome: 'OOOOOOOO',
    email: 'LCCOCL@LOLOLO.COM',
    indirizzo: 'DJDJDJD DJD JDJD JD',
    comune: 'NAPOLI',
    gender: 'M',
    data: '2021-07-07T22:00:00.000Z'
  },
  {
    partitaiva: '15289654857',
    nome: 'MERDUZ',
    cognome: 'MONA',
    email: 'CICICICIC@GMAIL.COM',
    indirizzo: 'VIA DEL MONA',
    comune: 'NAPOLI',
    gender: 'M',
    data: '2021-07-07T22:00:00.000Z'
  },
  {
    partitaiva: '99999999999',
    nome: 'CC',
    cognome: 'CC',
    email: 'CICICIC@GMAIL.COM',
    indirizzo: 'CCCC',
    comune: 'CCC',
    gender: 'M',
    data: '1969-12-31T23:00:00.000Z'
  },
  {
    partitaiva: '25364758697',
    nome: 'ciccio',
    cognome: 'pasticccio',
    email: 'lollo@gmail.com',
    indirizzo: 'via della mona 23',
    comune: 'napoli\n',
    gender: 'M',
    data: '1969-12-31T23:00:00.000Z'
  }
]

fornitore.forEach(el => {
  let tr = document.createElement('tr');
  tr.innerHTML = `
              <th scope="row">${el.partitaiva}</th>
              <td>${el.nome}</td>
              <td>${el.cognome}</td>
              <td>${el.email}</td>
  `
  fornitoreTable.appendChild(tr);
})