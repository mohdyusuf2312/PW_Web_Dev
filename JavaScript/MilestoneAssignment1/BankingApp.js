// Customer account object
const customerAccount = {
    name: 'John Doe',
    balance: 1000,

    // Method to deposit money
    deposit(amount) {
        if (amount > 0) {
            this.balance += amount;
            console.log(`Deposited Rs. ${amount}. New balance is Rs. ${this.balance}.`);
        } else {
            console.log('Deposit amount must be positive.');
        }
    },

    // Method to withdraw money
    withdraw(amount) {
        if (amount > 0 && amount <= this.balance) {
            this.balance -= amount;
            console.log(`Withdrew Rs. ${amount}. New balance is Rs. ${this.balance}.`);
        } else if (amount > this.balance) {
            console.log('Insufficient funds.');
        } else {
            console.log('Withdrawal amount must be positive.');
        }
    },

    // Method to get the current balance
    getBalance() {
        console.log(`Current balance is Rs. ${this.balance}.`);
        return this.balance;
    }
};

// Example usage
customerAccount.getBalance(); // Check initial balance
customerAccount.deposit(500); // Deposit money
customerAccount.withdraw(200); // Withdraw money
customerAccount.withdraw(2000); // Attempt to withdraw more than balance
customerAccount.getBalance(); // Check final balance
