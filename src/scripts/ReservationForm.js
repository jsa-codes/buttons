import { sendRequest } from "./dataAccess.js";


/* 
=====================================
 *          MAIN CONTAINER 
=====================================
*/
const mainContainer = document.querySelector('#container')

/* 
=====================================
 *          EVENT LISTENER 
=====================================
*/

mainContainer.addEventListener('click', (clickEvent) => {

    if (clickEvent.target.id === 'submitRequest') {
        
        const parentName = document.querySelector("input[name='parentName']").value;

        const childName = document.querySelector("input[name='childName']").value;

        const attending = document.querySelector("input[name='attending']").value;

        const address = document.querySelector("input[name='address']").value;

        const reservationDate = document.querySelector("input[name='reservationDate']").value;

        const reservationLength = document.querySelector("input[name='reservationLength']").value;


        const dataToSendToAPI = {
            parentName: parentName,
            childName: childName,
            attending: attending,
            address: address,
            reservationDate: reservationDate,
            reservationLength: reservationLength,
            
        };

        sendRequest(dataToSendToAPI)
    }
})

/* 
===========================================
*           RESERVATION FORM 
===========================================
    - Creates the HTML Form for the ServiceForm
*/

export const ReservationForm = () => {
  let html = `
        <div class="field">
            <label class="label" for="parentName">Parent's Name</label>
            <input type="text" name="parentName" class="input" />
        </div>
        <div class="field">
            <label class="label" for="childName">Child's Name</label>
            <input type="text" name="childName" class="input" />
        </div>
        <div class="field">
            <label class="label" for="attending">Number Attending</label>
            <input type="text" name="attending" class="input" />
        </div>
        <div class="field">
            <label class="label" for="address">Address of Event</label>
            <input type="text" name="address" class="input" />
        </div>
        <div class="field">
            <label class="label" for="reservationDate">Date of Event</label>
            <input type="date" name="reservationDate" class="input" />
        </div>
        <div class="field">
            <label class="label" for="reservationLength">Length of Reservation</label>
            <input type="text" name="reservationLength" class="input" />
        </div>
        <div class="field">
            <label class="label" for="serviceBudget">Budget</label>
            <input type="number" name="serviceBudget" class="input" />
        </div>
    
        

        <button class="button" id="submitRequest">Submit Request</button>
    
    `;

  return html;
};