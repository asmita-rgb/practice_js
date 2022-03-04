// kilometerToMeter
function kilometerToMeter(lengthInKm){
    return lengthInKm * 1000;

}



// budgetCalculator (watch 50, phone 100, laptop 500)
function budgetCalculator ( watchQuantity, phoneQuantity, laptopQuantity ){
    watchPrice = 1000;
    phonePrice = 2000;
    laptopPrice = 3000;
    return ( watchQuantity * watchPrice + phoneQuantity * phonePrice + laptopQuantity * laptopPrice )
}



// hotelCost (1-10 days: 100, 11-20 days: 80, rest: 50)
function hotelCost ( numberOfDays ){
    if( numberOfDays <= 10 ){
        return ( numberOfDays * 100 );
    }
    else if( numberOfDays <= 20 ){
        return ( 10 * 100 + ( numberOfDays - 10 ) * 80 );
    }
    else{
        return ( 10 * 100 + 10 * 80 + ( numberOfDays - 20 ) * 50 );
    }
        
}



// megaFriend (largest length of name of friend from array of friends)
function megaFriend (listOfNames){
    var largestName = listOfNames[0];
    for (let i = 1; i < listOfNames.length; i++) {
        if (listOfNames[i].length > largestName.length) {
            largestName = listOfNames[i];
        }
    }
    return largestName;
}