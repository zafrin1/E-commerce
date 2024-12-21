 let hello = [
    {
        id:1,
        name:"CSS",
        image:"image.png",
        price:"1000",
        rating:5,
    },
    {
        id:2,
        name:"javascript",
        image:"image1.png",
        price:"1000",
        rating:5,
    },
    {
        id:3,
        name:"HTML",
        image:"image2.png",
        price:"1000",
        rating:5,
    },
    {
        id:4,
        name:"PHP",
        image:"image3.png",
        price:"1000",
        rating:5,
    },
    {
        id:5,
        name:"jQuery",
        image:"image4.png",
        price:"1000",
        rating:5,
    },
    {
        id:6,
        name:"Java",
        image:"image5.png",
        price:"5000",
        rating:5,
    },
 ];

const body= document.querySelector("body"),
products = document.querySelector(".products"),
shopping = document.querySelector(".shopping");
closeCart = document.querySelector(".close"),
productlist = document.querySelector(".productlist");
quantity = document.querySelector(".quantity");
total=document.querySelector(".totalprice")

  let checkOutList =[];

  shopping.onclick = () =>{
 body.classList.add("active");
  };
  closeCart.onclick = () =>{
   body.classList.remove("active");
    };

function hey (){
    hello.forEach((item,key) => {
        console.log(item)
        console.log(key)
      let div =document.createElement("div");
      div.classList.add("item");

  let star ="";
for ( i = 0; i < item.rating; i++){
    star += `<i class="fa fa-star" style="color:brown"></i>`;
}
    


      div.innerHTML = `
      <img src ="Image/${item.image}"/>
 <div class ="name">${item.name}</div>
 <div> ${star}</div>
 <div class="price"> <small> ${item.price}</small></div>
 <button onclick ="addToCart(${key})" style="background-color:black; color:white;  border-radius: 20px; height:20px; width:100px ;"><i class="fa fa-cart-plus"></i> Add To cart </button>

      `;
      products.appendChild(div);




        
    });
    
}
hey();
function addToCart(id){
if(checkOutList[id]  ==  null){
    checkOutList[id] = hello[id];
   checkOutList[id].quantity = 1;
}else{
    checkOutList[id].quantity +=1;
}
reloadCart();
}



// function reloadCart(){
//     productlist.innerHTML= "";
//     checkOutList.forEach((item,key) =>{
//         let li=document.createElement("li");
//         li.innerHTML=`
//         <imag> src ="image/${item.image}">
//         <div>${item.name}</div>
//          <div>${item.price}</div>`;

//          productlist.appendChild(li);
//     })
// }




function reloadCart(){
    productlist.innerHTML = "";
    let count = 0;
    let totalprice = 0;
    
    
    
checkOutList.forEach((item, key) => {
    totalprice += parseInt(item.price * item.quantity)
    count += item.quantity;
 let li = document.createElement("li");
 li.innerHTML=`
 <img src="image/${item.image}">  
 
 <div>${item.name}</div>
 <div>${item.price}</div>
<div>
<button onclick="changeQuantity(${key},${item.quantity - 1})">-</button>
 <div class="conut">${item.quantity}</div>
<button onclick="changeQuantity(${key},${item.quantity + 1})">+</button>

    </div>`;

        productlist.appendChild(li);
    });
   total.innerHTML = `<small>Subtotal (${count} items) tk </small>` + totalprice;
    quantity.innerHTML = count;
}
function changeQuantity(key,quantity){
    if(quantity == 0 ){
        delete checkOutList[key];
    }
    else{
        checkOutList[key].quantity = quantity;
    }
    reloadCart();
}