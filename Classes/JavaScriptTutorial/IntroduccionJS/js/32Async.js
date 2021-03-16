// Async - await

function downloadNewClients() {
    return new Promise(resolve => {
        console.log('Downloading clientes... wait');

        setTimeout(()=> {
            console.log('Clients where download');
        }, 4000);

    });
}
function downloadLastRequests() {
    return new Promise(resolve => {
        console.log('Downloading Requests... wait');

        setTimeout(()=> {
            console.log('Requests where download');
        }, 3000);

    });
}
async function app() {
    try {
        // const clients = await downloadNewClients();
        // const request = await downloadLastRequests();
        // showClients(clients);
        // console.log(request);
        const result = await  Promise.all([downloadNewClients(),downloadLastRequests()]);
        console.log(result);
    } catch (error) {
        console.log(error);
        
    }
}

app();

// setTimeout(function () {
//     console.log('set timeout...')
// }, 1000);

// setInterval(function () {
//     console.log('set timeout...')
// }, 3000); //Checks every determined time 