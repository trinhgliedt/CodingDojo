#Update your previous assignment so that each instance's methods are chained
class User:		# declare a class and give it name User
    def __init__(self, name, email, account_balance=0): 
        self.name = name
        self.email = email
        self.account_balance = account_balance
    def __str__(self):
        output_str = f"Name: {self.name}; Email: {self.email}; Account Balance: {self.account_balance}"
        return output_str
    def make_deposit(self, amount):
        self.account_balance += amount
        return self
    # make_withdrawal(self, amount) - have this method decrease the user's balance 
    # by the amount specified
    def make_withdrawal(self, amount):
        self.account_balance -= amount
        return self
    # display_user_balance(self) - have this method print the user's name and account balance 
    # to the terminal
    # eg. "User: Guido van Rossum, Balance: $150
    def display_user_balance(self):
        print(f"User: {self.name}, Balance: {self.account_balance}")
        return self
    # BONUS: transfer_money(self, other_user, amount) - have this method decrease 
    # the user's balance by the amount and add that amount to other other_user's balance
    def transfer_money(self, other_user, amount):
        self.account_balance -= amount
        other_user.account_balance += amount
        return self

# Create 3 instances of the User class
abby = User("Abby", "abby@gmail.com", 400)
max = User("Max", "m@gmail.com")
cassidy = User("Cassidy", "c@gmail.com")

# Have the first user make 3 deposits and 1 withdrawal and 
# then display their balance
abby.make_deposit(50).make_deposit(100).make_deposit(20).display_user_balance()

# Have the second user make 2 deposits and 2 withdrawals 
# and then display their balance
max.make_deposit(100).make_deposit(50).make_withdrawal(40).make_withdrawal(20).display_user_balance()



# Have the third user make 1 deposits and 3 withdrawals 
# and then display their balance
cassidy.make_deposit(300).make_withdrawal(50).make_withdrawal(40).make_withdrawal(60).display_user_balance()



# BONUS: Add a transfer_money method; have the first user transfer
#  money to the third user and then print both users' balances
abby.transfer_money(cassidy, 100).display_user_balance()
cassidy.display_user_balance()

