




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

        // displayProducts(filteredItems)
 
})
.catch(err=>{
    alert(err)
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
        alert(err)
       
    })
}

const displayProducts = function(items){

    let displayCards = document.getElementById("displayCards")
    displayCards.innerHTML=""
    console.log(items)
    if(items){
        items.reverse().forEach(item =>{
               displayCards.innerHTML +=`<div class="col-12 col-sm-6 col-lg-4 col-xl-3 mt-4">
                <div class="card">
                <div class="front-img-containter p-2">
                <img src="${item.imageUrl}" class="card-img-top" alt="Picture of ${item.name}">
                </div>
                
                <div class="card-body">
                    <h5 class="card-title bg-warning p-1 text-center text-white">Product Detail</h5>   
                    <p> Product : ${item.name}</p>
                    <p> Brand : ${item.brand}</p>
                    <p> Price : ${item.price}</p>
                    <p> Info : ${item.description}</p>
                    <p>User Id : <br/> <small>${item._id}</small></p>
                    <a href="detail-page.html?productId=${item._id}" class="btn btn-primary">Detail </a>
                </div>
                </div>
                </div>`
            })
    }
}






 window.onload = function(){
   loadProducts()


 }
