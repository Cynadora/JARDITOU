// var num = 5555 ;
// var prenom = "Jehvhtvjbin" ;

// alert(num);
// alert(prenom);


//JS 04 LES VARIABLES - Afficher dans la console
// alert ('console');
// console.log ('Hello la console');
// console.log ('Hello');
// console. log ("bye");
// console.log (14 + 25);

// alert ('console') ;
// var num = 9999 ;
// var prenom = "Joe" ;
// console.log(num) ;
// console.log(prenom) ;



// document.write("Votre âge est : " + 22 " + "ans") ;

// var réponse1 = window.prompt("Entrez votre nom");

// var réponse2 = window.prompt("Entrez votre prénom");

// if (window.confirm("Etes-vous un homme ?")== true
// {
//     window.alert("Bonjour Monsieur " + réponse2 + " " + réponse1)
// }
// else {
//     window.alert("Bonjour Madame " + réponse2 + " " + réponse1)
// }

//console.log("")

// JS 06 Opérateurs : opérateur de décrémentation
// var score = 100;
// --score;
// console.log(score);

// JS 06 Opérateurs : Ajoutez à 1.00 la valeur de 100
// let c = 1.00;
// let b = 100;
// console.log(c+b);

// JS 06 Opérateurs : contient la chaîne de caractères 100
// var string = 'Ceci est une chaîne de caractères' + ' 100';
// console.log(string);

// JS 06 Opérateurs : inversez la valeur de d
// d=true
// alert(!d)


// JS 07 Les conditions exercice 2 - Age
// let année = prompt("quelle est ton annnée de naissance ?");
// if (année > 1990) {
//     window.alert ("mineur");
// }
// else (année < 1990) {
//      window.alert("majeur");
// }


// JS 07 Les conditions exercice 1 - Parité
// let nombre = window.prompt("Nombre ?");
// if(nombre%2 == 0){
//     window.alert ("le nombre est pair");
// }else{
//     window.alert ("le nombre est impair");
// }


// // JS07 Exercice 3
// var nb1 = prompt("entrez un nombre :");
// var operateur = prompt ("Choisissez une opération (+, -, *, ou /):")
// var nb2 = prompt("entrez un autre nombre :");
// nb1 = parseInt(nb1);
// nb2 = parseInt(nb2);
// switch(operateur){
//     case "-":
//     window.alert (nb1 - nb2);
//     break;

//     case "*":
//         window.alert (nb1 * nb2);
//         break;

//     case "/":
//         window.alert(nb1 / nb2);
//         break;

//     case "+":
//         window.alert(nb1 + nb2);
//         break;
//}



// JS 08 Exercice 1 - Saisie
// var prenom = 0;
// while (prenom<10) {
//     console.log(" prenom + " " + prenom" );
//     prenom = prenom + 1;
// }

// JS 08 Exercice 2 - Affiche nombre inférieurs à N
// var N = prompt("taper un nombre");
// for(var i=0; i<n; i++) {
//     console.log(i);
// }


//JS 08 Exercice 3 - Moyenne

// var somme = 0; 
// var compteur =0;  
// while (true) {
//     var saisie=parseInt window.prompt("Entrez un entier (entrez 0 pour valider)"));     
//     if (saisie == 0) 
//     break;
//     if(!isNaN(saisie)) {
//         somme += saisie;
//         compteur++;
//     } else{
//         alert("saisie non valide");
//     }
// }
// console.log("somme: " + somme);
// console.log("Moyenne :" + (somme/compteur));


// JS 08 Exercice 4 - Multiples
// var N = 2
// var X = 5
//     nombre = nombre * 5
// console.log("table de multiplication par 5");
// résultat = 2 * 5;
// console.log(" 2 * " + 5 + " = " +  résultat);
// i++;
// }
// while (i <= 10);
// console.log


// //  JS 08 Exercice 5 - Nombre de voyelles
// var voyelles = "aeiouy";
// // Affiche dans la boite de dialogue "entrez un mot"
// var mot = window.prompt("entrez un mot :");
// // compter à partir de o
// var count = 0;
// // Compter à partir de 0 + longueur du mot et +1
// for (i = 0; i<mot.length; i++ ) {
//     var lettre = mot.substring(i, i+1);
//        if (voyelles.indexOf(lettre) != -1) {
//         count++;
//     }
// }
// window.alert("nombre de voyelle " + mot + " est :" + count ");


// JS 09 Exercice 1 - FONCTIONS
// var nb1 = window.prompt ("Entrez un nombre");
// var nb2 = window.prompt ("Entrez un deuxieme nombre");
// function produit (x, y) {
//     document.write(nb1*nb2);
//     return;
// }

// // Afficher l'image du papillon
// // Créer une variable image avec createElement("img"):
// var img = document.createElement("img");
// // Chemin de l'image
// img.src = "papillon.jpg";
// var block = document.getElementById("x");
// block.appendChild(img);




// JS 09 Exercice 2 String Token - FONCTIONS   ?????????????



// JS 10 - TABLEAUX - Exercice 1

// var tableau = new Array();
// var a = window.prompt ("Combien voulez-vous de cases");
// tableau.length = a;
// console.table("Il y a" +a+ " cases");
// for (i = 0; i<tableau.length; i++ ) {
// tableau[i]= window.prompt ("Entrez une valeur");
// }
// console.table(tableau);

// JS 13 - LES OBJETS NATIFS
// var tab = new Array();
// while (true) {
//     var a = parseInt(window.prompt("Entrez une valeur"));
//     if (a == 0) {
//         break; }
//      tab.push(a);   
//     }
//     var somme = 0;
//    for (i = 0; i<tab.length; i++ ){
//     somme += tab[i];
// }
// var moy = somme / tab.length;
// console.log("somme :" + somme);
// console.log("Moyenne :" + moy);


// JS 14 - Intégrer du Javascript dans une page web
// Intégration d'une balise script dans index.html
{/* <script src="javascript1.js"></script> */}

// JS 15 - Les évènements




// JS 16 - LES FORMULAIRES








//EVALUATION JAVASCRIPT - Exercice 1 - Calcul du nombre de jeunes, de moyens et de vieux.
// let jeune = 0;
// let adulte = 0;
// let vieux = 0;

// while (true) {
//     let gens = window.prompt("Entrez l'âge que vous avez ?");
//     if (gens <= 20) {
//         jeune++
//         console.log(jeune);
//     }
//     else if (gens > 20 && gens <40) {
//         adulte++
//         console.log(adulte);
//     }
//     else if (gens >= 40 & gens <= 99) {
//         vieux++
//         console.log(vieux);
//     }
//     if (gens >= 100) {
//         console.log("jeune" +jeune+ "adulte" +adulte+ "vieux" +vieux);
//         break;
//     }
    
// }
// window.alert("jeune" + jeune + "\nadulte" + adulte + "\nvieux" + vieux );



// EVALUATION JAVASCRIPT - Exercice 2 - Table de multiplication
// Proposer à l'utilisateur de taper un chiffre pour la table de multiplication 
// Transformer la chaîne de caractère en entier avec parseInt
// var tabmult = parseInt(window.prompt("Quelle table de multiplication voulez-vous ?"));
// function aléatoire(){
// // Boucle for pour réaliser une action N fois
// for (var i = 1; i<=10; i++) {
// // Affichage pour réaliser le calcul
// var résultat = tabmult * i;
// // Exécuter pour avoir le résultat attendu
// document.write(tabmult + "*" +i+ "=" + résultat+ "<br>"); 
// }
// }
// aléatoire();
 

// EVALUATION JAVASCRIPT - Exercice 3 - Recherche d'un prénom
// let tab = ["Audrey", "Aurélien", "Flavien", "Jérémy", "Laurent", "Melik", "Nouara", "Salem", "Samuel", "Stéphane"];
// let prenom = window.prompt("Choisissez un prénom Audrey, Aurélien, Flavien, Jérémy, Laurent, Melik, Nouara, Salem, Samuel, Stéphane");
// if (tab.includes(prenom)){
// tab.splice(tab.indexOf(prenom),1);
// tab.push("");
// document.write(prenom);
// }
// else {
//     alert("Il y a une erreur");


// EVALUATION JAVASCRIPT - Exercice 4 - Total d'une commande
// var PU = window.prompt("Saisir le prix unitaire du produit");
// var QTECOM = window.prompt("Saisir la quantité");
// var TOT = (PU * QTECOM);
// var PORT= 0;
// if(TOT>=100 && TOT<=200) {
//     REM = (TOT * 0.05);
// }
// else if(TOT>200){
//     REM = (TOT * 0.1);
// }
// else {
//     REM = 0;
// }
// TOT = TOT - REM;
// if(TOT>500){
//     PORT = (0)
// }
// else {
//     PORT = TOT * 0.02;
//     if (PORT < 6){
//         PORT = 6;
//     }
// }
// var PAP = (TOT + PORT);

// console.log(PAP);
// console.log(REM);
// console.log(PORT + " Total à payer: " + PAP)

// EVALUATION JAVASCRIPT - Exercice 5 - Vérification d'un formulaire



    


