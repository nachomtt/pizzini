export function createFromLocal() {
  JSON.parse(localStorage.getItem("pizzas")).forEach((item) => {
    const template = $("#template-pizza-element").contents();
    let ingLength = item.ingredientes.length;
    let ingredientes = [];
    item.ingredientes.forEach((item, index) => {
      if (index == 0) {
        let capLetter = item.charAt(0);
        let lastChars = item.slice(1, Infinity);
        capLetter = capLetter.toUpperCase();
        ingredientes.push(" " + capLetter + lastChars);
      } else if(index == ingLength - 1) ingredientes.push(" " + item + ".");
      else ingredientes.push(" " + item);
    });
    const clone = $(template.clone(true));
    clone.find("img").attr("src", item.img);
    clone.find("h3").text(item.nombre.toUpperCase());
    clone.find("p").text(ingredientes);
    clone.find("b").text("$" + item.precio)
    clone.appendTo(".pizzaList");
  });
}
