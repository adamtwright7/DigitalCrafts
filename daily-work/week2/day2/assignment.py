## Week2d2 python check

# 1. Write a function called "nameFunction" have it print out your name. invoke the function

def nameFunction():
    print("Adam Tyler Wright")
nameFunction()

#2. Define variable named Joe that is the string Joe

Joe = 'Joe'

#3 Reinitialize Joe so that it is now the integer 4

Joe = 4

#4 Change Joe into a float

Joe = float(Joe)

#5. Create a list named students that includes 5 people from this class

students = ["Corey","Jessika","Adam","Kenneth","Mauro"]

    #5a print the first item from the list(bonus for more than one way)

print(students[0])

    #5b print the last item from the list(bonus for more than one way)

print(students[-1])
#or
print(students[len(students)-1])

    #5c How do I get the third item from the list?

students[2] # index 2 represents the third item

    #5d print the entire list not in brackets [student1, student2, etc...]

for student in students:
    print(student)

    #5e add "is cool" to the end of each name

index = 0
inList = False # this variable counts if I'm in the list. It's here for 5g. 
while index < len(students):
    students[index] = students[index] + ' is cool'

    #5f if the students name is your name add "IT ME!!" to the end
    ## I'm doing this in the same loop as before if that's cool 
    if students[index].count('Adam'): # this counts the number of times I'm in the string. This works because 1 is truthy and 0 is falsey
        students[index] = students[index] + ' IT ME!!'

    #5g if you are not in the list print "I guess I'm not cool"
    if students[index].count('Adam'):
        inList = True

    index += 1 # not part of 5g, but ya gotta increase the index at the end of the while loop 

if not inList: # doing this after the while loop, so that we've checked every name for my name and only print once. 
    print("I guess I'm not cool")

    #5h list some methods to remove things from a list

## list.remove(thing) and list.pop(index) 

#6 Create a dictionary with keys "Digital Crafts" ,"Instructor", "TA" and values "Bootcamp" ,"Joe" ,"Ethan"

sampleDictionary = {
    "Digital Crafts": "Bootcamp",
    "Instructor": "Joe",
    "TA" : "Ethan"
}

    #6a return the value of "Digital Crafts"

sampleDictionary["Digital Crafts"]

#7 Write a class named Cars with attributes make,model,year, and type(sedan,truck,crossover, sportscar, etc....)

class Cars:
    def __init__(self,make,model,year,CarType):
        self.make = make
        self.model = model
        self.year = year
        self.CarType = CarType

    # I'll do 7a later since it shouldn't be in the Cars class block 
    #7b Add a method that allows you to see the make and model of a car in your terminal (did this before 7a because it has to be in the same code block as 7)

    def seeCar(self):
        print(f'This car is a {self.make} {self.model}')

    #7d Add a method that is called "honkHorn" that prints "Beep Beep"

    def honkHorn():
        print("Beep Beep")

    #7a Instantiate 3 new Cars
    
mercury = Cars('Honda','Civic',2007,'sedan')
dadamCar = Cars('Ford','Mustang',2008,'convertible')
brennanCar = Cars('Telsa','Model S',2020,'electric')

    #7c Use the above method (7b) on the second car

dadamCar.seeCar()
