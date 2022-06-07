// const characters = ["a", "b", "c", "d", "E", "F", "G", "H"];
// const number = [1, 2, 3, 4, 5, 6, 7, 8];
// const specs = [";", "!", "/", "*"];
const valeur = {
    min : ["a", "b", "c", "d"],
    maj : ["E", "F", "G", "H"],
    number : [1, 2, 3, 4, 5, 6, 7, 8],
    specs : [";", "!", "/", "*"]
}
// const random_element = [Math.floor(Math.random() * characters.length)];

function get_random_int(max) {
    return Math.floor(Math.random() * max);
}

function generate_password(){
    for (let i = 0; i < 8; i++) {
        while (i != 8) {
            while (valeur.min[get_random_int(4)] < 2) {
                console.log(`Votre mot de passe contient le caractère suivant : " ${valeur.min[get_random_int(2)]} "`);
                break;
            }
            while (valeur.maj[get_random_int(4)] < 2) {
                console.log(`Votre mot de passe contient le caractère suivant : " ${valeur.maj[get_random_int(2)]} "`);
                break;
            }
            while (valeur.number[get_random_int(4)] < 2) {
                console.log(`Votre mot de passe contient le caractère suivant : " ${valeur.number[get_random_int(2)]} "`);
                break;
            }
            while (valeur.specs[get_random_int(4)] < 2) {
                console.log(`Votre mot de passe contient le caractère suivant : " ${valeur.specs[get_random_int(2)]} "`);
                break;
            }
            break;
        }
    }
    console.log("bien joué");
}
generate_password();
