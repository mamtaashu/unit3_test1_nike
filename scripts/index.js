//store the products array in localstorage as "data"
var arr=JSON.parse(localStorage.getItem("data")) || []
// var arr=[]
document.querySelector("#submit").addEventListener("click",myfunction)


function myfunction()
{
    var obj={

        name:document.querySelector("#product_brand").value,
        product:document.querySelector("#product_name").value,
        price:document.querySelector("#product_price").value,
        image:document.querySelector("#product_image").value,
        

    }
    arr.push(obj)
    console.log(arr)
    localStorage.setItem("data",JSON.stringify(arr))
}




