const dishCosts = [200, 150, 300, 400]; // Costs of each dish
const numberOfPeople = 4; // Number of people sharing the bill

function resultFun(dishCosts, numberOfPeople){
    //Total bill
    let totalBill = 0;
    for(let i = 0; i < dishCosts.length; i++){
        totalBill += dishCosts[i];
    }

    if(numberOfPeople <= 0){
        throw new Error("Number of person must be greater than zero.");
    }
    //costPerPerson
    costPerPerson = totalBill / numberOfPeople;

    return {
        totalBill: totalBill,
        costPerPerson: costPerPerson
    };
}

try{
    let result = resultFun(dishCosts, numberOfPeople);

    console.log(`Total Bill : ${result.totalBill}`);
    console.log(`Bill per person : ${result.costPerPerson}`);
}
catch(error){
    console.error(error.message);
}
