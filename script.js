const purchaseBanana = document.getElementById("bananaButton");
const bananaPurchasedText = document.getElementById("bananaPurchased");
const magicButton = document.getElementById("magicwowzers")
let bananaPurchased = 0;

purchaseBanana.onclick = function() {
    bananaPurchased++;
    bananaPurchasedText.innerHTML = `you have bought ${bananaPurchased} bananas.`;
};

magicButton.onclick = function() {
    const bunny = document.createElement("i")
    document.body.appendChild("greasycheesey/greasycheesey.github.com/stuff/hmm.png")

}