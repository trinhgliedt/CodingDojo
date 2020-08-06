#Part 1: 8/4/2020
# OOP - Object Oriented Programming

# Examples of objects
# car
# people
# phone
# computer
# desk
# walls
# chair

# Model a person

# Attributes (characteristics) - things a person can have
# hair color
# hair length
# gender
# name
# height
# age
# location
# email address
# hobbies

# Things a person can do - methods
# dye hair
# get a haircut
# undergo a gender change
# change name
# grow/shrink
# have birthday
# move (temporarily or permanently)
# change email address
# add or subtract from our hobbies

# In CSS, a class allows us to style multiple elements

# a class is like a blueprint for creating objects
# each object has attributes and methods (functions inside the class)

class Person:
    # runs whenever we create an object of the Person class
    def __init__(self, input_name, hair_color, age, email = "some@email.com"):
        self.name = input_name
        self.hair_color = hair_color
        self.age = age
        self.email = email

        self.hobbies = []

    def __str__(self):
        # need to return a string
        output_str = f"Name: {self.name}; Age: {self.age}; Hair Color: {self.hair_color}, Hobbies: "

        for hobby in self.hobbies:
            output_str += hobby + ", "

        return output_str

    def add_hobby(self, hobby):
        self.hobbies.append(hobby)

        # self refers to the actual person object
        return self
        # Python is going to return None by default

    def remove_hobby(self, hobby):
        self.hobbies.remove(hobby)

        return self

    def dye_hair(self, new_color):
        self.hair_color = new_color

        return self

    def have_birthday(self):
        self.age += 1

# we are instantiating (creating) an object of the Person class
# each one of these objects is an "instance" of the class
ani = Person(hair_color="black", input_name="Ani Pilosian", age=34)
print(ani.email)
trinh = Person("Trinh Gliedt", "black", 20, "t@g.com")
# trinh = Person.__init__("Trinh Gliedt", "black", 20, "t@g.com")

ani.add_hobby("shopping")
ani.have_birthday()

# this is called method chaining
trinh.dye_hair("blond").add_hobby("sewing").add_hobby("watching movies")

trinh.remove_hobby("sewing").add_hobby("hiking")
trinh.dye_hair("red")

print(ani, trinh)
# print(ani.__str__())


#Part 2: 8/4/2020
# Class - blueprint to create objects of a specific type
# Object - an "instance" of a class
# Instantiate - creating an object
# __init__ - our initializer method

# Vehicle
# Car
# Person

# this is our parent class
class Vehicle:
    def __init__(self, param_num_wheels = 2, color = "red"):
        self.num_wheels = param_num_wheels
        self.color = color

    def print_num_wheels(self):
        print(f"The number of wheels is {self.num_wheels}.")

# this is a child class
class Car(Vehicle):
    def __init__(self, make, model, year, color, miles):
        super().__init__(4, color)

        self.make = make
        self.model = model
        self.year = year
        # self.color = color
        self.miles = miles

    def __str__(self):
        return f"Make: {self.make}; Model: {self.model}"

    def drive(self, num_miles):
        print("driving now!")
        self.miles += num_miles

        return self

class Person:
    def __init__(self, name = "Bob Smith", starting_money = 100000):
        self.name = name
        self.money = starting_money

        self.cars = []

    def buy_car(self, car, price):
        if price > self.money:
            print("You can't afford this!")
            return False

        # if car in self.cars:
        #     print("You already own this!")
        #     return False

        self.money -= price
        self.cars.append(car)
        return True

    def sell_car(self, car, price, buyer):
        # if self == buyer:
        #     print("You can't buy from yourself!")
        #     return

        in_list = False
        for single_car in self.cars:
            if single_car == car:
                in_list = True

        if in_list and buyer.buy_car(car, price):
            print("inside removing car logic")
            self.cars.remove(car)
            self.money += price

four_runner = Car("Toyota", "4Runner", 2006, "blue", 152000)
quinn = Person("Quinn Forman", 150000)

ford_raptor = Car("Ford", "Raptor", 2021, "white", 0)
bryce = Person("Bryce Withers", 80000)

bryce.buy_car(ford_raptor, 80000)
print(bryce.money)

bryce.sell_car(ford_raptor, 100000, quinn)
quinn.buy_car(four_runner, 12999)
quinn.sell_car(four_runner, 10000, quinn)

print("Quinn has " + str(len(quinn.cars)) + " cars.")
for car in quinn.cars:
    print(car)

print("Quinn's money:", quinn.money)
# four_runner.print_num_wheels()
four_runner.drive(200).drive(100)
print(four_runner.miles)

# 8/5/2020 afternoon review
# Class - blueprint to create objects of a specific type
# Object - an "instance" of a class
# Instantiate - creating an object
# __init__ - our initializer method

# Vehicle
# Car
# Person

# this is our parent class
class Vehicle:
    # this is method to initialize objects of the Vehicle class
    def __init__(self, param_num_wheels = 2, color = "red"):
        # if param_num_wheels != 2 and param_num_wheels != 4:


        self.num_wheels = param_num_wheels
        self.color = color

    def print_num_wheels(self):
        print(f"The number of wheels is {self.num_wheels}.")

# this is a child class
# the Car class inherits from the Vehicle class
# in JS: class Car extends Vehicle {}
class Car(Vehicle):
    # runs every time we create a car
    def __init__(self, make, model, year, color, miles):
        # calling the parent class's constructor method
        super().__init__(4, color)

        # self refers to the object
        # creating attributes and connecting them to our parameter values
        self.make = make
        self.model = model
        self.year = year
        # self.color = color
        self.miles = miles

    # not critical, but helpful for printing objects
    def __str__(self):
        return f"Make: {self.make}; Model: {self.model}"

    def drive(self, num_miles):
        print("driving now!")
        # adding to and reassigning the miles attribute in one step
        self.miles += num_miles

        # functions by default return None
        # returning a reference to the actual object
        # for method chaining
        return self

class Person:
    # for initializing new objects
    def __init__(self, name = "Bob Smith", starting_money = 100000):
        # creating attributes and connecting to parameter values
        self.name = name
        self.money = starting_money

        # empty list of cars
        self.cars = []

    def __str__(self):
        return f"Name: {self.name}; Money: {self.money}"

    # returns a boolean
    def buy_car(self, car, price):
        # when method called, let's check to see if person can afford it
        if price > self.money:
            print("You can't afford this!")
            return False

        # if car in self.cars:
        #     print("You already own this!")
        #     return False

        # subtracting the price from the available money
        self.money -= price

        # adding the car to the list of cars
        self.cars.append(car)

        # indicates the purchase went through
        return True

    def sell_car(self, car, price, buyer):
        # if self == buyer:
        #     print("You can't buy from yourself!")
        #     return

        # setting a flag
        in_list = False

        # creates a local variable called single_car
        for single_car in self.cars:
            if single_car == car:
                # we found the right one!
                in_list = True

        # buy_car returns a boolean
        # both must be true to get inside the code block
        # in JS "and" would &&
        if in_list and buyer.buy_car(car, price):
            print("inside removing car logic")
            # remove individual car from the list
            self.cars.remove(car)

            # add to the seller's money
            self.money += price

# instantiating objects of the Car and Person classes
four_runner = Car("Toyota", "4Runner", 2006, "blue", 152000)
quinn = Person("Quinn Forman", 150000)

ford_raptor = Car("Ford", "Raptor", 2021, "white", 0)
bryce = Person("Bryce Withers", 80000)

bryce.buy_car(ford_raptor, 80000)
print(bryce.money)

bryce.sell_car(ford_raptor, 100000, quinn)
quinn.buy_car(four_runner, 12999)

# selling a car to himself
# washes itself out
quinn.sell_car(four_runner, 10000, quinn)

print("Quinn has " + str(len(quinn.cars)) + " cars.")
for car in quinn.cars:
    print(car)

print("Quinn's money:", quinn.money)
# four_runner.print_num_wheels()

# invoking (calling) the drive method
# twice in a row using chaining
four_runner.drive(200).drive(100)
print(four_runner.miles)

print(quinn)


# Here’s one way you could loop through an object’s attributes using the built-in __dict__ class attribute:
# for attr in quinn.__dict__.values():
#     print(attr)

# If you wanted the keys and values, you could call the items method instead of values.
# https://docs.python.org/3/library/stdtypes.html#object.__dict


# Python doesn’t have an easy way to restrict parameter values, but you could do something like this (in addition to documenting in the code) to enforce it such a restriction:

# def __init__(self, param_num_wheels = 2, color = "red"):
#     if param_num_wheels not in [2, 4]:
#         raise ValueError("The number of wheels must be 2 or 4.")
# This would raise an error and stop the code’s execution (unless the error was caught).