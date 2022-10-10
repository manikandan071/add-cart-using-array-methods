let product=[
    {id:1,brand:"redmi",model:"Note 10",price:15000,qty:1},
    {id:2,brand:"realme",model:"Note 10",price:15000,qty:1},
    {id:3,brand:"oppo",model:"Note 10",price:15000,qty:1},
    {id:4,brand:"oneplus",model:"Note 10",price:15000,qty:1},
    {id:5,brand:"vivo",model:"Note 10",price:15000,qty:1}
    ];



    // let select=adding.find(function(a){
    //     console.log(a);
    //     let check=addCart.find(function(b){
    //         console.log(b);
    //         if(a.id === b.id){
    //            return b.qty++;
    //            console.log("mani")
    //         }
    //         else{
    //             return addCart.push(a);
    //         }
    //     })
    // })
    // console.log(addCart);

let display=document.getElementById("display");

let addCart=[];

function add(id){


    var res=addCart.find(function(items){
        return items.id === id;
    });
    if(res){
        var temp=addCart.map(function(items){
            if(items.id === id){
                items.qty++;
                return items;
            }
            else{
                return items;
            }
        });
        addCart=temp;
    }
    else{
        var temp=product.find(function(items){
            if(items.id === id){
                return items;
            } 
        })
        addCart.push(temp);
    }
    console.log(addCart);
    // addCart.forEach(myFunction);
    myFunction(addCart);

}


// for (var i=1; i<=product.length; i++){
//     add(i);
// }
// add(3);
let addingList=document.getElementById("suffer");

addingList.addEventListener("click",function(){
    let enterId=parseInt(prompt("enterId"));

    add(enterId);
})

function dicreass(i){
    let getPrnt=this.parentNode.parentNode.parentNode;
    let qty=getPrnt.getElementsByClassName("quantity")[0]; 
    let num=parseInt(qty.innerText);
    if(1 < num){
        qty.innerText=num-1;
    }
    else{
        getPrnt.remove();
    }
}
function increment(j){
    let getPrnt=this.parentNode;
    let qty=getPrnt.getElementsByClassName("quantity")[0];
    let num=parseInt(qty.innerText);
    qty.innerText=num+1;
}


function myFunction(items){


    display.innerHTML="";

    for(var i=0; i<items.length; i++){

    let colm=document.createElement("div");
    colm.setAttribute("class","col-3");
    let card=document.createElement("div");
    card.setAttribute("class","card");
    colm.append(card);
    let cardBdy=document.createElement("div");
    cardBdy.setAttribute("class","card-body");
    card.append(cardBdy);
    let brand=document.createElement("h4");
    brand.innerText=items[i].brand;
    cardBdy.append(brand);
    let model=document.createElement("h4");
    model.innerText=items[i].model;
    cardBdy.append(model);
    let price=document.createElement("h4");
    price.innerText=items[i].price;
    cardBdy.append(price);
    
    let dicreses=document.createElement("button");
    dicreses.setAttribute("class","dicreses btn");
    let dicIcon=document.createElement("i");
    dicIcon.setAttribute("class","icofont-minus");
    dicreses.append(dicIcon);
    cardBdy.append(dicreses);
    let qty=document.createElement("span");
    qty.setAttribute("class","quantity")

    qty.innerText=items[i].qty;
    cardBdy.append(qty);
    let increase=document.createElement("button");
    increase.setAttribute("class","increase btn");
    let incIcon=document.createElement("i");
    incIcon.setAttribute("class","icofont-plus");
    increase.append(incIcon);
    cardBdy.append(increase);
    display.append(colm);
    }
    let dicreses=document.getElementsByClassName("dicreses");
    let increase=document.getElementsByClassName("increase");
    for (var i=0 ; i<dicreses.length ; i++){
        dicreses[i].addEventListener("click",dicreass);
    }
    for(var j=0; j < increase.length; j++){
        increase[j].addEventListener("click",increment);
}
}


