# given two lists of equal size, write a function that finds the maximum total speed for tandem bikes. 

# sample input:

redShirtSample = [5,5,3,9,2]
blueShirtSample = [3,6,7,2,1]
fastestStample = True 
# sample output = 32

## brute force method. I should probably do some cracking and packing method that finds the maximum space between the two. 
def tandemSpeed(redShirtSpeeds,blueShirtSpeeds,fastest):
    
# sort both lists. Makes fastest = true the default, technically. 
    if fastest == True:
        redShirtSpeeds.sort(reverse=True) # sorts descending 
    else:
        redShirtSpeeds.sort()
    blueShirtSpeeds.sort() # sorts ascending

# find the length of both 
    lengthOfLists = len(redShirtSpeeds)
    
# Go through each list and compare each pair 
    counter = 0
    runningTot = 0 
    while counter < lengthOfLists:
        runningTot += max(redShirtSpeeds[counter],blueShirtSpeeds[counter]) 
        counter += 1
    
    return runningTot 

# running the function 
sampleOutput = tandemSpeed(redShirtSample,blueShirtSample,fastestStample)
print(sampleOutput)
