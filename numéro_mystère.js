function get_random_int(max) {
  return Math.floor(Math.random() * max);
}

const nombre = [1, 2, 3, 4];

const random_number = get_random_int(10);
console.log(random_number);


for (let i = 0; i < 3; i++) {
  console.log(nombre[i]);
  if(random_number == nombre[i]){
    console.log(`bien joué trouvé en ${i}`);
  }else{
    console.log("pas de chance");
  }
}
console.log(`le nombre était ${random_number}`);
