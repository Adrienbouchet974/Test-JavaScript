const characters = ["a", "b", "c", "d", "E", "F", "G", "H", 1, 2, 3, 4, 5, 6, 7, 8];
const random_element = [Math.floor(Math.random() * characters.length)];

function get_random_int(max) {
    return Math.floor(Math.random() * max);
}

const random_number = get_random_int(10);

function generate_password(){
    for (let i = 0; i < 8; i++) {
        while (i != 8) {
            console.log(`Votre mot de passe contient le caractère suivant : " ${characters[get_random_int(16)]} "`);
            break;
        }
    }
    console.log("bien joué");
}
generate_password();