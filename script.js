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
        console.log(tree.category_name);
        const treenames = document.createElement('div')
        treenames.innerHTML = `<button class='btn hover:bg-[#15803d] hover:text-white mb-2 border-none bg-transparent'>${tree.category_name}</button>`

        treeList.appendChild(treenames)
    })
}

categories()
// category section ends here