numbers = [1,2,5,0,7,0,9,0,2,0,2,3]

def pushZeros(numList):
    numList.sort() # sort the list ascending 
    numZeroes = numList.count(0) #find the number of zeroes 
    del numList[:(numZeroes)] # delete them from the beginning of the list 
    numList.extend([0]*numZeroes) # put the zeroes at the end of the list 
    return numList 

print(pushZeros(numbers))

