document.querySelectorAll('.title-wrapper').forEach((title) => {
    title.addEventListener('click', (e) => {
        let element = e.target.parentNode;
        const computedHeight = window.getComputedStyle(element).height
        const contentHeight = element.scrollHeight;
        if (computedHeight === '40px') {
            // Expand the element to fit the content
            element.style.height = contentHeight + 'px';
            e.target.children[0].style.transform = 'rotateZ(90deg)'
        } else {
            // Collapse the element back to the initial fixed height
            element.style.height = '40px';
            e.target.children[0].style.transform = 'rotateZ(0)'
        }
    })
})

document.querySelectorAll('.query-input').forEach((el)=>{
    el.addEventListener('input',(e)=>{
        let parent = e.target.parentNode.parentNode.parentNode
        // let input = e.target
        // let queryParamName = input.id
        // let queryParamValue = input.value
        updateQuery(parent)
    })
})

function updateQuery(targetQueryParent) {
    let query=[`https://readmestats.onrender.com/${targetQueryParent.id}?`]
    for(const node of targetQueryParent.children[1].children){
        if(node.classList.contains('params')){
           if(node.children[1].value.split(" ").join('') != '') query.push(`&${node.children[1].id}=${node.children[1].value}`)
        }
    }
    targetQueryParent.children[2].children[0].value=query.join('')
}