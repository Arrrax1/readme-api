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