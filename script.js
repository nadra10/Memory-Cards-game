document.querySelector('.control-buttons span').onclick =function() {
    let yourName = prompt(" What's your name? Don't worry, we won't tell the aliens?");
    // console.log(yourName);
if (yourName == null || yourName == "") {
    document.querySelector('.name span').innerHTML = "unknown";
} else {
    document.querySelector('.name span').innerHTML = yourName;
}

document.querySelector('.control-buttons').remove();
}

// volume Slider




// timer




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
// console.log(block);
    block.addEventListener('click', function() {
        flipBlock(block);
        // console.log(block);
    });  
});



//flip Block function

function flipBlock(selectedBlock) {
    
    selectedBlock.classList.add('is-flipped');
  // Collect All Flipped Cards
  let allFlippedBlocks = blocks.filter(flippedBlock => flippedBlock.classList.contains('is-flipped'));

  // If Theres Two Selected Blocks
  if (allFlippedBlocks.length === 2) {

    console.log('Two Flipped Blocks Selected');

    stopClicking();
    // check Matching Function
checkMatchedBlocks(allFlippedBlocks[0], allFlippedBlocks[1]);
}

}



function stopClicking(){
    blocksContainer.classList.add('no-clicking');

    setTimeout(() => {
        blocksContainer.classList.remove('no-clicking');
    }, duration);
}

// check Matched
function checkMatchedBlocks(firstBlock, secondBlock) {
    let triesElement = document.querySelector('.tries span');

    if (firstBlock.dataset.technology === secondBlock.dataset.technology) {
        firstBlock.classList.remove('is-flipped');
        secondBlock.classList.remove('is-flipped');

        firstBlock.classList.add('has-match');
        secondBlock.classList.add('has-match');

        document.getElementById('success').play();

    
    } else {
        triesElement.innerHTML = parseInt(triesElement.innerHTML) + 1;
        
        setTimeout(() => {
            firstBlock.classList.remove('is-flipped');
            secondBlock.classList.remove('is-flipped');

        }, duration);

        document.getElementById('Wrong').play();

    }
}
//shuffle function

function shuffle(array) {

    let current = array.length,
    temp,
    random;

    while (current>0) {
        random = Math.floor(Math.random() * current);
        current --;
        // console.log(random);
        // making the swaping
        temp = array[current];
        array[current] = array[random];
        array[random] = temp;
    }
    return array;
}












