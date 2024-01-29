const storeInventory = [
    {itemName: 'apple', price: '2 USD'},
    {itemName: 'comb', price: '1 USD'},
    {itemName: 'mike', price: '50 USD'},
    {itemName: 'keyboard', price: '20 USD'},
    {itemName: 'shirt', price: '17 USD'},
    {itemName: 'mobileHolder', price: '9 USD'},
];

function exchangeRate(inputObj){
    const valueInINR = Number(inputObj.price.replace(/USD/gi,''))*80;

    const priceInINR = `${valueInINR} INR`;

    return priceInINR;

}

const storeInventoryInINR = storeInventory.map((item)=>{

    const inRupees = Object.assign(item,{price: exchangeRate(item)});

    return inRupees;
})

console.log(storeInventoryInINR);
