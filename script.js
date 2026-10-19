console.log("The truck is open!");

// string truckName = "Isaiah's Taco Truck";

const truckName = "Isaiah's Taco Truck";
// truckName = "Jacob's Taco Truck"; cannot do this bc const doesn't let you change it

const price = 3.50;
console.log(price);

let tacosSoldToday = 0;
// tacosSoldToday = tacosSoldToday + 1; this is the same as ++
tacosSoldToday++;
console.log(tacosSoldToday);

/*
public string Sum (int num1, int num2)
{
    return "The sum is: " + (num1 + num2);
}
*/


function Sum (num1, num2)
{
    // return "The sum is: " + (num1 + num2);
    // string interpolation below is also a way to write it:
    return `The sum is: ${num1 + num2}`;
}


const menuItems = ["carne asada", "al pastor", "birria, when we have it", "just the meat"];

console.log(menuItems.length);
console.log(menuItems[0]);
console.log(menuItems);

const carneAsada = {
    name: "Carne Asada",
    price: 3.50,
    spicy: false,
    toppings: ["onions", "cilantro", "salsa"]
};

console.log(carneAsada.name);
console.log(carneAsada);

const isaiahOrder = {
    name: "Just the meat",
    price: 3.00,
    spicy: false,
    toppings: []
}

console.log(isaiahOrder.toppings);
console.log(isaiahOrder.toppings.length);

for(let i = 1; i < 6; i++){
    console.log(i);
}

for(let i = 0; i < menuItems.length; i++){
    console.log(menuItems[i]);
}

function describe(dish){
    let line = dish.name + " is $" + dish.price;

    if(dish.spicy){
        line = line + " bring a napkin";
    }

    return line;
}

const menu = [
  { name: "Carne asada", price: 3.50, spicy: false, toppings: ["onion", "cilantro", "salsa"] },
  { name: "Al pastor", price: 3.75, spicy: true, toppings: ["onion", "cilantro", "pineapple"] },
  { name: "Birria, when we have it", price: 4.50, spicy: false, toppings: ["onion", "cilantro", "consome"] },
  { name: "Just the meat", price: 3.00, spicy: false, toppings: [] }
];

for(let i = 0; i < menu.length; i++){
    console.log(describe(menu[i]));
}

console.log(document);

const heading = document.getElementById("truck-name");

console.log(heading);

heading.textContent = "Isaiah's Taco Truck (now with horchata)";

const tagline = document.getElementById("tagline");
console.log(tagline);

tagline.textContent = "Parked on Weber Ave. cash only";

const statusLine = document.getElementById("status-line");

statusLine.textContent = "Sold out";
statusLine.classList.add("closed");

statusLine.classList.remove("closed");

const crewList = document.getElementById("crew-list");

const firstItem = document.createElement("li");
console.log(firstItem);
firstItem.textContent = "Dave";

crewList.appendChild(firstItem);

const crew = ["Big Kevin", "Darnell"];

for (let i = 0; i < crew.length; i++){
    const item = document.createElement("li");
    item.textContent = crew[i];
    crewList.appendChild(item);
}