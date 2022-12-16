# You are going to write a function that will take in a string of letters. 
# You will have to return to me how many times each letter appears in the function.  Please return all your results in an array.

# test input 
testinput = 'blablablanktest'

# Loop through the input, placing each letter in the object. (would use the find function if I remembered how to do that)
def letterTally(inputString): 
    # output should be an object, but we'll return it as an array later. 
    output = {}
    for letter in inputString: # loop through the string, looking at each letter 
        if (letter in output): # if there's already a key of that letter in the output, 
            output[letter] += 1 # increase the value of that key
        else: # if there isn't a key of that letter in the output,
            output[letter] = 1 # make a key:value pair, starting the value at 1
    
    # outside of the loop, wrap the output in an array. 
    return [output]

    # if you want the output to be more array-like 
    # arrayOutput = []
    # for key,value in output.items(): 
    #     arrayOutput.append(key) # unwraps the object into an array 
    #     arrayOutput.append(":")
    #     arrayOutput.append(value)
    # return arrayOutput

print(letterTally(testinput))

