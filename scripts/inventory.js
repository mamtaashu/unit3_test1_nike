let data=JSON.parse(localStorage.getItem("data"))

console.log(data)


displaydata(data)


function displaydata(data)
{

    document.querySelector("#products_data").innerHTML="";


    data.forEach((element,index) => {

        var container=document.createElement("div")
        container.setAttribute("class","box")
          


        let image=document.createElement("img")
        image.src=element.image
        image.setAttribute("class","image")


        let name=document.createElement("p")
        name.innerText=element.product;
        name.setAttribute("class","name")

        let price=document.createElement("p")
        price.innerText=element.price;
        price.setAttribute("class","price")

        let brand=document.createElement("p")
        brand.innerText=element.name
        brand.setAttribute("class","brand")

        let remove=document.createElement("button")
        remove.innerText="remove";
        remove.setAttribute("class","remove")
        remove.addEventListener("click",function()
        {
            deleterow(element,index)
        })


        container.append(image,name,price,brand,remove);
        document.querySelector("#products_data").append(container)

    });
}


function deleterow(element,index)
{
data.splice(index,1)
localStorage.setItem("data",JSON.stringify(data))
window.location.reload()
}