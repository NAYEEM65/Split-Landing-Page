const left = document.querySelector('.left');
const right = document.querySelector('.right');
const container = document.querySelector('.container');


left.addEventListener('mouseenter', () => {
    container.classList.add('hoverLeft')
});
left.addEventListener('mouseleave', () => {
    container.classList.remove('hoverLeft')
});

right.addEventListener('mouseenter', () => {
    container.classList.add('hoverRight')
});
right.addEventListener('mouseleave', () => {
    container.classList.remove('hoverRight')
});



//===Not working the code below ===

// handleEvent(left, 'hoverLeft');
// handleEvent(right, 'hoverRight');

// function handleEvent(position, 'hoverPosition'){
//     position.addEventListener('mouseenter', () => {
//     container.classList.add("hoverPosition")
// });
// position.addEventListener('mouseleave', () => {
//     container.classList.remove("hoverPosition")
// });
// }
