//Fetch API
//Let us send information and obtain without the need to reload our website
//We can get a local file or a response from a server text or json
async function obtainEmployes(){
    const file = 'employes.json';
    
    // fetch(file)
    //     .then(result =>{
    //         return result.json();
    //     })
    //     .then(data =>{
    //         const {employes} = data;
    //         //console.log(employes);
    //         // employes.forEach(employe =>{
    //         //     console.log(employe);
    //         //     console.log(employe.id);

    //         //     document.querySelector('.contenido').textContent = employe.name;
    //         // })
    //     })
    const result = await fetch(file);
    const data= await result.json();
    console.log(data);
}
obtainEmployes();
//Status 200 means connection to the server was correct.
