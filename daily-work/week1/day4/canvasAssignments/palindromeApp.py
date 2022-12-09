word = input('Input a word to palindrate \n')

isPalindrome = True

counter = 1
for letter in word:
    if letter != word[-counter]:
        isPalindrome = False
    counter = counter + 1

print(isPalindrome)
