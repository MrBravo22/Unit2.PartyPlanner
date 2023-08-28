// creating a variable, query selecting the linked HTML div ID named event-list
const eventList = document.querySelector('#event-list');
// creating a variable for an array to store our JSON data retrieved from the API database
let partyData = [];

//creating an async function to retrieve the data from the API database URL
async function fetchData(){
    const response = await fetch('https://fsa-crud-2aa9294fe819.herokuapp.com/api/2307-ftb-et-web-ft/events');
    const json = await response.json();
    partyData = json.data;
    renderParty ();

}
fetchData();

//creating a render function to iterate through the array retrieved via the API database
//returning 
function renderParty(){
    const html = partyData.map(function(event){

        return `
            <div>
            <h2>${event.name}</h2>
        <ul>
            <li>${event.description}</li>
            <li>${event.date}</li>
            <li>${event.location}</li>
        </ul>
        </br>
            <p>${event.id}</p>
            </div>
        `;
    }).join('');
    eventList.innerHTML = html;
}
console.log(partyData);