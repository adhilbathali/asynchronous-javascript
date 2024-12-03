export function myfetch(url){
    fetch(url).then((Response)=>{
        if(Response.ok){
            return Response.text();
        }
        throw new Error('Failed to fetch data');
    })
    .then((data)=>{
        console.log("Data fetched successfully:", data)
    })
    .catch(()=>{
        console.log("No internet connection. Retrying in 30 seconds...")
        setTimeout(()=>{
            myfetch(url), 30000
        })
    })
}