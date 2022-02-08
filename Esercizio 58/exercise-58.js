const persons = [
  {
    id: 1,
    firstName: 'Mario',
    lastName: 'Rossi',
    age: 25
  },
  {
    id: 2,
    firstName: 'Maria',
    lastName: 'Verdi',
    age: 32
  },
  {
    id: 3,
    firstName: 'Giovanni',
    lastName: 'Rossi',
    age: 35
  }
];

function fetchPersonById(id) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const personId =  persons.find(item => item.id === id)
      
      if(personId) {
        resolve(personId);
      } else {
        reject(new Error('ID not found!'))
      }
    }, 1000);
  });
}

fetchPersonById(2).then((person) => console.log(person))
.catch((err) => { console.log(err)});

fetchPersonById(4).then((person) => console.log(person))
.catch((err) => { console.log(err)});