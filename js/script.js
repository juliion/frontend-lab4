'use strict';

window.addEventListener('load', () => {
    const elem2 = document.getElementById('elem2');
    const selectors = document.querySelectorAll('p.elem3');
    const elem3 = selectors[0];
    let images = document.getElementById('images');
    const addBtn = document.getElementById('addBtn');
    const zoomInBtn = document.getElementById('zoomInBtn');
    const zoomOutBtn = document.getElementById('zoomOutBtn');
    const delBtn = document.getElementById('delBtn');

    elem2.addEventListener('click', () => {
        const color = elem2.style.color == 'black' ? 'pink' : 'black';
        const background = elem2.style.background == 'white' ? 'grey' : 'white';
        elem2.style.color = color;
        elem2.style.background = background;
    });

    elem3.addEventListener('click', () => {
        const color = elem3.style.color == 'black' ? 'grey' : 'black';
        const background = elem3.style.background == 'white' ? 'pink' : 'white';
        elem3.style.color = color;
        elem3.style.background = background;
    });

    let countImg = 1;
    addBtn.addEventListener('click', () => {
        if(countImg <= 10)
        {
            let newImg = document.createElement('img');
            newImg.src = `img/img${countImg}.jpg`;
            console.log(newImg.id);
            images.appendChild(newImg);
            countImg++;
        }
    });

    zoomInBtn.addEventListener('click', () => {
        const imagesSelectors = document.querySelectorAll('img');
        let lastImg = imagesSelectors[imagesSelectors.length - 1];
        let newWidth = lastImg.clientWidth + 100;
        lastImg.style.width = `${newWidth}px`;
    });

    zoomOutBtn.addEventListener('click', () => {
        const imagesSelectors = document.querySelectorAll('img');
        let lastImg = imagesSelectors[imagesSelectors.length - 1];
        let newWidth = lastImg.clientWidth - 100;
        lastImg.style.width = `${newWidth}px`;
    });

    delBtn.addEventListener('click', () => {
        const imagesSelectors = document.querySelectorAll('img');
        imagesSelectors[imagesSelectors.length - 1].remove();
        countImg--;
    });

});