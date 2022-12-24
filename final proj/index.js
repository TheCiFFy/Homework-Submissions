var promise = fetch ("https://6381e5a89842ca8d3c9bfb85.mockapi.io/test");
var itemPicked = [];
var arrProduct;
function renderRate(rate){
    var htmlString = ""
    for (var index = 0; index < rate; index++){
        htmlString += `<i class="bi-star-fill"></i>`
    }
    return htmlString
}
function addItem(id){
 var selectedItem = arrProduct.find((item) => item.id == id);
    itemPicked.push(selectedItem);
    document.getElementById("myCart").innerHTML = itemPicked.length;
}

promise.then(function(response){
    return response.json()
}).then(function(test){


    console.log(test)
    arrProduct = test;
    var htmlString = '';
    for(let index = 0; index < test.length; index++){
        var rateHTMLString = renderRate(test[index].rate)
    htmlString += `
    <div class="col mb-5">
    <div class="card h-100">
        <!-- Product image-->
        <img class="card-img-top" src="${test[index].img}" alt="..." />
        <!-- Product details-->
        <div class="card-body p-4">
            <div class="text-center">
                <!-- Product name-->
                <h5 class="fw-bolder">${test[index].name}</h5>
                <!-- Product reviews-->
                ${rateHTMLString}
                <!-- Product price-->
                $${test[index].price}
            </div>
        </div>
        <!-- Product actions-->
        <div class="card-footer p-4 pt-0 border-top-0 bg-transparent">
            <div class="text-center w-100">
                <span class = "btn btn-outline-dark mt auto"> View options</span>
            </div>
            <div class="text-center w-100" onclick="addItem(${test[index].id})">
                <span class = "btn btn-outline-dark mt auto">Add to cart</span>
            </div>
        </div>
    </div>
</div>
    `
    }
    document.getElementById("list").innerHTML = htmlString;
})