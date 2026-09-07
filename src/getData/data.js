async function getData() {
    try {
        const responce=await fetch(responce.process.env)
        const data= await responce.json()
        console.log(data);
    } catch (error) {
        console.log(error.message);
    }
}
getData()