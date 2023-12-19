let numOfDays = 5;
let carType = "Luxury";

function cost(days, carType){
    const rentalRates = {
        'Economy': 4000,  // Rs. 4,000 per day
        'Midsize': 15000, // Rs. 15,000 per day
        'Luxury': 25000   // Rs. 25,000 per day
    };

    const ratesPerDay = rentalRates[carType];

    if(ratesPerDay === undefined){
        throw new Error("Invalid Car Type");
    }
    return ratesPerDay*days;
}

try{
    console.log(`The total rental cost for ${numOfDays} days and a ${carType} car is Rs. ${cost(numOfDays, carType)}`);

}
catch (error){
    console.error(error.message);
}
