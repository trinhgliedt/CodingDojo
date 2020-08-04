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