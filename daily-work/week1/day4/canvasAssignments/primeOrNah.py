strNumber = input('Which number would you like to check the primeness of? \n')

potentialPrime = int(strNumber)
# I'm going to disregard efficiency. I'll check for factors up to half of the number because 2 is checked early and this works for the first non-prime number, 4.
lesserNumbers = range(2,int((potentialPrime/2)+1)) # start at 2 b/c 1 doesn't count as a factor for primes. 

primeness = True # assume primeness; disprove it by finding a factor. 
for factor in lesserNumbers:
    if potentialPrime % factor == 0:
        primeness = False
        break

if primeness:
    print('%s is prime!' % potentialPrime)
else:
    print('%s is not prime.' % potentialPrime)