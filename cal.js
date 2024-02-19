const selections = document.getElementsByClassName('selected-seat');
let countingSeat = parseInt(document.getElementById('counting-seatNumber').innerText);
let remainingSeat = parseInt(document.getElementById('remaining-seatNumber').innerText);
const perTicketPrice = parseInt(document.getElementById('per-ticket-price').innerText);

// console.log('selected-seat' , selected-seat);
// console.log('perTicketPrice' , perTicketPrice);
// console.log('countingSeat' , countingSeat);
// console.log('remaining-seatNumber' , remaining-seatNumber);

let initialTicketPrice = 0;

const selectionsSeatNumber = [];

for (const selection of selections){
// console.log(selections.target);
selection.addEventListener('click', function (e) {
const SelectedSeat = e.target.innerText;
if (!selectionsSeatNumber.includes(SelectedSeat)) {
    if (selectionsSeatNumber.length >= 4) {
        alert(' Already Exceeds your Limit 4 Seats')
    }
    selectionsSeatNumber.push(SelectedSeat);
    e.target.classList.toggle('bg-themecolor');
    countingSeat=selectionsSeatNumber.length;
    

}
    
})
}
