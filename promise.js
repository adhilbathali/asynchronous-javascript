const apiFetch = document.getElementById('api-fetch')
const fetchPlaceHolder = document.getElementById('fetch-data')
const url = 'https://jsonplaceholder.typicode.com/todos/1'
const circle = document.getElementById('circle')
const afterParty = document.getElementById('after-party')


function myfetch(url) {
    return fetch(url)
      .then((response) => response.json())
      .then((json) => {
        console.log("Data fetched successfully:", json);
        return json; // Return the fetched data
      })
      .catch((error) => {
        console.log("No internet connection. Retrying in a jiff...");
        return new Promise((resolve) =>
          setTimeout(() => {
            resolve(myfetch(url)); // Retry the fetch after 30 seconds
          }, 1000)
        );
      });
  }



const clickFetchApi = () => {
    
    console.log('fetch api() clicked.')
    const fetchApiData = myfetch(url)

    fetchPlaceHolder.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" height="3em" viewBox="0 -960 960 960" width="3em" fill="white"><path d="M480-160q-134 0-227-93t-93-227q0-134 93-227t227-93q69 0 132 28.5T720-690v-110h80v280H520v-80h168q-32-56-87.5-88T480-720q-100 0-170 70t-70 170q0 100 70 170t170 70q77 0 139-44t87-116h84q-28 106-114 173t-196 67Z"/></svg>'

    fetchApiData.then(data=>fetchPlaceHolder.textContent = JSON.stringify(data)).catch((err)=>console.log("Failed to fetch data: ", err))

    // After party
    afterParty.innerHTML = 'After Party <br> has started'
    circle.classList.add('click-motion')
}



