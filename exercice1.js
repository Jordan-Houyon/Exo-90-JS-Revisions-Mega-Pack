mafonction();
let nomVoiture="Peugeot";
let x = 50;

let z=10;
let w=5;
let d= z+w;
alert(d)


let personne={preonm:"John", nom:"Doe", age:35}
//console.log(personne);//

alert(10*5);

alert(10/2);

alert(15%9);

let l=10 , k=5;
l=10+k;
//console.log(l);//

function mafonction(){
    alert("Salut tout le monde")
}

let str1="bonjour";
let str2="le monde";
alert(str1 + " " + str2);

let text="une longue phrase";
let longueur=text.length;

alert(longueur);

let ListeVoitures=["Renault","Volvo","Citroen"];
let maVoiture=ListeVoitures[1];
//console.log(maVoiture);//

ListeVoitures.splice(0,1,"Ford");

//console.log(ListeVoitures);//

alert(ListeVoitures.length);

ListeVoitures.pop();
//console.log(ListeVoitures);//
ListeVoitures.push("Ferrari");
//console.log(ListeVoitures);//

let rNumber=Math.random();
//console.log(rNumber);//

let fNumber=154.8;
fnumberr=Math.floor(fNumber);
//console.log(fnumberr);//


let NombreUn=10;
let NombreDeux=5;
let NombreTrois=10;
let NombreQuatre=10;

if(NombreUn>NombreDeux){
    alert("NombreUn est supérieur à NombreDeux");
}

if(NombreTrois=NombreQuatre){
    alert("Nombretrois est égal à NombreQuatre");
}

if(NombreUn!=NombreDeux){
    alert("nombreun n'est pas égal à nombredeux");
}
let i=0;
while(i<10){
    console.log("i n'est pas égal a 10");
    i++;
};

for(let i = 0; i < 10; i++){
    console.log([i])
}

let fruits = ["pomme","banane","poire"]


for(let i = 0; i < fruits.length; i++){
    console.log(fruits[i])
    while(i < 10){

    }
    while(i < 10){
        i+=2;
    }
    while(i === 5){
        alert("bravo")
    }
}