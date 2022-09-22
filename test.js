let productNameInput = document.getElementById("productName");
let productPriceInput = document.getElementById("productPrice");
let productCategoryInput = document.getElementById("productCategory");
let productDesriptionInput = document.getElementById("productDesription");




var productList = [];


function addproduct(){
    var product = {
        name : productNameInput.value,
        price : productPriceInput.value,
        category : productCategoryInput.value,
        desc : productDesriptionInput.value
    };
    productList.push(product);
    console.log(productList);
    displayProduct();
    clearForm();
}

function displayProduct(){
    var holder ="";
    for(var i =0;i<productList.length;i++){
        holder+= `<tr><td>${i}</td><td>${productList[i].name}</td><td>${productList[i].price}</td><td>${productList[i].category}</td><td>${productList[i].desc}</td><td>update</td><td>delete</td></tr>`
    }
    document.getElementById("tbod").innerHTML = holder;
};
function clearForm(){
    productNameInput.value ="";
    productPriceInput.value ="";
    productCategoryInput.value="";
    productDesriptionInput.value="";
}