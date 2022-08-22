import { fetchClowns, fetchRequests, fetchCompletions } from './dataAccess.js';
import { ClownRequests } from './Buttons.js';

/* 
=====================================
 *          MAIN CONTAINER 
=====================================
*/

const mainContainer = document.querySelector('#container');

/* 
==============================================================
*                     EVENT LISTENER 
==============================================================
*/

mainContainer.addEventListener('stateChanged', (customEvent) => {
  render();
});

/* 
==============================================================
*                     RENDER FUNCTION 
==============================================================
*/

const render = () => {
  fetchRequests()
    .then(() => fetchClowns())
    .then(() => fetchCompletions())
    .then(() => {
      mainContainer.innerHTML = ClownRequests();
    });
};

render();
