import { createFromLocal } from "./view.js";
import { pizzasArray } from "./pizzaList.js";

window.addEventListener("load", () => {
  localStorage.setItem("pizzas", JSON.stringify(pizzasArray));
  createFromLocal();
  searchBar();

  function textNormalize(text) {
    if (text === null || text == "" || !text || text === undefined) {
      return;
    } else {
      let input = text;
      input = input.replace(/\s/g, "");
      input = input.toLowerCase();
      return input;
    }
  }
  function searchBar() {
    $(".searchButton").click((event) => {
      let input = textNormalize($("#pizzaSearchInput").val());
      if (input != undefined) {
        const lista = document.querySelectorAll(".pizzaContainer");
        let foundStatus = false;
        lista.forEach((e, i) => {
          if (textNormalize(e.querySelector("h3").textContent) === input) {
            if (e.classList.contains("displayNone"))
              e.classList.remove("displayNone");
              foundStatus = true;
              return
          } 
          else{
            e.querySelector("h3").parentNode.parentNode.classList.add(
              "displayNone");
              console.log("primer else")
              if(textNormalize(e.querySelector("h3").textContent) !== input && i == lista.length - 1 && foundStatus == false) {
                console.log("if")
                $("main").append($(`<div class="errorContainer centerFlex"><p class="errorMessage">No se han encontrado resultados en tu búsqueda.</p><button class="errorButton">Quitar Búsqueda</button></div>`));
                $(".listTitle").addClass("displayNone");
                $(".errorButton").click((event) => {
                    $(".errorContainer").remove();
                    const lista = document.querySelectorAll(".pizzaContainer");
                    lista.forEach((e, i) => {
                      if (e.classList.contains("displayNone")) {
                        e.classList.remove("displayNone");
                        $(".listTitle").removeClass("displayNone");
                        $("#pizzaSearchInput").val("")
                      }
                    });
                })
              };
            }; 
          

        });
      } else {
        const lista = document.querySelectorAll(".pizzaContainer");
        lista.forEach((e, i) => {
          if (e.classList.contains("displayNone")) {
            e.classList.remove("displayNone");
          }
        });
        return;
      }
    });
  }
});
