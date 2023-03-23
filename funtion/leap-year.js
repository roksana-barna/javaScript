function isLeapYear(year){
    const remainder = year % 4;
    if  (remainder===0){
        return true;
    }
    else{
        return false;
    }
}
 const thisYear=isLeapYear(2024);
 console.log("eta ki leap year?",thisYear);
 const thatYear=isLeapYear(2026);
 console.log('ki?',thatYear);