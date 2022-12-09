numbers = [1,2,5,0,7,0,9,0,2,0,2,3]

def pushZeros(numList):
    
lastValue = 0 
    for num in numList:
        if num == 0:
            currentValue = 10 #treats 0 as 10 because they all need to go to the end 
        else:
            currentValue = num
        
        if lastValue > currentValue:
            

        lastValue = currentValue
    return numList 

print(pushZeros(numbers))
