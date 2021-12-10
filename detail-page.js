

  window.onload = function(){
    const productId = new URLSearchParams(location.search).get("productId")
    console.log(productId)
    // const url = productId ? "https://striveschool-api.herokuapp.com/api/product/" + productId:"https://striveschool-api.herokuapp.com/api/product/"
    fetch("https://striveschool-api.herokuapp.com/api/product/" + productId, {
        headers: {
        "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MWIwYWU1OTRjZmY1ZjAwMTU5MGJkYWYiLCJpYXQiOjE2Mzg5Njg5MjIsImV4cCI6MTY0MDE3ODUyMn0.I62rqMBiig_57YNcK0VzC7hRA65djJbbJ_wdeyHseRc"
        }
    })
      .then(response => response.json())
      .then(products =>{
        let banner = document.querySelector(".banner")
        banner.src = products.imageUrl
        let productDetail = document.querySelector(".productDetail")
        productDetail.innerHTML = ""
        productDetail.innerHTML =`<ul class="list-group list-group-flush">
          <li class="list-group-item">Product Name : ${products.name}</li>
          <li class="list-group-item">Price :${products.price}</li>
          <li class="list-group-item"> Brand "${products.brand}</li>
          <li class="list-group-item">Description : ${products.description}</li>
          <li class="list-group-item"><a  href="back-office-page.html?productId=${productId}" class="btn btn-secondary" onclick="handleEdit(event)"  type="button">Edit</a></li>
        </ul>`
      })
      .catch(err =>console.log(err))
  }

