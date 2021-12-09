
const handlePostSubmit = function(event){
    event.preventDefault()
    const newProduct = {
        name: document.getElementById("name").value,
        description: document.getElementById("description").value,
        brand: document.getElementById("brand").value,
        price: document.getElementById("price").value,
        imageUrl: document.getElementById("image").value
    }

    console.log(newProduct.name)
    fetch("https://striveschool-api.herokuapp.com/api/product/", {
        method:"POST",
        body:JSON.stringify(newProduct),
        headers: {
        'Content-Type': 'application/json',
        Authorization: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MWIwYWU1OTRjZmY1ZjAwMTU5MGJkYWYiLCJpYXQiOjE2Mzg5Njg5MjIsImV4cCI6MTY0MDE3ODUyMn0.I62rqMBiig_57YNcK0VzC7hRA65djJbbJ_wdeyHseRc"
        }
    })
    .then(response => response.json())
    .then(jsonData=>{
    })
     
    .catch(err=>{
        console.error(err)
    })
}



const searchWith = function(event){
    event.preventDefault()
    fetch("https://striveschool-api.herokuapp.com/api/product/", {
        headers: {
        "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MWIwYWU1OTRjZmY1ZjAwMTU5MGJkYWYiLCJpYXQiOjE2Mzg5Njg5MjIsImV4cCI6MTY0MDE3ODUyMn0.I62rqMBiig_57YNcK0VzC7hRA65djJbbJ_wdeyHseRc"
        }
    })
    .then(res=> res.json())
    .then(products=>{

        let searchInput = event.target.value
        let selectedFilter= document.getElementById("selectFilter").value
        console.log(searchInput)
        console.log(selectedFilter)
        console.log(products)
        // const filteredData = (users.filter((user)=> user[category].toLowerCase().includes(userInput.toLowerCase())))
        const filteredItems = (products.filter((product)=> product[selectedFilter].toLowerCase().includes(searchInput.toLowerCase())))
        // console.log(filteredItems)

        displayProducts(filteredItems)
 
})
.catch(err=>{
    console.error(err)
})
}


const loadProducts = function(){
   
    fetch("https://striveschool-api.herokuapp.com/api/product/", {
        headers: {
        "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MWIwYWU1OTRjZmY1ZjAwMTU5MGJkYWYiLCJpYXQiOjE2Mzg5Njg5MjIsImV4cCI6MTY0MDE3ODUyMn0.I62rqMBiig_57YNcK0VzC7hRA65djJbbJ_wdeyHseRc"
        }
    })
    .then(response => response.json())
    .then(jsonData =>{
            let items = jsonData
            displayProducts(items)
    } )
    .catch(err=>{
        console.log(err)
        displayProducts(err)
    })
}

const displayProducts = function(items){

    let displayCards = document.getElementById("displayCards")
    items.reverse().forEach(item =>{
           displayCards.innerHTML +=`<div class="col-12 col-sm-6 col-lg-4 col-xl-3">
            <div class="card" style="width: 18rem;">
  <img src="${item.imageUrl}" class="card-img-top" alt="...">
  <div class="card-body">
    <h5 class="card-title">Product Name :${item.name}</h5>   
    <p class="card-text">User Id : ${item._id}</p>
    <p class="card-text"> Brand : ${item.brand}</p>
    <p class="card-text"> Price : ${item.price}</p>
    <p class="card-text"> Info : ${item.description}</p>
    <a href="detail.html?id=${item._id}" class="btn btn-primary">Detail </a>
  </div>
  </div>
</div>`
})
}

loadProducts()

window.onload = function(){



}
