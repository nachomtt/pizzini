import { createFromLocal } from "./view.js";
import { pizzasArray } from "./pizzaList.js";

window.addEventListener("load", () => {
  localStorage.setItem("pizzas", JSON.stringify(pizzasArray));
  createFromLocal();
  searchBar();

  function textNormalize(text) {
    let regex = /\w/g;
    if (text === null || text == "" || !text || text === undefined) {
      return null;
    } else {
        if (regex.test(text)){
            let input = text;
            input = input.replace(/\s/g, "");
            input = input.toLowerCase();
            return input;
        }else return null

    }
  }
  function searchBar() {
    function search(){
        let input = textNormalize($("#pizzaSearchInput").val());
        if (input != undefined && input != null){
            console.log("true")
        }else console.log("false")
        if (input != null) {
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
            $(".errorContainer").remove();
            $(".listTitle").removeClass("displayNone");
          const lista = document.querySelectorAll(".pizzaContainer");
          lista.forEach((e, i) => {
            if (e.classList.contains("displayNone")) {
              e.classList.remove("displayNone");
              
            }
          });
          return;
        }
      }
    $("input").keypress(function(event) {
        if (event.which == 13) search();
         
    });
    $(".searchButton").click((event) => search());
  }
});
