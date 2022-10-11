let product=[
    {id:1,brand:"redmi",model:"Note 10",price:14999,qty:1},
    {id:2,brand:"realme",model:"C35",price:11999,qty:1},
    {id:3,brand:"oppo",model:"K10",price:14990,qty:1},
    {id:4,brand:"oneplus",model:"Nord 2T 5G",price:33999,qty:1},
    {id:5,brand:"vivo",model:"T1 5G",price:15990,qty:1}
    ];


let display=document.getElementById("display");
let incmBtn=document.getElementById("increment");
let dicmBtn=document.getElementById("dicrement");


var addCart=[];

function myFunction(items){
    display.innerHTML="";

    items.forEach(function(product){
        let colm=document.createElement("div");
    colm.setAttribute("class","col-3");
    let card=document.createElement("div");
    card.setAttribute("class","card mt-4");
    colm.append(card);
    let cardBdy=document.createElement("div");
    cardBdy.setAttribute("class","card-body");
    card.append(cardBdy);
    
    let brand=document.createElement("h4");
    brand.innerText=product.brand;
    cardBdy.append(brand);
    let model=document.createElement("h4");
    model.innerText=product.model;
    cardBdy.append(model);
    let price=document.createElement("h4");
    price.innerText=product.price;
    cardBdy.append(price);
    
    let qty=document.createElement("span");
    qty.setAttribute("class","quantity")
    qty.innerText=product.qty;
    cardBdy.append(qty);
    
    display.append(colm);
    })
}


function adding(id){
    console.log(id);
    let temp=addCart.map(function(item){
        if(item.id === id){
           return{
            ...item,
            qty:item.qty+1,
           }
        }
        else return item;
    })
    addCart=temp;
    myFunction(temp);
    console.log("temp",temp);
}

function deleting(id){     

    const selectProduct=addCart.find(function(item){
        return item.id === id;
    })
    if(selectProduct){
        if(selectProduct.qty === 1){
            const temp=addCart.filter((item) => item.id !== id);
            console.log(temp);
            addCart=temp;
            myFunction(temp);

        }
        else{
            const temp=addCart.map((item) =>{
                if(item.id === id){
                    return {
                        ...item,
                        qty:item.qty-1,
                    }
                }
                else return item;
            });
            addCart=temp;
            myFunction(temp);
            console.log("temp",temp);
        }
    }
}
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
    myFunction(addCart);

}
let addingList=document.getElementById("suffer");

addingList.addEventListener("click",function(){
    let enterId=parseInt(prompt("enterId"));
    add(enterId);
})
incmBtn.addEventListener("click",function(){
    let num=parseInt(prompt("enterId"));
    adding(num);
    num="";
});
dicmBtn.addEventListener("click",function(){
    let num=parseInt(prompt("enterId"));
    deleting(num);
});