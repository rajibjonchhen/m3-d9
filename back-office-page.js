
       
         
          const productId = new URLSearchParams(window.location.search).get("productId")
          const url = productId? "https://striveschool-api.herokuapp.com/api/product/" + productId: "https://striveschool-api.herokuapp.com/api/product/"
          const method = productId? "PUT":"POST"
          const deleteBtn = document.getElementById("deleteBtn")
         
          console.log(productId)
          console.log(deleteBtn)
         


          const handlePostSubmit = function(event){
            event.preventDefault()
            let form = document.querySelector("form")
            form.classList.add("validated")
            const newProduct = {
                name: document.getElementById("name").value,
                description: document.getElementById("description").value,
                brand: document.getElementById("brand").value,
                price: document.getElementById("price").value,
                imageUrl: document.getElementById("image").value
            }
            console.log(url)
          
            fetch(url, {
                method,
                body:JSON.stringify(newProduct),
                headers: {
                'Content-Type': 'application/json',
                "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MWIwYWU1OTRjZmY1ZjAwMTU5MGJkYWYiLCJpYXQiOjE2Mzg5Njg5MjIsImV4cCI6MTY0MDE3ODUyMn0.I62rqMBiig_57YNcK0VzC7hRA65djJbbJ_wdeyHseRc"
                }
            })
            .then(response => response.json())
            .then(jsonData=>{
              setTimeout( alertBox("Successfully posted new product","success"),3000)
              window.location.assign("/")
            })
             
            .catch(err=>{
                alertBox(err,"danger")
            })
        }

          const handleDelete = async function(){
            confirm(`Do you want to delete product with id ${productId}?`)
            if(confirm){
              fetch(url, {
                method:"DELETE",
            headers: {
            "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MWIwYWU1OTRjZmY1ZjAwMTU5MGJkYWYiLCJpYXQiOjE2Mzg5Njg5MjIsImV4cCI6MTY0MDE3ODUyMn0.I62rqMBiig_57YNcK0VzC7hRA65djJbbJ_wdeyHseRc"
            }
          })
          window.location.assign("/")
            }

          }
    
      


          
        
          
        
        window.onload = function(){
          if(productId){
            deleteBtn.style.display = "block"
            document.querySelector(".h4").innerText = "-Edit Mode"
            fetch(url, {
              method,
          headers: {
          "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MWIwYWU1OTRjZmY1ZjAwMTU5MGJkYWYiLCJpYXQiOjE2Mzg5Njg5MjIsImV4cCI6MTY0MDE3ODUyMn0.I62rqMBiig_57YNcK0VzC7hRA65djJbbJ_wdeyHseRc"
          }
      })
      .then(response => response.json())
      .then(products =>{
        document.getElementById("name").value =products.name
        document.getElementById("description").value =products.description
        document.getElementById("brand").value =products.brand
        document.getElementById("price").value =products.price
        document.getElementById("image").value =products.imageUrl
      }).catch(err => alertBox(err,"danger"))

        
          }
        }


const alertBox = function(msg,color){
  let alertBox = document.querySelector("#alertBox")
  alertBox.innerHTML =""
  alertBox.classList.add (`bg-${color}`)
  alertBox.innerHTML =`${msg}`
  }
  
  