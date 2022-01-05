const prompt = require('prompt-sync')();

const getBalance = () =>
{
    let balance = prompt('Balance = ');
    return Number(balance);
}

const getAnnualInterestRate = () => {
    let annualInterestRate = prompt('Annual Interest Rate = ');
    return Number(annualInterestRate);
}

const calculateMonthlyPayments = (balance, interest) => {
    let monthlyInterestRate = interest / 12.0;
    let newBalance = balance;
    let monthlyPayment = 0;
    let months = 0;
    while(newBalance > 0) // resets the variables and adds 10 to monthlyPayment each iteration
    {
        monthlyPayment += 10;  // adds 10 to monthlyPayment each iteration
        newBalance = balance; // sets newBalance to balance each iteration
        months = 0 // resets months to 0 each iteration
        while(months < 12) // checks to see if the new monthlyPayment value will satisfy 12 months worth of payments
        {
            months++; // runs this loop 12 times
            newBalance -= monthlyPayment; // removes the monthly payment from the balance
            newBalance += monthlyInterestRate * newBalance; // adds 12 months worth of interest to the balance
        }
        console.log(monthlyPayment + ', ' + newBalance);
        
    }
    return monthlyPayment;
}

let balance = getBalance();
let annualInterestRate = getAnnualInterestRate();
let monthlyPayment = calculateMonthlyPayments(balance, annualInterestRate);
console.log('Lowest Payment: ' + monthlyPayment);
