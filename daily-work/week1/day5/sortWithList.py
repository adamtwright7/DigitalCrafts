numbers = [1,2,5,0,7,0,9,0,2,0,2,3]

def pushZeros(numList):
    numList.sort() # sort the list ascending 
    
    num = numList[0]

    while num == 0:
        del numList[0]
        numList.append(0)
        num = numList[0]

    return numList 

print(pushZeros(numbers))
