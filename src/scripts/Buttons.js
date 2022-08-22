import { ReservationForm } from "./ReservationForm.js";
import { Requests } from "./Requests.js";

export const ClownRequests = () => {

    return `
        <h1 id="site__heading">Buttons and Lollipop</h1>
        <h2 id="site__subHeading">THE MOST WANTED CLOWNS</h2>
        <section class="serviceForm">
            ${ReservationForm()}
        </section>

        <section class="partyRequests">
            <h2>Party Requests</h2>
            
            ${Requests()}
        </section>

        
    `;
}

