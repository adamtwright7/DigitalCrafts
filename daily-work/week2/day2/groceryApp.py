# Need a main menu to prompt the user and organize the code. 
mainMenu = ["Welcome to your grocery list! Enter the number associated with what you would like to do today. \n"
"1. Add a new grocery store location, with its own list. \n"
"2. Add item(s) to the list of a grocery store location. \n"
"3. View all grocery store locations. \n"
"4. View all items on a single store's list. \n"
"5. View all items across all stores. \n"
"9. Close this grocery list. \n"]

# We're gonna need a list of stores. We'll start it empty. 
allStores = []

class StoreList:
    def __init__ (self,locationName,address,groceryList):
        self.locationName = locationName
        self.address = address
        self.groceryList = groceryList 

def main():
    while openList: # list application keeps going until we say to stop. We'll stop it later.
        # Main menu input: 
        mainMenuInput = input(mainMenu) 

        # Option 1: add a new grocery store location
        if mainMenuInput == 1:

            # add location 
        
        # Option 2: add stuff to a particular grocery list 
        elif mainMenuInput == 2:
        
        # Option 3: View all grocery store locations 

        # Option 4: All items for a single store 

        # Option 5: All items from all stores 

        # Option 9; close the application 
        elif mainMenuInput == 9:
            print('Happy shopping!')
            openList = False
        
        else:
            


main()