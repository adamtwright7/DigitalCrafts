sentence = input('Please enter a sentence: \n')

sentenceDictionary = {}
sentenceLower = sentence.lower()
sentenceList = sentenceLower.split(' ')

for word in sentenceList:
    if word in sentenceDictionary.keys():
        sentenceDictionary[word] += 1
    else:
        sentenceDictionary[word] = 1

print(sentenceDictionary)

# dynamic keys are used! variables in those square brackets.