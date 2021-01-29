
function plusMinusTicketQuantity(booleanIncreaseQuanitty, setType) {
    const ticketQuantity = document.getElementById(setType + '-qty');
    const numberOfTicket = parseInt(ticketQuantity.value);
    let ticketCount = numberOfTicket;
    if (booleanIncreaseQuanitty == true) {
        ticketCount = numberOfTicket + 1;
    } if (booleanIncreaseQuanitty == false && ticketCount > 0) {
        ticketCount = numberOfTicket - 1;
    }
    ticketQuantity.value = ticketCount;
}
// function(){

// }