import { deleteRequest, getRequests, getClowns, saveCompletion } from "./dataAccess.js";

const mainContainer = document.querySelector('#container')


mainContainer.addEventListener('click', (click) => {
    if (click.target.id.startsWith('request--')) {
        const [, requestId] = click.target.id.split('--')
        deleteRequest(parseInt(requestId))
    }
})

mainContainer.addEventListener('change', (event) => {
    if (event.target.id === 'clowns') {
        const [requestId, clownId] = event.target.value.split('--')

        const completion = {
            requestId: requestId,
            clownId: clownId,
            date_created: Date.now(),
        };

        saveCompletion(completion)

    }
})

/* 
===============
*   REQUESTS
===============
*/

export const Requests = () => {
    const requests = getRequests()

    let html = `
            <ul>
                ${requests.map(convertRequestToListElement).join('')}
            </ul>
    `

    return html
}

/* 
===================================
*  CONVERT REQUEST TO LIST ELEMENT
===================================
*/

const convertRequestToListElement = (request) => {
    const clowns = getClowns()

    return `
        <li id="childName">
    ${request.childName}
    
    <select class="clowns" id="clowns">
    <option value="">Choose A Clown</option>
    ${clowns
      .map((clown) => {
        return `<option value="${request.id}--${clown.id}">${clown.name}</option>`;
      })
      .join('')}
    </select>
    
    <button class="request__delete" id="request--${request.id}">DENY</button> 
    
    </li>
    
    `;
}