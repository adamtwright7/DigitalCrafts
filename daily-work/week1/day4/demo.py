favoriteRestaurants = ["Uchi","Town","IronAge KBBQ","Fadi"]

# find me all the restaurants that start with U
for rest in favoriteRestaurants:
    if rest[0] == 'U':
        print(rest)
    # upperecase all the of the restaurants
    print(rest.upper())

# get me the last restaurant
print(favoriteRestaurants[-1])

# get me the second to last restaurant
print(favoriteRestaurants[-2])
