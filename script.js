// for category section starts here
const categories = () => {
    const url = "https://openapi.programming-hero.com/api/categories"
    fetch(url)
        .then(res => res.json())
        .then(data => displayCategories(data.categories))
}

const displayCategories = (categories) => {
    const treeList = document.getElementById('tree-list')
    treeList.innerHTML = ""

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



categories()
// category section ends here