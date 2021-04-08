/*
    Vi ska lista objekt i en kundvagn.

    1. För varje element ska ett artikel-objekt skapas och läggas in i listan av varor.

    2. Räkna ut totalsumman på alla objekt i kundvagnen

    Förslag på utbyggnad:
    1. Gör det möjligt att ta bort objekt
    2. Gör det möjligt att ändra antal av en artikel (kom ihåg att uppdatera summan)

*/

const shoppingCart = [
  {
    id: 1,
    title: "Banana",
    quantity: 8,
    pricePerItem: 5,
  },
  {
    id: 2,
    title: "Apple",
    quantity: 2,
    pricePerItem: 4,
  },
  {
    id: 3,
    title: "Pear",
    quantity: 8,
    pricePerItem: 5,
  },
  {
    id: 4,
    title: "Orange",
    quantity: 16,
    pricePerItem: 6,
  },
];

function createItemRow(item){
    const listItem = document.createElement("li");
    /*
        Fyll på med information om objektet i listan:
        * Titel
        * Antal
        * Styckepris
        * Radpris (styckepris * antal)
    */
    listItem.innerText = `${item.title} qty: ${item.quantity} price per item: ${item.pricePerItem} total cost: ${item.pricePerItem * item.quantity}`;
    return listItem;
}

function calculateTotal(){
    //Ersätt med totalen av objekten (förslag, använd reduce());
    const sum = shoppingCart.reduce((previousValue, currentItem) => previousValue + (currentItem.pricePerItem * currentItem.quantity), 0);
    return sum;
}

function createItemList(){
    const itemList = document.createElement("ul");
    //Skapa en itemRow för varje objekt i listan och lägg in i itemList
    shoppingCart.forEach((item) => {
      const itemRow = createItemRow(item);
      itemList.appendChild(itemRow);
    });
    return itemList;
}

function createShoppingCart(){
  console.log("In createsShoppingCart");
    //1. Skapa listan
    const itemList = createItemList();
    //2. Räkna ut totalen
<<<<<<< HEAD
    const total = calculateTotal();
    const totalElement = document.createElement("p");
    totalElement.innerText = `Total cost: ${total}`;
    //3. Lägg till listan och totalen i elementet #shopping-cart
    const shoppingCartDiv = document.getElementById("shopping-cart");
    shoppingCartDiv.appendChild(itemList);
    shoppingCartDiv.appendChild(totalElement);
}

createShoppingCart();
=======
    //3. Lägg till listan och totalen i #shopping-cart
}
>>>>>>> 72c214ed819ea6e58a4e932879ef2841e36db2e4
