const wrapper = document.getElementById("wrapper");
const searchInputElement = document.getElementById("product-search");

async function fetchProducts(value=''){
  const response= await fetch(`http://localhost:3000/api/products?searchstr=${value}`)
   const data= await response.json();
   renderProducts(data)
}

function renderProducts(products){
wrapper.innerHTML=(JSON.stringify(products.map((p)=>p.name)))

}

let id;

searchInputElement.addEventListener('keyup',(e)=>{
    clearTimeout(id);
     id= setTimeout(() => {
        fetchProducts(e.target.value);
    },4000);
    console.log(id);
})

fetchProducts()
