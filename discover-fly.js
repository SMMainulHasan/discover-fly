//Plus minus button function
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
};

//Brake Down Plus minus button function
function totalCalculation(booleanFirstClass) {
    const subtotal = document.getElementById('subtotal');
    //Need to access quantity
    const firstClassQuantity = document.getElementById('first-class-qty');
    const firstClassQuantityNum = parseInt(firstClassQuantity.value);
    //Need to access quantity again
    const economyQuantity = document.getElementById('economy-qty');
    const economyQuantityNum = parseInt(economyQuantity.value);
    //First class ticket price $150
    let subtotalAmountFirst = firstClassQuantityNum * 150;
    //Economy ticket price $100
    let subtotalAmountEconomy = economyQuantityNum * 100;
    let subtotalCost = subtotalAmountFirst + subtotalAmountEconomy;
    if (booleanFirstClass == true) {
        subtotalAmountFirst = firstClassQuantityNum;
    }; if (booleanFirstClass == false) {
        subtotalAmountEconomy = economyQuantityNum;
    };
    subtotal.innerText = ('$' + subtotalCost);

    let vat = subtotalCost * 0.1;
    document.getElementById('vat').innerText = ('$' + vat);

    let total = subtotalCost + vat;
    document.getElementById('total').innerText = ('$'+ total);
};


// Modal --//confirmation//
function sendQuantityToModal(idTo, idFrom){
    document.getElementById(idTo).innerText = document.getElementById(idFrom).value;
};

function sendCostToModal(idTo, idFrom){
    document.getElementById(idTo).innerText = document.getElementById(idFrom).innerText;
};

function confirmBooking(){
    sendQuantityToModal('modal-first-qty','first-class-qty');
    sendQuantityToModal('modal-economy-qty','economy-qty');
    sendCostToModal('modal-total','total');
};