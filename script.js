let duration = 1000;
let blocksContainer = document.querySelector(".memory-game-blocks");
// creat array
let blocks = Array.from(blocksContainer.children);
// console.log(blocks);
// grtting the range of keys
let orderRange = [...Array(blocks.length).keys()];
// console.log(orderRange);


// getting order prop.
blocks.forEach((block, index) => {
    block.Style.order = testOrderRange[index];
});
console.log(blocks)
