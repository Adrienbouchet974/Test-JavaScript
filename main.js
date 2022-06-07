//bonjour

/* bonjour
au revoir */


    //jsdoc
    /**
     * @constructor
     * @param {string} title
     * @param {string} author
     */

function create_book(title,author) {};

// console

console.log("Hello World");

console.warn("Erreur");

console.error("Danger");

console.info();

// variables

let my_variable0 = "test0";

// attention à éviter
var my_variable1 = "test1";

const my_variable2 = "test2";

const fruits = ["pomme", "poire", "ananas", "banane", "kiwi"];

console.table(fruits);

/**
 * type de variable
 * string
 * number
 * boolean
 * object
 * array
 * 
 * null
 * undefined
 * 
 */

console.log(typeof fruits);
console.log(typeof my_variable1);

const dob = "2000";
const year = 2000;
const age = year - dob;

if (dob == year){
    console.log("ok1");
}

console.log(typeof dob);
console.log(typeof year);
console.log(age);

if (dob === year){
    console.log("ok2");
}

const apprenant = {
    prenom : "Jean Jack ouilles",
    nom : "Bouchet",
    age : 21,
    stack : ["HTML", "PHP", "CSS", "JavaScript"],
    is_admin : false,
    present : function (){
        // console.log("je m'appelle " + apprenant.prenom + " et je connais " + apprenant.stack[0]);
        console.log(`Bonjour je m'appelle ${apprenant.prenom} et je connais ${apprenant.stack[0]}`)
    }
}

// console.log("je m'appelle " + apprenant.prenom + " et je connais " + apprenant.stack[0]);
console.log(apprenant.present());

// opérateurs de calculs
// +, -, *, %, /

// opérateurs de comparaison
// ==, ===, !=, >=, <=

// structure conditionnelle
// if ... else, elseif, switch ... case

//fonctions
function dire_bonjour(nom = "anonyme"){
    console.log(`Bonjour ${nom}`);
}

dire_bonjour("Cédric");
dire_bonjour("Cécile");
dire_bonjour(apprenant.prenom);
dire_bonjour();

function age_majeur(age){
    if (typeof age == "string"){
        return console.log("Veuillez indiquer un nombre");
    }
    if (age <= 18){
        console.log("tu sors");
    } else {
        console.log("tu rentres");
    }
}

age_majeur("19");

console.log(`ton prénom comporte ${apprenant.prenom.length} caractères`);
console.log(`le panier comporte ${fruits.length} fruits`);
console.log(apprenant.prenom.replace("i", "y"));
console.log(apprenant.prenom.slice(2, apprenant.prenom.length));
console.log(apprenant.prenom.split(" "));

const texte = "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
console.log(texte.split(" ").slice(3, texte.length));
console.log(texte.split(" ")[0], texte.split(texte.split(" ")[0], texte.split(" ")[5]).length);
console.log(texte.substr(0, 40));

for(let i = 1; i <= 10; i++){
    console.log(i);
}

for(let i = 0; i < fruits.length; i++){
    console.log(fruits[i]);
}

let i = 0;
while (i < fruits.length) {
    console.log(fruits[i]);
    i++;
}

fruits.forEach(function(fruit, index){
    console.log(fruit);
    console.log(index);
});

const dire_au_revoir = elem => console.log(elem);
dire_au_revoir("plouf");