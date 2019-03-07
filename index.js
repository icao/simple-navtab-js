document.addEventListener("DOMContentLoaded", function() {
  const tabItem = document.querySelectorAll(".tab__item");
  const panelItem = document.querySelectorAll(".panel__item");

  for (const [index, value] of tabItem.entries()) {
    value.addEventListener("click", () => {
      let tabItemActive = document.querySelector(".tab__item--active");
      let panelItemActive = document.querySelector(".panel__item--active");

      tabItemActive.classList.remove("tab__item--active");
      tabItem[index].classList.add("tab__item--active");

      panelItemActive.classList.remove("panel__item--active");
      panelItem[index].classList.add("panel__item--active");

    });
  }

  // for (let i = 0; i < tabItem.length; i += 1) {
  //   tabItem[i].addEventListener('click', () => {
  //     let tabItemActive = document.querySelector('.tab__item--active');
  //     let panelItemActive = document.querySelector('.panel__item--active');

  //     tabItemActive.classList.remove('tab__item--active');
  //     tabItem[i].classList.add('tab__item--active');

  //     panelItemActive.classList.remove('panel__item--active');
  //     panelItem[i].classList.add('panel__item--active');
  //   });
  // }

  /*
  const elements = ['Noritza', 'Fofy', 'Billy',  5];

  for (const element of elements) {
    console.log(element);
  }

  for (const element of elements.keys()) {
    console.warn(element);
  }

  for (const element of elements.values()) {
    console.log(element);
  }

  for (const [index, value] of elements.entries()) {
    console.warn(index, value);
  }
*/
});

/*
NOTA: Hata el momento recomiendan no recorrer un node list con el for clasico basandose en la longitud del nodelist o el uso de for of,
  aunque con for of, no he detectado como leer el indice de cada elemento recorrido. 
El uso de
for in , no arroja el item y el indice, pero NO ES RECOMENDADO para recorrer los nodelist, segun MOZILA fundation Docs(https: //developer.mozilla.org/es/docs/Web/API/NodeList)

El objeto HTML DOM NodeList
Un objeto NodeList es una lista(colección) de nodos extraídos de un documento.

Un objeto NodeList es casi lo mismo que un objeto HTMLCollection.

******************************************
Un node list nos obtiene un objeto con todas las propiedades del elemento detectadas por del navegador.
console.warn(tabItem[i]);
console.warn(tabItem[i].style);
*/
