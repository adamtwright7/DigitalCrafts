word = input(' Please enter a word: \n')

lowerWord = word.lower()
wordDictionary = {}

for letter in lowerWord:
    if letter in wordDictionary.keys():
        wordDictionary[letter] += 1
    else:
        wordDictionary[letter] = 1

print(wordDictionary)

# dynamic keys are used! variables in those square brackets. 
