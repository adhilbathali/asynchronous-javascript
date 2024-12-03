export default function myfetch(url) {
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