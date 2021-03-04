var cognome = prompt("Come fai cognome");

cognome = cognome[0].toUpperCase() + cognome.substring(1);

var listaCognomi = ["Bianchi", "Rossi", "Perlari", "Lodigiani", "Mastrobattista", "Verdi"];

listaCognomi.push(cognome);

listaCognomi.sort();

var i = 0;
while (i < listaCognomi.length) {
  document.getElementById("cognomi").innerHTML += "<li>" + listaCognomi[i] + "</li>";
  i++;
}

document.getElementById('position').innerHTML = "Il tuo congome è in posizione " + (listaCognomi.indexOf(cognome)+1);

console.log(listaCognomi);
console.log(listaCognomi.indexOf(cognome) +1);
