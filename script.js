let duration = 1000;
let blocksContainer = document.querySelector(".memory-game-blocks");
// creat array
let blocks = Array.from(blocksContainer.children);
// console.log(blocks);
// grtting the range of keys
let orderRange = Array.from(Array(blocks.length).keys());
// console.log(orderRange);

shuffle(orderRange);

// getting order prop.
blocks.forEach((block, index) => {
    block.style.order = orderRange[index];
console.log(block);
    block.addEventListener('click', function(evt) {
        block.classList.add('is-flipped');
        console.log(block);
    });  
});



//flip Block function

function flipBlock(selectedBlock) {
    
    selectedBlock.classlist.add('is-flipped');
}
//shuffle function

function shuffle(array) {

    let current = array.length,
    temp,
    random;

    while (current>0) {
        random = Math.floor(Math.random() * current);
        current --;
        console.log(random);
        // making the swaping
        temp = array[current];
        array[current] = array[random];
        array[random] = temp;
    }
    return array;
}












