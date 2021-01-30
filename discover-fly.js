
function plusMinusTicketQuantity(booleanIncreaseQuantity, setType, booleanFirstClass) {
    const ticketQuantity = document.getElementById(setType + '-qty');
    const numberOfTicket = parseInt(ticketQuantity.value);
    let ticketCount = numberOfTicket;
    if (booleanIncreaseQuantity == true) {
        ticketCount = numberOfTicket + 1;
    } if (booleanIncreaseQuantity == false && ticketCount > 0) {
        ticketCount = numberOfTicket - 1;
    }
    ticketQuantity.value = ticketCount;
    totalCalculation(booleanFirstClass);
}


function totalCalculation(booleanFirstClass) {
    const subtotal = document.getElementById('subtotal');

    const firstClassQuantity = document.getElementById('first-class-qty');
    const firstClassQuantityNum = parseInt(firstClassQuantity.value);
    const economyQuantity = document.getElementById('economy-qty');
    const economyQuantityNum = parseInt(economyQuantity.value);
    let subtotalAmountFirst = firstClassQuantityNum * 150;
    let subtotalAmountEconomy = economyQuantityNum * 100;
    let subtotalCost = subtotalAmountFirst + subtotalAmountEconomy;
    if (booleanFirstClass == true) {
        subtotalAmountFirst = firstClassQuantityNum;
    } if (booleanFirstClass == false) {
        subtotalAmountEconomy = economyQuantityNum;
    }
    subtotal.innerText = ('$' + subtotalCost);

    let vat = subtotalCost * 0.1;
    document.getElementById('vat').innerText = ('$' + vat);

    let total = subtotalCost + vat;
    document.getElementById('total').innerText = ('$'+ total);
}
