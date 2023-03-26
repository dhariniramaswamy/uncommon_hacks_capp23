const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");

hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
})

document.querySelectorAll(".nav-link").forEach(n => n.addEventListener("click", () => {
    hamburger.classList.remove("active");
    navMenu.classList.remove("active");
}))

// initalize array to hold the user's order
const beverageOrder = []

// event listeners on base beverage choices
const item1 = document.querySelector("#item-1")
item1.addEventListener("click", sweetener)

const item2 = document.querySelector("#item-2")
item2.addEventListener("click", sweetener)

const item3 = document.querySelector("#item-3")
item3.addEventListener("click", sweetener)

// update sweetener menu choices
function sweetener(e) {
    selection = e.target.className
    order = document.getElementById('order')
    
    // updates order section with base beverage
    if (selection !== ""){
        const firstOrder = document.createElement('img')
        if (selection == "black-coffee"){
            firstOrder.src = "https://static.vecteezy.com/system/resources/previews/009/307/068/original/black-coffee-in-a-cup-on-transparent-background-file-png.png"
            firstOrder.classList.add("pic")
            order.appendChild(firstOrder)
            beverageOrder.push("coffee")
            // TODO: add counter HERE
        } else if (selection == "chocolate"){
            firstOrder.src = "https://images.pngnice.com/download/2007/Hot-Chocolate-PNG-Photo.png"
            firstOrder.classList.add("pic")
            order.appendChild(firstOrder)
            beverageOrder.push("hot chocolate")
            // TODO: add counter HERE
        } else if (selection == "tea"){
            firstOrder.src = "https://www.pngall.com/wp-content/uploads/2016/04/Tea-Transparent.png" 
            firstOrder.classList.add("pic")
            order.appendChild(firstOrder)
            beverageOrder.push("tea")
            // TODO: add counter HERE
        }
    } 
    console.log("my array", beverageOrder)
    
    // render sweetener options
    const item1 = document.getElementById('item-1')
    item1.addEventListener("click", milk)
    item1.innerHTML = "Honey"
    const honey = document.createElement('img');
    honey.src = 'https://freepngimg.com/thumb/grocery/41884-1-jar-of-honey-png-file-hd.png'
    honey.classList.add("honey")
    item1.appendChild(honey);

    const item2 = document.getElementById('item-2')
    item2.addEventListener("click", milk)
    item2.innerHTML = "Stevia"
    const stevia = document.createElement('img');
    stevia.src = 'https://www.splenda.ca/wp-content/uploads/2020/04/Splenda_Stevia_Cloud_CAN_819.png'
    stevia.classList.add("stevia")
    item2.appendChild(stevia);

    const item3 = document.getElementById('item-3')
    item3.addEventListener("click", milk)
    item3.innerHTML = "Sugar cane"
    const cane = document.createElement('img');
    cane.src = 'https://cdn.shopify.com/s/files/1/0019/0447/6220/files/sugar_06d6f2b6-4709-4082-bef5-31fc9cbbc032.png?17670198977603100836'
    cane.classList.add("cane")
    item3.appendChild(cane);

}

// update type of milk menu choices
function milk(e) {
    selection = e.target.className
    console.log("my selection", selection)
    order = document.getElementById('order')

    // updates order section with sweetener
    if (selection !== ""){
        const firstOrder = document.createElement('img')
        if (selection == "honey"){
            firstOrder.src = "https://freepngimg.com/thumb/grocery/41884-1-jar-of-honey-png-file-hd.png"
            firstOrder.classList.add("pic")
            order.appendChild(firstOrder)
            beverageOrder.push("honey")
            // TODO: add counter HERE
        } else if (selection == "stevia"){
            firstOrder.src = "https://www.splenda.ca/wp-content/uploads/2020/04/Splenda_Stevia_Cloud_CAN_819.png"
            firstOrder.classList.add("pic")
            order.appendChild(firstOrder)
            beverageOrder.push("stevia")
            // TODO: add counter HERE
        } else if (selection == "cane"){
            firstOrder.src = "https://cdn.shopify.com/s/files/1/0019/0447/6220/files/sugar_06d6f2b6-4709-4082-bef5-31fc9cbbc032.png?17670198977603100836" 
            firstOrder.classList.add("pic")
            order.appendChild(firstOrder) 
            beverageOrder.push("cane sugar")
            // TODO: add counter HERE
        } 
    }

    console.log("my array", beverageOrder)

    // render type of milk options
    const item1 = document.getElementById('item-1')
    item1.addEventListener("click", bevResult)
    item1.innerHTML = "Oat milk"
    const oat = document.createElement('img');
    oat.src = 'http://surefoodsliving.com/wp-content/uploads/2020/03/silk-plain-oatmilk.png'
    oat.classList.add("oat")
    item1.appendChild(oat);

    const item2 = document.getElementById('item-2')
    item2.addEventListener("click", bevResult)
    item2.innerHTML = "Cow milk"
    const cow = document.createElement('img');
    cow.src = 'https://images.vexels.com/media/users/3/260362/isolated/preview/7b94d8e2f9f68c8ae73bc707a69825cd-milk-carton-with-cow-cut-out.png'
    cow.classList.add("cow")
    item2.appendChild(cow);

    const item3 = document.getElementById('item-3')
    item3.addEventListener("click", bevResult)
    item3.innerHTML = "Almond milk"
    const almond = document.createElement('img');
    almond.src = 'https://cdn-icons-png.flaticon.com/512/2033/2033298.png'
    almond.classList.add("almond")
    item3.appendChild(almond);
}

// final beverage order
function bevResult(e) {
    selection = e.target.className
    console.log("my selection", selection)
    order = document.getElementById('order')
    let children = order.children
    length = children.length

    // updates order section with type of milk
    if (length <4){
        if (selection !== ""){
            const firstOrder = document.createElement('img')
            if (selection == "oat"){
                firstOrder.src = "http://surefoodsliving.com/wp-content/uploads/2020/03/silk-plain-oatmilk.png"
                firstOrder.classList.add("pic")
                order.appendChild(firstOrder)
                beverageOrder.push("oat milk")
                // TODO: add counter HERE
            } else if (selection == "cow"){
                firstOrder.src = "https://images.vexels.com/media/users/3/260362/isolated/preview/7b94d8e2f9f68c8ae73bc707a69825cd-milk-carton-with-cow-cut-out.png"
                firstOrder.classList.add("pic")
                order.appendChild(firstOrder)
                beverageOrder.push("cow milk")
                // TODO: add counter HERE
            } else if (selection == "almond"){
                firstOrder.src = "https://cdn-icons-png.flaticon.com/512/2033/2033298.png"  
                firstOrder.classList.add("pic")
                order.appendChild(firstOrder)
                beverageOrder.push("almond milk")
                // TODO: add counter HERE
            }
            // add Next button
            // TODO: update listener on Next button to lead to pop-up
            let next = document.createElement('button')
            next.innerHTML = "Next"
            next.classList.add("next")
            order.appendChild(next)
            next.addEventListener("click", food)
        }
        console.log("my array", beverageOrder)

    } 
}

// update menu to display food choices
function food() {
    menu = document.getElementById('menu-title')
    menu.innerHTML = "Select your food"

    // empty order section and reinsert order title
    order.innerHTML = ''
    orderTitle = document.createElement('h1')
    orderTitle.innerHTML = "Your order"
    order.appendChild(orderTitle)
    
    // include beverage in order section
    console.log("----------", beverageOrder)
    const firstOrder = document.createElement('img')
    if (beverageOrder[0] == "coffee"){
        console.log("YEEEEE")
        firstOrder.src = "https://static.vecteezy.com/system/resources/previews/009/307/068/original/black-coffee-in-a-cup-on-transparent-background-file-png.png"
        firstOrder.classList.add("pic")
        order.appendChild(firstOrder)
    } else if (beverageOrder[0] == "hot chocolate"){
        firstOrder.src = "https://images.pngnice.com/download/2007/Hot-Chocolate-PNG-Photo.png"
        firstOrder.classList.add("pic")
        order.appendChild(firstOrder)
    } else if (beverageOrder[0] == "tea"){
        firstOrder.src = "https://www.pngall.com/wp-content/uploads/2016/04/Tea-Transparent.png" 
            firstOrder.classList.add("pic")
            order.appendChild(firstOrder)
    }

    // render food options
    const item1 = document.getElementById('item-1')
    item1.addEventListener("click", addFood)
    item1.innerHTML = "Bagel and Salmon"
    const bagel = document.createElement('img');
    bagel.src = 'https://cutewallpaper.org/24/bagel-png/full-bagel-breakfast-and-lunch-menus-nyack-hot-bagels.png'
    bagel.classList.add("bagel")
    item1.appendChild(bagel);

    const item2 = document.getElementById('item-2')
    item2.addEventListener("click", addFood)
    item2.innerHTML = "Roast beef sandwich"
    const beef = document.createElement('img');
    beef.src = 'https://countrystyle.com/wp-content/uploads/2016/11/LUNCH-CIABATTAroastbeef.png'
    beef.classList.add("beef")
    item2.appendChild(beef);

    const item3 = document.getElementById('item-3')
    item3.addEventListener("click", addFood)
    item3.innerHTML = "Grilled cheese"
    const cheese = document.createElement('img');
    cheese.src = 'https://freepngimg.com/download/sandwich/159351-grilled-cheese-sandwich-free-png-hq.png'
    cheese.classList.add("cheese")
    item3.appendChild(cheese);
}

function addFood(e) {
    selection = e.target.className
    console.log("my selection", selection)
    order = document.getElementById('order')
    
    if (selection !== ""){
        const firstOrder = document.createElement('img')
        if (selection == "bagel"){
            firstOrder.src = "https://cutewallpaper.org/24/bagel-png/full-bagel-breakfast-and-lunch-menus-nyack-hot-bagels.png"
            firstOrder.classList.add("pic")
            order.appendChild(firstOrder)
            beverageOrder.push("bagel sandwich")
            // TODO: add counter HERE
        } else if (selection == "chocolate"){
            firstOrder.src = "https://images.pngnice.com/download/2007/Hot-Chocolate-PNG-Photo.png"
            firstOrder.classList.add("pic")
            order.appendChild(firstOrder)
            beverageOrder.push("hot chocolate")
            // TODO: add counter HERE
        } else if (selection == "tea"){
            firstOrder.src = "https://www.pngall.com/wp-content/uploads/2016/04/Tea-Transparent.png" 
            firstOrder.classList.add("pic")
            order.appendChild(firstOrder)
            beverageOrder.push("tea")
            // TODO: add counter HERE
        }
    } 
    console.log("my array", beverageOrder)

}




// Start Order Redirect Button
function enterOrderPage () {
    console.log("Leaving home page, and redirecting to order page.");
    window.location.href = "index.html";
}


// Subtract from Wallet Functionality
var wallet = 2000;

document.getElementById('co2-deplete-wallet-button').addEventListener('click', function () {
    subtractWallet();
});

function subtractWallet () {
    wallet--;
    var results = document.getElementById('co2counter');
    results.innerHTML = 'eCO<sub>2</sub> Wallet: ' + wallet;
}


// Results Redirect Button
function enterResultsPage () {
    console.log("Leaving order page, and redirecting to results page.");
    window.location.href = "results.html";
}