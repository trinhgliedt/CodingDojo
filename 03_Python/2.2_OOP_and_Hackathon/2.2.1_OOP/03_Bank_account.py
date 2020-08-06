# Create a BankAccount class with the attributes
# interest rate and balance
# don't forget to add some default values for these parameters!
# (remember, this is where we specify the attributes for our class)
# don't worry about user info here; we'll involve the User class soon
class BankAccount:
    def __init__(self, name, int_rate, balance=0):
        self.account_name = name
        self.account_balance = balance
        self.interest_rate = int_rate
    def __str__(self):
        output_str = f"Account: {self.account_name}; Account balance: {self.account_balance}; Interest rate: {self.interest_rate}"
        return output_str
    # Add a deposit method to the BankAccount class
    def deposit(self, amount):
        self.account_balance += amount
        return self

    # Add a withdraw method to the BankAccount class
    # decreases the account balance by the given amount if
    #  there are sufficient funds; if there is not enough money,
    #  print a message "Insufficient funds: Charging a $5 fee"
    # and deduct $5
    def withdraw(self, amount):
        if amount > self.account_balance:
            print(f"Account {self.account_name} doesn't have sufficient funds for this withdrawal: Charging a $5 fee")
            self.account_balance -= 5    
        self.account_balance -= amount
        return self
    
    # Add a display_account_info method to the BankAccount class
    # print to the console: eg. "Balance: $100"
    def display_account_info(self):
        output_str1 = f"Account: {self.account_name}; Balance: ${self.account_balance}"
        print(output_str1)
        return self
    
    # Add a yield_interest method to the BankAccount class
    # increases the account balance by 
    # the current balance * the interest rate 
    # (as long as the balance is positive)
    def yield_interest(self):
        interest = round(self.account_balance*(float(self.interest_rate.replace("%",""))/100),2)
        if self.account_balance > 0:
            self.account_balance += interest
            print(f"Amount of interest earned: ${interest}")
        return self

# Create 2 accounts
account1 = BankAccount("BofA-1234", int_rate = "0.9%")
account2 = BankAccount("WF-5678", int_rate = "0.5%")

# To the first account, make 3 deposits and 1 withdraw, 
# then yield interest and display the account's info 
# all in one line of code (i.e. chaining)
account1.deposit(200).deposit(100).deposit(500).withdraw(400).yield_interest().display_account_info()

# To the second account, make 2 deposits and 4 withdraws, 
# then yield interest and display the account's info 
# all in one line of code (i.e. chaining)
account2.deposit(200).deposit(300).withdraw(400).withdraw(50).withdraw(50).withdraw(100).yield_interest().display_account_info()
