/* 
=====================================
 *          APPLICATION STATE 
=====================================
*/

const applicationState = {
  requests: [],
};

/* 
=====================================
 *          SETTING API 
=====================================
*/

const API = 'http://localhost:8088';

/* 
=====================================
 *          MAIN CONTAINER 
=====================================
*/

const mainContainer = document.querySelector('#container');

/* 
========================================
 *          GETTER FUNCTIONS
========================================
*/

export const getClowns = () => {
  return applicationState.clowns.map((clown) => ({ ...clown }));
};

export const getRequests = () => {
  return applicationState.requests.map((request) => ({ ...request }));
};

/* 
======================================
 *          FETCH REQUESTS
======================================
*/
export const fetchRequests = () => {
  return fetch(`${API}/requests`)
    .then((response) => response.json())
    .then((serviceRequest) => {
      applicationState.requests = serviceRequest;
    });
};

export const fetchClowns = () => {
  return fetch(`${API}/clowns`)
    .then((response) => response.json())
    .then((data) => {
      applicationState.clowns = data;
    });
};

/* 
===============================================
 *        HTTP POST Request with Fetch
===============================================
*/

export const sendRequest = (userServiceRequest) => {
  const fetchOptions = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(userServiceRequest),
  };

  return fetch(`${API}/requests`, fetchOptions)
    .then((response) => response.json())
    .then(() => {
      mainContainer.dispatchEvent(new CustomEvent('stateChanged'));
    });
};

/* 
==================================================
*                  DELETE REQUEST

*           Takes in an "id" as its parameter
==================================================
*/

export const deleteRequest = (id) => {
  return fetch(`${API}/requests/${id}`, { method: 'DELETE' }).then(() => {
    mainContainer.dispatchEvent(new CustomEvent('stateChanged'));
  });
};

/* 
================================================
 *              SAVE COMPLETION
================================================
*/

export const saveCompletion = (completions) => {
  const fetchOptions = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(completions),
  };

  return fetch(`${API}/completions`, fetchOptions)
    .then((response) => response.json())
    .then(() => {
      mainContainer.dispatchEvent(new CustomEvent('stateChanged'));
    });
};

/* 
=======================================
 *            FETCH COMPLETIONS
=======================================
*/

export const fetchCompletions = () => {
  return fetch(`${API}/completions`)
    .then((response) => response.json())
    .then((data) => {
      applicationState.completions = data;
    });
};
