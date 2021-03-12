// tady je místo pro náš program

function vysledek() {
  document.querySelector("#vysledek").innerHTML = secti(4, 5);
}
  
/**
 * Sečte dvě čísla na vstupu a vrátí výsledek
 *
 * @param {int} a
 * @param {int} b
 */


  function secti(a, b) {
  let c = a + b;
  return c;
  }


/**
 * Upozorní uživatele při spuštění + vypisuje text do ctverecku a console
 */

function upozorni() {
  let upozorneni = "Gratulace, právě jsi spustila tuto funkci!"
  let ctverecek;
  ctverecek = document.querySelector('.ctverecek');
  alert(upozorneni);
  console.log(upozorneni);
  ctverecek.style.fontSize = "8px";
  ctverecek.textContent = upozorneni;
}

//funkce měnící barvu čtverečku 

function barva() {
  let ctverecek;
  ctverecek = document.querySelector('.ctverecek');
  ctverecek.style.backgroundColor = "green";
}

