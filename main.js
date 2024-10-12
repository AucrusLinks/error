
const header = document.querySelector("header")



window.addEventListener("scroll",function(){
    header.classList.toggle( "sticky" , window.scrollY > 0);
});


var menu = document.querySelector("#menu-icon");
var navber = document.querySelector(".nav-bar");

function toggle(){
    menu.classList.toggle("bx-x");
    navber.classList.toggle('open');
}

let openshop = document.querySelector(".shoping")
let closeshop = document.querySelector(".closeshopping")
let list = document.querySelector(".list")
let listcard = document.querySelector(".listcart")
let body = document.querySelector("body")
let total = document.querySelector(".total")
let quantity = document.querySelector(".quantity")
let cart = document.querySelector(".cart")

openshop.addEventListener("click",()=>{
    cart.style.top = '0'
})

closeshop.addEventListener("click",()=>{
    cart.style.top = '-200%'
})

let products = [
    {
        id:1,
        name:"Black Rice",
        image:'img/products/black rice.png',
        price: 1200
    },
    {
        id:2,
        name:"Idly Podi",
        image:'img/products/idly podi.png',
        price: 1200
    },
    {
        id:3,
        name:"Millet Dosa mix",
        image:'img/products/millet dosa mix.png',
        price: 1200
    },
    {
        id:4,
        name:"Multi Millet Magic mix",
        image:'img/products/multi millet magic mix.png',
        price: 1200
    },
    {
        id:5,
        name:"Parupu Podi",
        image:'img/products/parupu podi.png',
        price: 1200
    },
    {
        id:6,
        name:"Sprouted Mix",
        image:'img/products/sprouted mix.png',
        price: 1200
    }
];

let listcards = [];
 function initapp(){
    products.forEach((value, key)=>{
        let newdiv = document.createElement('div');
        newdiv.classList.add("item");
        newdiv.innerHTML = `
        <img src="${value.image}" />
        <div class="title"> ${value.name}</div>
        <div class="price"> ${value.price}</div>
        <button onclick="addtocart(${key})">Add To Cart</button>
        `;
        list.appendChild(newdiv);
    })
 }



 initapp();

 function addtocart(key){
    if(listcards[key] == null){
        listcards[key] = products[key]
        listcards[key].quantity = 1
    }
    reloadcard();
 }

 function reloadcard(){
    listcard.innerHTML = ''
    let count = 0
    let totalprice = 0
    listcards.forEach((value, key)=>{
        totalprice = totalprice + value.price
        count = count + value.quantity


        if(value != null){
            let newDiv = document.createElement('li');
            newDiv.innerHTML = `
                <div><img src="${value.image}"></div>
                <div>${value.name}</div>
                <div>${value.price}</div>
                <div>
                    <button onclick="changequantity(${key}, ${value.quantity - 1})">-</button>
                    <div class="count">${value.quantity}</div>
                    <button onclick="changequantity(${key}, ${value.quantity + 1})">+</button>
                </div>
            `
        listcard.appendChild(newDiv);
        }

    })
    total.innerHTML = totalprice;
    quantity.innerText = count;
 }

 function changequantity(key, quantity){
    if (quantity == 0){
        delete listcards[key];
    }
    else{
        listcards[key].quantity = quantity;
        listcards[key].price = quantity * products[1].price;
    }
    reloadcard();
 }