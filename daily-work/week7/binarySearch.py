# Write a function that works as a binary search algorithm. 

# Inputs:
# An array of numbers sorted numerically, lowest to highest. 
# A target number to find. 

# Outputs:
# The index of the target number if it exists in the array, or -1 if it doesn't. 

# Testcase: 

testArray = [0,1,21,33,45,45,61,71,72,73]
testTargetNum = 33
# test output = 3

testArray2 = [1,2,3,4,5,6,7,8,9,10,11]
testNum2 = 6 # output = 5
testNum3 = 12 # output = -1
testNum4 = 3 # output = 2

def binarySearch(array,target):
    ind = 0 # counter to keep track of our index 
    maxInd = len(array) - 1
    minInd = 0 
    while (ind >= minInd) and (ind <= maxInd):
        if array[ind] == target:
            return ind 
        elif target < array[ind]:
            maxInd = ind-1
        else:
            minInd = ind+1
        ind = (maxInd + minInd)//2
    return -1

print(binarySearch(testArray,testTargetNum))
print(binarySearch(testArray2,testNum2))
print(binarySearch(testArray2,testNum3))
print(binarySearch(testArray2,testNum4))
