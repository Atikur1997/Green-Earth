// for category section starts here
const categories = () => {
    const url = "https://openapi.programming-hero.com/api/categories"
    fetch(url)
        .then(res => res.json())
        .then(data => displayCategories(data.categories))
}

const displayCategories = (categories) => {
    const treeList = document.getElementById('tree-list')
    treeList.innerHTML = `<button class='ctg-btn btn hover:bg-[#15803d] hover:text-white mb-2 border-none bg-transparent w-[70%] p-5' >All Trees</button>`

    categories.forEach(tree => {
        const treenames = document.createElement('div')
        treenames.innerHTML = `<button id=${tree.id} class='ctg-btn btn hover:bg-[#15803d] hover:text-white mb-2 border-none bg-transparent' >${tree.category_name}</button>`

        treeList.appendChild(treenames)
    })

    const btns = document.querySelectorAll('.ctg-btn')


    btns.forEach(btn => {
        btn.addEventListener('click', () => {
            btns.forEach(btn => btn.classList.remove('active'))
            btn.classList.add('active')
            if (btn.id) {
                showTrees(btn.id)


            } else {
                treeCards()
            }
        })

    })
}

const showTrees = (id) => {
    const url = `https://openapi.programming-hero.com/api/category/${id}`
    fetch(url)
        .then(res => res.json())
        .then(data => displayTressCards(data.plants))


}

const treeCards = () => {
    const url = "https://openapi.programming-hero.com/api/plants"
    fetch(url)
        .then(res => res.json())
        .then(data => displayTressCards(data.plants))
}

const displayTressCards = (trees) => {

    const parentTrees = document.getElementById('tree-cards')
    parentTrees.innerHTML = ''

    trees.forEach(tree => {
        const card = document.createElement('div')
        card.innerHTML = `
        <div class="card bg-base-100   shadow-sm mt-5">
  <figure class="h-[200px]">
    <img
      src="${tree.image}"
      alt="Shoes" class=rounded-md " />
  </figure>
  <div class="card-body">
    <h2 class="card-title">
      ${tree.name}
      
    </h2>
    <p class="line-clamp-2">${tree.description}</p>
    <div class="card-actions justify-between">
    <div class="badge bg-[#dcfce7] text-[#15803d] ">${tree.category}</div>
     
      <div class="badge badge-outline border-none hover:bg-green-600 hover:text-white cursor-pointer hover:py-3">\u09F3 ${tree.price}</div>
    </div>
  </div>
<button class="btn bg-[#15803d] text-white rounded-2xl mx-auto w-[90%] mb-4 add_to_cart"  >Add to Cart</button>
</div>
        `
        parentTrees.appendChild(card)

        const addbtn = card.querySelector(".add_to_cart")
        addbtn.addEventListener('click', () => {
            cartItems(tree)
        })
    })


}


// category section ends here





const cartItems = (trees) => {
    const cartList = document.getElementById('cartList')


    const cart = document.createElement('div')
    cart.innerHTML = `
  
                    <div id="cart-list" class="flex justify-between bg-[#f0fdf4] items-center p-5 rounded-lg mb-3">
                        <div>
                            <h3 class="font-bold text-sm">${trees.name}</h3>
                            <p><i class="fa-solid fa-bangladeshi-taka-sign"></i> ${trees.price} x 1</p>
                        </div>
                        <div class="cross">
                            <i class="fa-regular fa-circle-xmark cursor-pointer"></i>
                        </div>
                    </div>

                    
    `
    cartList.appendChild(cart)
    const total = document.getElementById('total')
    total.innerText = parseInt(total.innerText) + parseInt(trees.price)

    const cross = cart.querySelector('.cross')
    cross.addEventListener('click', () => {
        total.innerText = parseInt(total.innerText) - parseInt(trees.price)
        cart.remove()
    })



}

// cart section ends here




categories()
treeCards()