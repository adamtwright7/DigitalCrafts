favoriteRestaurants = ["Uchi","Town","IronAge KBBQ","Fadi"]

Urests = ''
upperRests = ''

# find me all the restaurants that start with U
for rest in favoriteRestaurants:
    if rest[0] == 'U':
        Urests = Urests + ', ' + rest # collecting all the restaurants that start with U 
    # upperecase all the of the restaurants
    upperRests = upperRests + ', ' + rest.upper()

#printing out the restaurants that start with U 
UrestsStatement = 'The restaurant(s) that start with U: {}'
print(UrestsStatement.format(Urests[0:-2])) # indexing takes out the last comma 

#printing out all the uppercase restaurants 
upperRestsStatements = 'The uppercase restaurants are: {}'
print(upperRestsStatements.format(upperRests[0:-2]))

# get me the last restaurant
lastRest = favoriteRestaurants[-1]
lastStatement = 'The last restaurant is {}'
print(lastStatement.format(lastRest))

# get me the second to last restaurant
secLastRest = favoriteRestaurants[-2]
secLastStatement = 'The second to last restaurant is {}'
print(secLastStatement.format(secLastRest))
