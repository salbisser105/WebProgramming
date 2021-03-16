//Switch

const paymentMethod = 'card';

switch (paymentMethod) {
    case 'card':
        console.log('The payment was done with card');
        break; //Always finish with break
    case 'transfer':
        console.log('The payment was done with transfer');
        break; //Always finish with break
    case 'bitcoin':
        console.log('The payment was done with bitcoin');
        break; //Always finish with break
    case 'cash':
        console.log('The payment was done with cash');
        break; //Always finish with break
    default:
        console.log('You have not paid yet');
        break
}