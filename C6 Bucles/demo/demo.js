
// una persona tiene que tener mas de 18 y el ticket
// si la persona quiere entrar, no ticker pero es friend del dueño
// pasa

// or and and

// function entrada (nombre, edad, ticket, friend){
//     if ((edad >= 18) && (ticket == true)){
//         return nombre + " puede pasar";
//     } else if (edad >= 18 && ticket == false && friend == true){
//         return nombre + " puede ingresar";
//     } else{
//         return "no pasas gil";
//     }
    
// }
// var result = entrada ("camilo", 18, false, true);
// console.log(result);


// Bucles!! FOR

// var edad = 18;
 
// for(var i = 0; i <= 100; i++ ){
//     if (edad == 18 && i == 18){
//         console.log ("sos el numero 18 gil");
//     }
// console.log(i);
// }
 
// WHILE  el iterador va por fuera y el i++ va al final del while

// while (true){ } lo vuelve infitio ( we do not know how many people is gonna come)

// var i = 101;
// var edad= 18;
// while(i <= 50){
//     if(edad == 18 && i == 18){
//         console.log ("sos el 18 gil de mierda");
//     }
//     console.log(i);


//     i++;
// }
//  el do while lo hace una vez minimo 
// var i = 55;

// do{

//     console.log (i);

//   i++;
// }while( i < 50);

// for (var i = 0; i < 50 ; i++) {
//     if (i % 2 == 0){
//         continue;  //salta esa iteracion o ese paso
//         console.log (i);
//     } else{
//         console.log(i);
//     }
    
// }

// for (var i = 0; i < 50 ; i++) {
//     if (i == 20){
//         break;  // rompe la iteracion y no sigue
//         console.log (i);
//     } else{
//         console.log(i);
//     }
    
// }

// var personas = true;

// var nohaymaspersonas=true;

// while(personas ){
//     console.log("entro una persona");
//     if (nohaymaspersonas){
//         break;
//     }
// }






// var edad = 18;

// switch (edad) {
//     case 1:
//         console.log ("es menor de edad")
//         break;
//         case 18:
//         console.log ("es mayor de edad")
//         break;

//     default:
//         break;
// }