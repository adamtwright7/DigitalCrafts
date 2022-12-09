numbers = [1,2,5,0,7,0,9,0,2,0,2,3]
# desired numbers = [1,2,2,2,3,5,7,9,0,0,0]

def sortAlgo(list):
    list.sort()
    for number in list:
        if(number == 0):
            list.remove(number)
            list.append(0)
    return print(list)
sortAlgo(numbers)         