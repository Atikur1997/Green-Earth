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
        treenames.innerHTML = `<button class='ctg-btn btn hover:bg-[#15803d] hover:text-white mb-2 border-none bg-transparent' >${tree.category_name}</button>`

        treeList.appendChild(treenames)
    })

    const btns = document.querySelectorAll('.ctg-btn')

    btns.forEach(btn => {
        btn.addEventListener('click', () => {
            btns.forEach(btn => btn.classList.remove('active'))
            btn.classList.add('active')
        })

    })
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
<button class="btn bg-[#15803d] text-white rounded-2xl mx-auto w-[90%] mb-4">Add to Cart</button>
</div>
        `
        parentTrees.appendChild(card)
    })
}
// category section ends here
categories()
treeCards()