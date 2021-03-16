//Api

const button = document.querySelector('#button');   
button.addEventListener('click',()=>{
    Notification.requestPermission()
        .then(result =>console.log('Result is: '+ result))
});

if(Notification.permission == 'granted'){
    new Notification('this is a notification', {
        //icon: 'img/route'
        body: 'Code with Santiago',
        
    })
}