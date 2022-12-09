largestNum = input('Factorial of which number? \n')

array = range(1,int(largestNum)+1)

runningTot = 1 
for num in array:
    runningTot = runningTot*num

print(runningTot)
