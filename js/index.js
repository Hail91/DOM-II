// Your code goes here

const navChange = document.querySelectorAll('nav a').
forEach(element => {
    element.addEventListener('mouseover', () => {
        element.style.transform = "scale(1.4)";
        element.style.transition = "all 0.4s";
        element.style.textDecoration = 'underline';
        element.style.color = 'slategray';
        element.style.textShadow = '1px 1px 2px gray, 0 0 25px slategray, 0 0 5px black';
    })
    element.addEventListener('mouseleave', () => {
        element.style.transform = "scale(1)";
        element.style.transition = "all 0.4s";
        element.style.textDecoration = 'none';
        element.style.color = 'black';
    })
})

const coolH2 = document.querySelectorAll('h2').
forEach(element => {
    element.addEventListener('click', () => {
        element.style.color = 'teal';
        element.style.transition = 'all 2s';
    })
    element.addEventListener('mouseover', () => {
        element.style.cursor = 'pointer';
    })
})

const topImg = document.querySelector('.intro img');

topImg.addEventListener('dblclick', () => {
    topImg.style.boxShadow = '10px 10px 5px slategray';
});
topImg.addEventListener('click', () => {
    topImg.style.boxShadow = '0 0 0';
})

const coolTxt = document.querySelectorAll('p'). 
forEach(element => {
    window.addEventListener('scroll', () => {
        element.style.textShadow = '1px 1px 2px gray, 0 0 25px slategray, 0 0 5px black';
        element.style.transition = 'all 2s';
    })
})

const rotateImg = document.querySelectorAll('.img-content').
forEach(element => {
    window.addEventListener('keydown', event => {
        if (event.isComposing || event.keyCode === 229) {
            return;
        }
        element.style.transform = 'rotateY(360deg)';
        element.style.transition = 'all 5s';
    })
    window.addEventListener('keyup', event => {
        if (event.isComposing || event.keyCode === 229) {
            return;
        }
        element.style.boxShadow = '10px 10px 5px slategray';
    })
});

const coolH4 = document.querySelectorAll('h4').
forEach(element => {
    element.addEventListener('mousedown', () => {
        element.style.textShadow = '1px 1px 2px gray, 0 0 25px slategray, 0 0 5px black';
        element.style.color = 'teal';
        element.style.transition = 'all 2s';
        element.style.cursor = 'pointer';
    })
    element.addEventListener('mouseup', () => {
        element.style.textShadow = '0 0 0';
        element.style.color = 'black';
        element.style.transition = 'all 2s';
        element.style.cursor = 'pointer';
    })
    event.stopPropagation();
});

const newBG = document.querySelector('body');

window.addEventListener('resize', (event) => {
    newBG.style.backgroundColor = 'darkslategray';
});




const scrollBG = document.querySelector('body');

window.addEventListener('scroll', () => {
    scrollBG.style.backgroundColor = 'gray';
});

const stopLinks = document.querySelector('.nav-link');
stopLinks.addEventListener('click', event => {
    console.log("stopped link");
    event.preventDefault();
})

















