sampleInput1 = ["yo", "act", "flop", "tac", "foo", "cat", "oy", "olfp"]

def groupAnagrams(input):
    anagrams = {}
    for word in input:
        sortedWord = ''.join(sorted(word))
        if sortedWord in anagrams:
            anagrams[sortedWord].append(word)
        else:
            anagrams[sortedWord] = [word]
    return list(anagrams.values())
        
print(groupAnagrams(sampleInput1))