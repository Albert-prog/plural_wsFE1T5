function pageLoaded() { //ez a fő függvényünk

  let rootE = document.getElementById("root"); //root id-vel rendelkező elem változóba tétele

  let aTextArray = ["szeder", "alma", "cseresznye", "eper", "egres", "meggy", "dinnye", "datolya", "barack", "kiwi", "citrom"]; //tömb létrehozása és elemeinek deklarálása

  // console.log(aTextArray[2]);

  // console.log(aTextArray.length);

  for (let index = 0; index < aTextArray.length; index++) { //létrehozza a diveket és feltölti a tömb elemeivel

    rootE.insertAdjacentHTML("beforeend", `
      <div class="fruit">${aTextArray[index]}</div>
    `);

  }

  let fruitDivs = rootE.querySelectorAll(".fruit"); //kiválasztja a rootE-n belüli fruit class-okat és deklarálja változóként
  
  // console.log(fruitDivs[2]);

  for (let index = 0; index < fruitDivs.length; index++) { //végiglépteti a fruitDiv tömb indexeit
    
    // console.log(index === 1);
    // console.log(index % 2);

    if (index % 2 === 0){ //az index értékét vizsgálja, hogy páros-e

      fruitDivs[index].classList.add("trueClass"); //hozzáadja az index elemű node classlistájához a trueClass class-t.

    } else if (index % 5 === 0) { //az index értékét vizsgálja, hogy maradék nélkül osztható-e 5-el.

      fruitDivs[index].classList.add("anotherClass"); //hozzáadja az index elemű node classlistájához az anotherClass class-t.

    } else { //minden más esetben
      
      fruitDivs[index].classList.add("falseClass"); //hozzáadja az index elemű node classlistájához a falseClass class-t.

    }
    
  }
}

window.addEventListener("load", pageLoaded); //az ablakhoz ad egy eseményt, ami az oldalbetöltődés után meghivja a fő függvényt
