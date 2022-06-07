const config = {
  noob: {
    attemp: 5,
    mysteryNumber: [1, 10],
  },
  beginner: {
    attemp: 4,
    mysteryNumber: [1, 25],
  },
  hard: {
    attemp: 2,
    mysteryNumber: [1, 50],
  },
  hell: {
    attemp: 1,
    mysteryNumber: [1, 100],
  },
};

function get_random_int(max) {
  return Math.floor(Math.random() * max);
}

const nombre = [1, 2, 3, 4];
attemp = 5;

const random_number = get_random_int(10);
console.log(random_number);

function launch(nombre, config) {
  for (let i = 0; i < 3; i++) {
    console.log(nombre[i]);
    if(random_number == nombre[i]){
      console.log(`bien joué trouvé en ${i}`);
    }else{
      console.log("pas de chance");
    }
  }
  console.log(`le nombre était ${random_number}`);
}

launch([2, 3, 5, 6, 7],config.noob.attemp);