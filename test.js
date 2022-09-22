let productNameInput = document.getElementById("productName");
let productPriceInput = document.getElementById("productPrice");
let productCategoryInput = document.getElementById("productCategory");
let productDesriptionInput = document.getElementById("productDesription");




var productList ;
if(localStorage.getItem("theproducts")==null){
    productList =[];
}
else{
    productList = JSON.parse(localStorage.getItem("theproducts"));
    displayProduct();
}


function addproduct(){
    var product = {
        name : productNameInput.value,
        price : productPriceInput.value,
        category : productCategoryInput.value,
        desc : productDesriptionInput.value
    };
    productList.push(product);
    console.log(productList);
    localStorage.setItem("theproducts",JSON.stringify(productList));
    displayProduct();
    clearForm();
}

function displayProduct(){
    var holder ="";
    for(var i =0;i<productList.length;i++){
        holder+= `<tr><td>${i}</td><td>${productList[i].name}</td><td>${productList[i].price}</td><td>${productList[i].category}</td><td>${productList[i].desc}</td><td><button class="btn btn-warning">update</button></td><td><button class="btn btn-danger">delete</button></td></tr>`
    }
    document.getElementById("tbod").innerHTML = holder;
};
function clearForm(){
    productNameInput.value ="";
    productPriceInput.value ="";
    productCategoryInput.value="";
    productDesriptionInput.value="";
};
function updateProduct(){

};
function deleteProduct(){

};
