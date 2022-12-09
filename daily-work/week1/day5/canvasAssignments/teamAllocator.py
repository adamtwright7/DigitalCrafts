print("Welcome to Team Allocator!")

import random

players = [
    'Reginald', 'Chubb-Baggins', 'Hobson', 'Goodbody',
    'Gozbert', 'Clayhanger', 'Bungo', 'Langham',
    'Griffo', 'Banks', 'Gozbert', 'Hayward',
    'Bandobras', 'Noakesburrow', 'Notker', 'Hopesinger',
    'Rollo', 'Longhole', 'Pippin', 'North-took'
]
# 10 random names from fantasynamegenerators.com/hobbit-names.php.
# First and last names split to make 20 names.
# I'm not typing from the slideshow. Plus this is fun and on-brand. 

keepShuffling = True
while keepShuffling == True: # will stop when the user inputs "n" when prompted
    random.shuffle(players) # randomly shuffles players 
    team1List = players[:int(len(players)/2)-1] # Team 1 is the first half of the players
    team2List = players[int(len(players)/2):] # Team 2 is the rest

# since the ordering here is already random, I don't have to pick a team captain at random. 
# I can always pick a captain from the start of each team's list and that is random enough.
    team1captain = team1List[0]
    team2captain = team2List[0]

    print(f'Team 1 captain: {team1captain} \nTeam 1:') # prints the team captain and the team number.

# loops through the team 1 list and prints all the names except the first. 
    for player in team1List[1:]:
        print(f'{player}')
    print('\n')

# The next 4 lines do the same thing for team 2. Could this be looped for an abitrary number of teams? prolly 
    print(f'Team 2 captain: {team2captain} \nTeam 2:') 

    for player in team2List[1:]:
        print(f'{player}')
    print('\n')

# This is the repeat cycle 
    yesOrNo = input('Pick teams again? Type "y" or "n": \n')
    if yesOrNo == 'n':
        keepShuffling = False
