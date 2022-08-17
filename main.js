let pizzas = [
    {
        id: 1,
        nombre: "mozzarella",
        ingredientes: [
            "masa", "salsa de tomate", "mozzarella", "aceitunas", "oregano"
        ],
        precio: 500
    },
    {
        id: 2,
        nombre: "fugazzeta",
        ingredientes: [
            "masa", "cebolla", "mozzarella", "aceitunas", "oregano"
        ],
        precio: 600
    },
    {
        id: 3,
        nombre: "especial",
        ingredientes: [
            "masa", "salsa de tomate", "mozzarella", "jamon cocido", "aceitunas", "oregano"
        ],
        precio: 550
    },
    {
        id: 4,
        nombre: "roquefort",
        ingredientes: [
            "masa", "salsa de tomate", "mozzarella", "roquefort", "aceitunas", "oregano"
        ],
        precio: 700
    },
    {
        id: 5,
        nombre: "calabresa",
        ingredientes: [
            "masa", "salsa de tomate", "mozzarella", "calabresa", "provenzal", "aceitunas", "oregano"
        ],
        precio: 650
    },
    {
        id: 6,
        nombre: "jamon con huevo",
        ingredientes: [
            "masa", "salsa de tomate", "mozzarella", "jamon cocido", "huevos duros", "aceituna", "oregano"
        ],
        precio: 600
    },
]

let returner = false;
document.getElementById("button").onclick = function () {
    returner = false;
    let numero = document.getElementById("input").value;
    pizzas.find((e) => {
        if (e.id == numero) {
            document.getElementById("h2").classList.remove("error");
            document.getElementById("h4").classList.remove("error");
            document.getElementById("h2").innerHTML = e.nombre;
            document.getElementById("h4").innerHTML = e.precio;
            returner = true;
        }
        else {
            if (!returner) {
                document.getElementById("h2").classList.add("error");
                document.getElementById("h4").classList.add("error");
                document.getElementById("h2").innerHTML = "Error";
                document.getElementById("h4").innerHTML = "";

            }
       }
    });
return 0
}