const selections = document.getElementsByClassName('selected-seat');
let countingSeat = parseInt(document.getElementById('counting-seatNumber').innerText);
let remainingSeat = parseInt(document.getElementById('remaining-seatNumber').innerText);
const perTicketPrice = parseInt(document.getElementById('per-ticket-price').innerText);

let initialTicketPrice = 0;

const selectionsSeatNumber = [];

for (const selection of selections){
selection.addEventListener('click', function (e) {
const SelectedSeatNumber = e.target.innerText;
if (!selectionsSeatNumber.includes(SelectedSeatNumber)) {
    if (selectionsSeatNumber.length >= 4) {
        alert(' Already Exceeds your Limit 4 Seats');
        return;
    }
    selectionsSeatNumber.push(SelectedSeatNumber);
    e.target.classList.toggle('bg-themecolor');
    countingSeat = selectionsSeatNumber.length;
    setInnerText('counting-seatNumber' , countingSeat );
    remainingSeat = 40 - selectionsSeatNumber.length ;
    setInnerText('remaining-seatNumber' , remainingSeat );

    const ticketRowCreate = document.createElement('tr');
    const ticketRow = document.getElementById('ticketPrice-display');
    ticketRowCreate.innerHTML = `<tr class="border-b-2 border-black">
    <td class="px-0">${SelectedSeatNumber}</td>
    <td>Economy</td>
    <td class="text-right px-0" id="selected-price">${perTicketPrice}</td>
  </tr>`
    ticketRow.appendChild(ticketRowCreate);
    const selectedPrice = parseInt(document.getElementById('selected-price').innerText);
    initialTicketPrice = initialTicketPrice + selectedPrice ;
}   
else if (selectionsSeatNumber.includes(SelectedSeatNumber)) {
    if (selectionsSeatNumber.length >= 4) {
        alert(' Already Exceeds your Limit 4 Seats');
        return;
    }
    selectionsSeatNumber.pop(SelectedSeatNumber);
    e.target.classList.remove('bg-themecolor');
    countingSeat = selectionsSeatNumber.length;
    setInnerText('counting-seatNumber' , countingSeat );
    remainingSeat = 40 - selectionsSeatNumber.length ;
    setInnerText('remaining-seatNumber' , remainingSeat );
    const ticketRowCreate = document.createElement('tr');
    const ticketRow = document.getElementById('ticketPrice-display');
    ticketRow.removeChild(ticketRowCreate);
    const selectedPrice = parseInt(document.getElementById('selected-price').innerText);
    initialTicketPrice = initialTicketPrice + selectedPrice ;
}
else {
    e.target.classList.toggle('bg-themecolor');
}

        setInnerText('total-price', initialTicketPrice);
        setInnerText('grand-price', initialTicketPrice);
        const newCoupon = document.getElementById('new-coupon').innerText;
        const coupleCoupon = document.getElementById('couple-coupon').innerText;
        const couponInput = document.getElementById('coupon-input');
        couponInput.addEventListener('input', function () {
            const inputText = couponInput.value;
            if (inputText == coupleCoupon && parseInt(seatCount) >= 4) {
                const applyButton = document.getElementById('apply-button');
                applyButton.attributes.removeNamedItem('disabled');
                applyButton.addEventListener('click', function () {
                    const discountPrice = (initialTicketPrice * 20) / 100;
                    const grandPrice = initialTicketPrice - discountPrice;
                    setInnerText('grand-price', grandPrice);
                    document.getElementById('coupon-apply-section').classList.add('hidden');
                })
            }
            else if (inputText == newCoupon && parseInt(seatCount) >= 4) {
                const applyButton = document.getElementById('apply-button');
                applyButton.removeAttribute('disabled');
                applyButton.addEventListener('click', function () {
                    const discountPrice = (initialTicketPrice * 15) / 100;
                    const grandPrice = initialTicketPrice - discountPrice;
                    setInnerText('grand-price', grandPrice);
                    document.getElementById('coupon-apply-section').classList.add('hidden');
                })
            }
            else {
                document.getElementById('apply-button').disabled = true;
            }
        })
        if (selectionsSeatNumber.length > 0) {
            const phoneNumberInputField = document.getElementById('phone-number');
            phoneNumberInputField.addEventListener('input', function () {
                let phoneNumber = parseInt(phoneNumberInputField.value);
                if (typeof phoneNumber === 'number') {
                    document.getElementById('next-button').attributes.removeNamedItem('disabled');
                }
                else {
                    document.getElementById('next-button').disabled = true
                }
            })
        }

})

}

// set inner Text Utility Function

function setInnerText(id , value) {
    const newValue = document.getElementById(id);
    newValue.innerText = value;
}
