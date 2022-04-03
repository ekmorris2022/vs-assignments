const invoice = document.invoice;
const button = document.getElementById("submit");

function calculateTotalInvoice() {
    let goombaPrice = invoice["goomba-price"].value * invoice.goomba.value;
    let bobombPrice = invoice["bobomb-price"].value * invoice.bobomb.value;
    let cheepcheepPrice = invoice["cheepcheep-price"].value * invoice.cheepcheep.value;

    return goombaPrice + bobombPrice + cheepcheepPrice;
}


invoice.addEventListener("submit", e => {
    e.preventDefault();

    const total = document.createElement('span');
    total.textContent =`${calculateTotalInvoice()} Coins`;
    invoice.appendChild(total);
    
})